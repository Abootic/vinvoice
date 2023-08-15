<template>
  <section id="main-dirv" >
    <main>
      <!--The Container-->

      <div class="container-fluid">
        <div class="row" >
          <!--The Container Insider-->
          <div class="d-grid gap-2" >
            <!--Card-->
          
            <div
              class="card bg-white shadow p-3 bg-body-tertiary rounded dir-sm "
            >
              <!--Card Bodytttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt-->
              <div class="card-body d-grid gap-2" id="f-section">
                <div class="row">
                  <div class="col-sm-2 mt-2">
                    <!-- <button @click="openLogin">login</button> -->
                    <button class="btn btn Cbtn" 
                  
                    @click="onSwitchLanguage">
                      {{ langStore.TRANSLATE("changeLang") }}
                    </button>
                  </div>
                  <!--FRom Part-->
                  <div class="col-sm-4 m-2 d-grid gap-2">
                    <div type="button" class="btn dash-board">
                      <div class="row">
                        <div class="col-sm-10 text-center mt-2 mb-2">
                          {{ langStore.TRANSLATE("from") }}:
                          <span> {{ taskStore.cutomerName }}</span>
                        </div>
                        <div class="col-sm-2"></div>
                      </div>
                      <div class=" select-customer-container">
                          <div class=" m-1">
                            <button :disabled="taskStore.blockBtn" v-on:click="callModal()" class="btn">
                              <img
                                class="plus-icon"
                                alt="Image result for plus icon svg"
                                id="dimg_3"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAADd3d16enp/f3/h4eEGBgaDg4Pk5OSLi4vCwsJaWlrPz8/W1tZycnILCwuTk5M6Ojq6urrq6ur5+fllZWVsbGzIyMiioqJPT09fX18YGBghISFBQUGsrKzy8vIzMzMpKSmLFk5YAAACjUlEQVRoge2b6bKiMBBGibKvsirgxvu/5ARwbjlI2iqtL61zc34LpwIS+msSy3oVp/CiPO+Conz5FC8StuKHLtZp9jvxD9tKmzruxYJc14WPl2bJUY/cX1ELcdJx2avTqlvYGtzndbUQCVxd5Sp3CneHKrXILmi3rXSLAu2+qt07tPuodqNveJmp3ZFxQ/AJd8foro0bguOq3Q2jGz23sLrVarFFu4lxo90bxnEb9yPoStW49bsTwu0ZN4S1/PuXwLj/O/f+Q93oLMjpVkd/4+ZwH77VXZWlL3Ekm5kkSWLJXhJOBIS7O+wkwYjnebZkO5KmTVPXURS1bdvsipVuVBXa1z6bcF2iCH8bt160vKuzsmUHoLkfu6PokaIYNj9qarLCkCVsaiH6ud++Qf6zlMxNqfb5DxGM3VdlPxxMbpHNWSwJWQRhOVgHNndj1WzuwRrY3K7F8nCzuwdrYHPXVsPm5nzGYjJQQ7nKOVVnwXLPWboLHnU7vUMjDrU7V03lwwoCDexvNVNCfAMBq2XVNOg1n5y7Gvmic4bJz4ulEXENzSKuO0ee/mqHK4syLsWukYlJ5qa6bpo0nbLUGKpktpoy1hi2Dh1hCObINoa3McTJLHdLdWPAG4NeWb61GISagsN3Tvzh7p1xf5R7//zwr3VT/RZON3rpoHHrd3uEG7147re6iaVzYvP8cOP+MvfWuD/J7TrPD0e5BdqdMo6b002ERribaL9mvnFDIDIw3E00pTL0No/f6ibmliNYTWXBK9pNdF/hG2su6h4kOvoTNzzHb2ZS9vrPcLWyUuXcw4WeUGfKta01urYrlg+fWHp9OyWrRcXY6bngN+K7d2mLf7AXlEXQ5XnkFa9XaX8ACxAwIMVyyf0AAAAASUVORK5CYII="
                                data-atf="1"
                                data-frt="0"
                              />
                            </button>
                          </div>
                          <div class="m-1">
                            <select :disabled="taskStore.blockBtn"
                              @change="onSelectCustomer($event)"
                              class="form-select mb-2"
                              aria-label=".form-select-lg "
                            >
                              <option>
                                {{ langStore.TRANSLATE("selectCustomer") }}
                              </option>
                              <option
                                v-for="(customer, key) in customers"
                                :key="key"
                                :value="customer.id"
                              >
                                {{ customer.name }}
                              </option>
                            </select>
                          </div>
                       
                      </div>
                    </div>
                  </div>
               
                </div>

                <!---------------------------------- InvoiceTable ------------------------------->
               
                <div class="row " id="t-section">
                  <!-- <div v-if="taskStore.isInvoiceFormValueShow" class="col-lg-8 col-mb-8 col-sm-12 col-xs-12 mt-3" style="background-color: red;"> -->
                  <div
                    v-if="taskStore.isInvoiceFormValueShow"
                    class="col-lg-12 col-mb-12 col-sm-12 col-xs-12 mt-3 m-2 d-grid gap-2"
                  >
                    <invoicedetails
                      v-for="(
                        invoiceList, index
                      ) in taskStore.invoiceDetailsList"
                      :key="index"
                      :invoiceList="invoiceList"
                    />
                  </div>

                  <InvoiceTable
                    class="form-table-component dash-board m-2 d-grid gap-2"
                  />
                </div>

                <!---------------------------------- invoicesummery ------------------------------->
                <invoiceSummery  />
              </div>
              <div class="note" id="note-id">
                <div class="note-text mt-2">
                  <div>{{ langStore.TRANSLATE("note") }}</div>
                </div>
                <div class="note-input">
                  <input type="text" v-model="note" class="form-control" />
                </div>
              </div>

              <!---------------------------------- btn ------------------------------->
              <div
                class="btn-group"
                role="group"
                aria-label="Basic example"
                id="s-section"
              >
                <button
                  type="button"
                  id="add-orderId"
                  class="btn m-2 btn-success saveBtn"
                  v-if="constrctBtn"
                  @click="onSave($event)"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                </svg>
                  {{ langStore.TRANSLATE("saveBtn") }}
                </button>
                <button
                  type="button"
                  id="add-orderId"
                  class="btn m-2 btn-success"
                  v-if="deconstructBtn"
                  @click="onClear($event)"
                >
                  {{ langStore.TRANSLATE("createnew") }}
                </button>
                <!-- v-on:click="doawnload($event)" -->
                <a
                  type="button"
                  v-bind:href="downloadUrl"
                  download
                  target="_blank"
                  class="btn m-2 Cbtn"
                  v-if="isBtnShow" 
                >
              
              
                <div class="icons-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                <span class="btn-text">
                  {{ langStore.TRANSLATE("download") }}</span>
                  </div>
                
                </a>
                
               
                <!-- <button type="button" class="btn m-2 btn-info" v-if="isBtnShow">
                  {{ langStore.TRANSLATE("print") }}
                </button> -->
              </div>
              <!---------------------------------- btn ------------------------------->
            </div>
          </div>
        </div>
      </div>
    </main>
    <CustomerDetails class=".custom-modal" v-if="isShomodel" @close="close" />
    <login
      class=".custom-modal"
      v-if="isShowLoginmodel"
      @closeLogin="closeLogin"
    />
  </section>
</template>
<style scoped>
@import url("../../assets/css/style.css");

.form-table-component {
  border: 2px dashed #c2c6cb;
  border-radius: 4px;
}

.text-option {
  width: 119%;
  margin-left: -8%;
}

.plus-icon {
  max-width: 512px;
  height: 36px;
  /* margin-left: -17%; */
  /* margin-left: -78%; */
  width: 51px;
}

.login-icon {
  max-width: 512px;
  height: 36px;
  /* margin-left: -17%; */
  margin-left: -78%;
  width: 51px;
  background-color: red;
}

.custom-modal {
  --bs-modal-zindex: 1055;
  --bs-modal-width: 500px;
  --bs-modal-padding: 1rem;
  --bs-modal-margin: 0.5rem;
  --bs-modal-color: ;
  --bs-modal-bg: #fff;
  --bs-modal-border-color: var(--bs-border-color-translucent);
  --bs-modal-border-width: 1px;
  --bs-modal-border-radius: 0.5rem;
  --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --bs-modal-inner-border-radius: calc(0.5rem - 1px);
  --bs-modal-header-padding-x: 1rem;
  --bs-modal-header-padding-y: 1rem;
  --bs-modal-header-padding: 1rem 1rem;
  --bs-modal-header-border-color: var(--bs-border-color);
  --bs-modal-header-border-width: 1px;
  --bs-modal-title-line-height: 1.5;
  --bs-modal-footer-gap: 0.5rem;
  --bs-modal-footer-bg: ;
  --bs-modal-footer-border-color: var(--bs-border-color);
  --bs-modal-footer-border-width: 1px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-modal-zindex);
  /*display: none; */
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  transition: opacity 0.15s linear;
}
.note {
  display: flex;
  justify-content: start;
  align-items: start;
}
.note-text {
  margin: 5px;
}
.note-input {
  margin: 5px;

  width: 100%;
}
</style>

<script>
import login from "../login.vue";

import InvoiceTable from "./InvoiceTable.vue";
import CustomerDetails from "./CustomerDetails.vue";
import invoicedetails from "./invoiceDetails.vue";

import invoiceSummery from "./InvoiceSummery.vue";
import { useTaskStore } from "../../stores/TaskStore";
import { useLanguageStore } from "../../stores/languageStore";

export default {
  name: "invoice-card",
  components: {
    InvoiceTable,
    CustomerDetails,
    invoicedetails,
    invoiceSummery,
    login,
  },
  setup() {
    const taskStore = useTaskStore();
    const langStore = useLanguageStore();

    const showForm = () => {
      taskStore.onInvoiceFormShow();
    };

    return { taskStore, showForm, langStore };
  },

  data() {
    return {
      downloadUrl: "",
      customers: [],

      isBtnShow: false,
      isShomodel: false,
      isShowLoginmodel: false,

      invoiceList: [0],
      deconstructBtn: false,
      constrctBtn: true,
      note: "",
    };
  },
  methods: {
    async getCustomer() {
      try {
        const c_res = await this.callApi(
          "Get",
          "https://www.kifapos.com/api/v3/list-customers",
          { current_page: "1", customer_name: "customer" }
        );
        if (c_res.status === 200) {
          if (c_res["data"]["data"] != null) {
            for (let i = 0; i < c_res["data"]["data"].length; i++) {
              this.customers.push({
                id: c_res["data"]["data"][i]["id"],
                name: c_res["data"]["data"][i]["name"],
              });
            }
          }
        } else if (c_res.status == 401) {
        // console.log(c_res["data"]["message"]);
          alert(c_res["data"]["message"]);
        }
      } catch (e) {
        return e;
      }
    },

    close() {
      this.isShomodel = false;
    },
    callModal() {
      this.isShomodel = true;
    },
    openLogin(){
      this.isShowLoginmodel = true;
    },
    closeLogin() {
      this.isShowLoginmodel = false;
    },

    async onSave(e) {
      e.preventDefault();

      const store = useTaskStore();
      if (store.orderobj.order_details.length > 0) {
        try {
          document.getElementById("add-orderId").innerHTML =
            "<div class='spinner-border text-light'><span class='sr-only'></span></div>";
          if (store.orderobj.paid_method == "") {
            store.orderobj.paid_method = "كاش";
          }
          if (store.orderobj.is_paid == "") {
            store.orderobj.is_paid = 1;
          }
          if (store.orderobj.invoice_type == "") {
            store.orderobj.invoice_type = 0;
          }
          if (store.orderobj.invoice_pattern == "") {
            store.orderobj.invoice_type = 0;
          }


          let chsherId = window.localStorage.getItem("chsherId");
       
          store.orderobj.notes = this.note;
          if (chsherId != null) {
            store.orderobj.cashier_id = chsherId;
          } else {
            store.orderobj.cashier_id = 309;
          }
          store.orderobj.order_details.forEach((a) => {
            delete a.tax, delete a.cid;
          });
          store.orderobj.order_details.map((a) => {
            delete a.orginalPrice, delete a.totalp, delete a.total_discount;
          });

          store.orderobj.order_details.map((a) => {
            delete a.additonal, delete a.priceAfterDiscount;
          });

       

          const p_res = await this.callApi(
            "POST",
            "https://www.kifapos.com/api/v3/add-order",
            store.orderobj
          );
          if (p_res.status === 200) {
            this.deconstructBtn = true;
            this.constrctBtn = false;
            store.blockBtn=true;
            document.getElementById("add-orderId").innerHTML = "save";

            this.downloadUrl = p_res["data"]["data"]["invoice_link"];
            this.isBtnShow = true;
          } else {
            document.getElementById("add-orderId").innerHTML = "save";
          }
        } catch (e) {
          document.getElementById("add-orderId").innerHTML = "save";
        // console.log(e.response);
        }
      } else {
        alert("must choose at least one item ");
      }
    },
    onSelectCustomer(e) {
      const store = useTaskStore();
      store.orderobj.customer_id = e.target.value;

      store.cutomerName = e.target.options[e.target.options.selectedIndex].text;
    },
    onihowLoginmodel() {
      this.isShowLoginmodel = true;
    },
    onClear(e) {
      const store = useTaskStore();
      e.preventDefault();
      this.deconstructBtn = false;
      this.constrctBtn = true;
      store.blockBtn=true;
      store.$reset();
      window.location.reload();
    },
    onSwitchLanguage() {

      const langStore = useLanguageStore();
      langStore.switchLanguage();
    

      const lang =
        window.localStorage.getItem("lang") == null
          ? "en"
          : window.localStorage.getItem("lang");
      if (lang == "ar") {
        document.getElementById("f-section").style.direction = "rtl";
        document.getElementById("s-section").style.direction = "rtl";
        document.getElementById("t-section").style.direction = "rtl";
        document.getElementById("note-id").style.direction = "rtl";
      } else {
        document.getElementById("f-section").style.direction = "ltr";
        document.getElementById("s-section").style.direction = "ltr";
        document.getElementById("t-section").style.direction = "ltr";
        document.getElementById("note-id").style.direction = "ltr";
      }
    setTimeout(()=>{location.reload();},3000);
    
    
    },
  },
  mounted() {
    const lang =
      window.localStorage.getItem("lang") == null
        ? "en"
        : window.localStorage.getItem("lang");
    if (lang == "ar") {
      document.getElementById("f-section").style.direction = "rtl";
      document.getElementById("s-section").style.direction = "rtl";
      document.getElementById("t-section").style.direction = "rtl";
      document.getElementById("note-id").style.direction = "rtl";
    } else {
      document.getElementById("f-section").style.direction = "ltr";
      document.getElementById("s-section").style.direction = "ltr";
      document.getElementById("t-section").style.direction = "ltr";
      document.getElementById("note-id").style.direction = "ltr";
    }
  },
  async beforeMount() {
    await this.getCustomer();
  },
};
</script>