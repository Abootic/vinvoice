<template>
  <!--The new Added Here-->
  <div class="container-fluid co-color" style="background-color: white">
    <div class="row">
      <div class="col-lg-6 col-mb-6 col-sm-12 col-xs-12">
        <div class="container-fluid " >
          <div class="row bg-color" >
            <div class="col-lg-6 col-mb-6 col-sm-6 col-xs-6">
              <div>{{ langStore.TRANSLATE("invoiceType") }}</div>
              <select
                v-on:change="onSelectInvoiceType($event)"
                class="form-select text-strat   mt-1 mb-1"
                aria-label="Default select example"
              >
                <!-- <option v-for="(pay_method ,key) in store.payment_methods" :key="key" :value="pay_method">{{pay_method}}</option> -->
                <option>{{ langStore.TRANSLATE("selectTaxType") }}</option>
                <option selected :value="0" >
                  {{ langStore.TRANSLATE("is_paidwithouttax") }}
                </option>
                <option :value="1">
                  {{ langStore.TRANSLATE('is_paidwithtax') }}
                </option>
              </select>
            </div>
            <div class="col-lg-6 col-mb-6 col-sm-6 col-xs-6">
              <div>{{ langStore.TRANSLATE("pay_method") }}</div>
              <select
                v-on:change="onSelectPayment($event)"
                class="form-select text-strat   mt-1 mb-1" 
                aria-label="Default select example"
              >
              <option>{{ langStore.TRANSLATE("selectPayment") }}</option>
                <option
                  v-for="(pay_method, key) in store.payment_methods"
                  :key="key"
                  :value="pay_method"
                >
                  {{ pay_method }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3  col-sm-12 col-xs-12 mt-2"></div>
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2">
        <div class="row bg-color">
          <div class="col-sm-12">
            <div class="row" >
              <div class="col-sm-12 text-title mt-1">
                {{ langStore.TRANSLATE("invoicesummary") }}
              </div>

             
            </div>
          </div>
        </div>
        <div class="row"  style="border: 1px solid lightgrey;">
          <div class="col-sm-12">
         <div class="row">
              <div class="col-6 text-center summury-details">
                {{ langStore.TRANSLATE("pricewithoutcost") }}
              </div>
            
              <div class="col-6 text-center summury-details">
                {{ store.orderobj.cost_without_tax }}
              </div>
            </div> 
            <div class="row" >
              <div class="col-6 text-center summury-details">
                {{ langStore.TRANSLATE("tax") }}
              </div>
              <!-- <div class="col-4 text-center"></div> -->
              <div class="col-6 text-center summury-details">{{ store.orderobj.tax }}</div>
            </div>

            <div class="row">
              <div class="col-6 text-center summury-details">
                {{ langStore.TRANSLATE("discount") }}
              </div>
              <!-- <div class="col-4 text-center"></div> -->
              <div class="col-6 text-center summury-details">
                {{ store.discount }}
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-6 text-center">
                {{ langStore.TRANSLATE("pricewithcost") }}
              </div>
              <div class="col-6 text-center">
                {{ store.orderobj.cost_with_tax }}
              </div>
            </div> -->

            <div class="row">
              <div class="col-6 text-center summury-details">
                {{ langStore.TRANSLATE("total") }}
              </div>
         
              <div class="col-6 text-center summury-details">{{ store.total }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--The new Added Here-->
</template>
<style scoped>
.co-color {
  background-color: #adb5bdb3;
}
.bg-color {
  background-color: #adb5bde6;
}
.text-option {
  width: 7rem;
  height: 3rem;
  margin-inline: 62px;
}
.summury-details{
 font-size:13px; font-weight: 555;
}
</style>
<script>
import { useLanguageStore } from "@/stores/languageStore";
import { useTaskStore } from "../../stores/TaskStore";

export default {
  name: "invoice-summery",
  setup() {
    const store = useTaskStore();

    const langStore = useLanguageStore();

    return { store, langStore };
  },
  data() {
    return {};
  },
  methods: {
    async getPaymentMethod() {
      const store = useTaskStore();
      try {
        const pay_res = await this.callApi(
          "Get",
          "https://www.kifapos.com/api/v3/get-settings"
        );
        if (pay_res.status === 200) {
          if (pay_res["data"]["data"]["payment_methods"] != null) {
            localStorage.setItem("tax", pay_res["data"]["data"]["tax"].value);
            store.payment_methods = pay_res["data"]["data"]["payment_methods"];
          }
        }
      } catch (e) {
        console.log(e.response);
      }
    },
    /////// onSelectPayment to select payment methode
    onSelectPayment(e) {
      const store = useTaskStore();
      store.orderobj.paid_method = e.target.value;
    },
    onSelectInvoiceType(e) {
      const store = useTaskStore();
      console.log(e.target.value)
      store.orderobj.is_paid = e.target.value;
    },
    
  },
  beforeMount() {
    this.getPaymentMethod();
  },
};
</script>
