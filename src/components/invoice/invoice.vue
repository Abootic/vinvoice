<template>
  <section id="main-dirv">
    <main >
      <!--The Container-->
      <button @click=" onSwitchLanguage">switch</button>
      <div class="container-fluid " >
        <div class="row">
          <!--The Container Insider-->
          <div class="d-grid gap-2">
            <!--Card-->
            <div class="card bg-white shadow p-3 mb-5 bg-body-tertiary rounded dir-sm mt-5">
              <!--Card Bodytttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt-->
              <div class="card-body d-grid gap-2" id="f-section" >
                <div class="row">
                  <!--FRom Part-->
                  <div class="col-sm-4 m-2 d-grid gap-2">
                    <div type="button" class="btn dash-board">
                      <div class="row">
                        <div class="col-sm-4 text-start">
                          <span>{{ langStore.TRANSLATE("from") }}</span>
                        </div>
                      </div>
                      <div class="row" style="justify-content: space-between;">
                        <div class="col-4">
                          <div class="col-sm-3">
                            <img src="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
                              jsaction="VQAsE" class="r48jcc pT0Scc iPVvYb person-icon"
                              alt="person Vector Icons free download in SVG, PNG Format"  />
                          </div>
                        </div>
                        <div class="col-2"></div>
                        <div class="col-6">
                          <div class="col ">
                            <select @change="onSelectCustomer($event)" class="form-select mb-2 "
                              aria-label=".form-select-lg ">
                              <option>{{ langStore.TRANSLATE("select") }}</option>
                              <option v-for="(customer, key) in customers" :key="key" :value="customer.id">
                                {{ customer.name }}
                              </option>
                            </select>
                            <span class="person-icon">  {{ cutomerName }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--FRom Part-->
                  <!--To Part-->
                  <div class="col-sm-4 m-2 d-grid gap-2">
                    <button type="button" class="btn dash-board" data-bs-toggle="modal" data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo">
                      <div class="row">
                      
                          <div class="col-3">
                            <a v-on:click="callModal()">
                              <img class="plus-icon" alt="Image result for plus icon svg" id="dimg_3"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAADd3d16enp/f3/h4eEGBgaDg4Pk5OSLi4vCwsJaWlrPz8/W1tZycnILCwuTk5M6Ojq6urrq6ur5+fllZWVsbGzIyMiioqJPT09fX18YGBghISFBQUGsrKzy8vIzMzMpKSmLFk5YAAACjUlEQVRoge2b6bKiMBBGibKvsirgxvu/5ARwbjlI2iqtL61zc34LpwIS+msSy3oVp/CiPO+Conz5FC8StuKHLtZp9jvxD9tKmzruxYJc14WPl2bJUY/cX1ELcdJx2avTqlvYGtzndbUQCVxd5Sp3CneHKrXILmi3rXSLAu2+qt07tPuodqNveJmp3ZFxQ/AJd8foro0bguOq3Q2jGz23sLrVarFFu4lxo90bxnEb9yPoStW49bsTwu0ZN4S1/PuXwLj/O/f+Q93oLMjpVkd/4+ZwH77VXZWlL3Ekm5kkSWLJXhJOBIS7O+wkwYjnebZkO5KmTVPXURS1bdvsipVuVBXa1z6bcF2iCH8bt160vKuzsmUHoLkfu6PokaIYNj9qarLCkCVsaiH6ud++Qf6zlMxNqfb5DxGM3VdlPxxMbpHNWSwJWQRhOVgHNndj1WzuwRrY3K7F8nCzuwdrYHPXVsPm5nzGYjJQQ7nKOVVnwXLPWboLHnU7vUMjDrU7V03lwwoCDexvNVNCfAMBq2XVNOg1n5y7Gvmic4bJz4ulEXENzSKuO0ee/mqHK4syLsWukYlJ5qa6bpo0nbLUGKpktpoy1hi2Dh1hCObINoa3McTJLHdLdWPAG4NeWb61GISagsN3Tvzh7p1xf5R7//zwr3VT/RZON3rpoHHrd3uEG7147re6iaVzYvP8cOP+MvfWuD/J7TrPD0e5BdqdMo6b002ERribaL9mvnFDIDIw3E00pTL0No/f6ibmliNYTWXBK9pNdF/hG2su6h4kOvoTNzzHb2ZS9vrPcLWyUuXcw4WeUGfKta01urYrlg+fWHp9OyWrRcXY6bngN+K7d2mLf7AXlEXQ5XnkFa9XaX8ACxAwIMVyyf0AAAAASUVORK5CYII="
                                data-atf="1" data-frt="0" />
                            </a>
                          </div>
                          <div class="col-3">
                            <a v-on:click="onihowLoginmodel()">
                              <img class="login-icon" alt="Image result for plus icon svg" id="dimg_3"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAADd3d16enp/f3/h4eEGBgaDg4Pk5OSLi4vCwsJaWlrPz8/W1tZycnILCwuTk5M6Ojq6urrq6ur5+fllZWVsbGzIyMiioqJPT09fX18YGBghISFBQUGsrKzy8vIzMzMpKSmLFk5YAAACjUlEQVRoge2b6bKiMBBGibKvsirgxvu/5ARwbjlI2iqtL61zc34LpwIS+msSy3oVp/CiPO+Conz5FC8StuKHLtZp9jvxD9tKmzruxYJc14WPl2bJUY/cX1ELcdJx2avTqlvYGtzndbUQCVxd5Sp3CneHKrXILmi3rXSLAu2+qt07tPuodqNveJmp3ZFxQ/AJd8foro0bguOq3Q2jGz23sLrVarFFu4lxo90bxnEb9yPoStW49bsTwu0ZN4S1/PuXwLj/O/f+Q93oLMjpVkd/4+ZwH77VXZWlL3Ekm5kkSWLJXhJOBIS7O+wkwYjnebZkO5KmTVPXURS1bdvsipVuVBXa1z6bcF2iCH8bt160vKuzsmUHoLkfu6PokaIYNj9qarLCkCVsaiH6ud++Qf6zlMxNqfb5DxGM3VdlPxxMbpHNWSwJWQRhOVgHNndj1WzuwRrY3K7F8nCzuwdrYHPXVsPm5nzGYjJQQ7nKOVVnwXLPWboLHnU7vUMjDrU7V03lwwoCDexvNVNCfAMBq2XVNOg1n5y7Gvmic4bJz4ulEXENzSKuO0ee/mqHK4syLsWukYlJ5qa6bpo0nbLUGKpktpoy1hi2Dh1hCObINoa3McTJLHdLdWPAG4NeWb61GISagsN3Tvzh7p1xf5R7//zwr3VT/RZON3rpoHHrd3uEG7147re6iaVzYvP8cOP+MvfWuD/J7TrPD0e5BdqdMo6b002ERribaL9mvnFDIDIw3E00pTL0No/f6ibmliNYTWXBK9pNdF/hG2su6h4kOvoTNzzHb2ZS9vrPcLWyUuXcw4WeUGfKta01urYrlg+fWHp9OyWrRcXY6bngN+K7d2mLf7AXlEXQ5XnkFa9XaX8ACxAwIMVyyf0AAAAASUVORK5CYII="
                                data-atf="1" data-frt="0" />
                            </a>
                          </div>
                          <div class="col-6">
                            <div class="text-option">{{   langStore.TRANSLATE("customerdetails") }}</div>
                          </div>
                        
                       
                      </div>
                    </button>
                  </div>
                  <!--To Part-->
                </div>

                <!---------------------------------- InvoiceTable ------------------------------->
                <div class="row" id="t-section">
                  <!-- <div v-if="taskStore.isInvoiceFormValueShow" class="col-lg-8 col-mb-8 col-sm-12 col-xs-12 mt-3" style="background-color: red;"> -->
                  <div v-if="taskStore.isInvoiceFormValueShow" class="col-lg-12 col-mb-12 col-sm-12 col-xs-12 mt-3">
                    <invoicedetails v-for="(
                          invoiceList, index
                        ) in taskStore.invoiceDetailsList" :key="index" :invoiceList="invoiceList" />
                  </div>

                  <InvoiceTable class="form-table-component dash-board d-grid gap-2" />
              
                </div>

                <!---------------------------------- invoicesummery ------------------------------->
                <invoiceSummery />
              </div>
              <div class="note" id="note-id">
                <div class="note-text mt-2" >
                  <div>{{ langStore.TRANSLATE("note") }}</div>
                </div>
                <div class="note-input">
                  <input
             
                type="text"
                v-model="note"
                class="form-control"
                
              />
                </div>
              </div>
              
              <!---------------------------------- btn ------------------------------->
              <div class="btn-group" role="group" aria-label="Basic example" id="s-section" >
                <button type="button" id="add-orderId" class="btn m-2 btn-success"  v-if="constrctBtn" @click="onSave($event)">
                  {{ langStore.TRANSLATE("saveBtn") }}
                </button>
                <button type="button" id="add-orderId" class="btn m-2 btn-success" v-if="deconstructBtn" @click="onClear($event)">
                {{ langStore.TRANSLATE("createnew") }}
                </button>
                <!-- v-on:click="doawnload($event)" -->
                <a type="button" v-bind:href="downloadUrl" download="dd.pdf" target="_blank" class="btn m-2 btn-primary" v-if="isBtnShow" >
                  {{ langStore.TRANSLATE("download") }}
                </a>
                <button type="button" class="btn m-2 btn-info" v-if="isBtnShow">
                  {{ langStore.TRANSLATE("print") }}
                </button>
              </div>
              <!---------------------------------- btn ------------------------------->
            </div>
          </div>
        </div>
      </div>
    </main>
    <CustomerDetails class=".custom-modal" v-if="isShomodel" @close="close" />
    <login class=".custom-modal" v-if="isShowLoginmodel" @closeLogin="closeLogin" />
  </section>
</template>
<style scoped>
@import url("../../assets/css/style.css");

.form-table-component {
  border: 2px dashed #c2c6cb;
  border-radius: 4px;
}

.person-icon {
  max-width: 512px;
  height: 40px;
 
  width: 64px;
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
.note{

  display: flex;
    justify-content:start;
    align-items: start;
}
.note-text{
  margin: 5px;

}
.note-input{
  margin: 5px;

  width: 100%;
}
</style>

<script>
import login from "../login.vue"

import InvoiceTable from "./InvoiceTable.vue";
import CustomerDetails from './CustomerDetails.vue';
import invoicedetails from './invoiceDetails.vue';

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
   login


  },
  setup() {
    const taskStore = useTaskStore();
    const langStore=useLanguageStore();
   
    const showForm = () => {
      taskStore.onInvoiceFormShow();
      
    };
  
   

    return { taskStore, showForm ,langStore};
  },




  data() {
    return {
      downloadUrl:"",
      customers: [
      ],
      cutomerName: "",
      isBtnShow: false,
      isShomodel: false,
      isShowLoginmodel: false,
    
      invoiceList: [0],
      deconstructBtn:false,
      constrctBtn:true,
      note:""
    }
  },
  methods: {
    async getCustomer() {
      try {

        const c_res = await this.callApi("Get", 'https://www.kifapos.com/api/v3/list-customers', { "current_page": "1", "customer_name": "customer" });
        if (c_res.status === 200) {
          if (c_res["data"]["data"] != null) {
            for (let i = 0; i < c_res["data"]["data"].length; i++) {
              this.customers.push({ "id": c_res["data"]["data"][i]["id"], "name": c_res["data"]["data"][i]["name"] });

            }
          }

        }
      } catch (e) {

        return e;
      }

    },

    close() {

      this.isShomodel = false
    },
    callModal() {
      this.isShomodel = true
    },
    closeLogin() {
      this.isShowLoginmodel = false;
    },

    async onSave(e) {

      e.preventDefault();

      
      const store = useTaskStore();
      if(store.orderobj.order_details.length>0){
      try {
        document.getElementById("add-orderId").innerHTML="<div class='spinner-border text-info'><span class='sr-only'></span></div>";
      if(store.orderobj.paid_method==""){
        store.orderobj.paid_method="كاش";
      }
      if(store.orderobj.is_paid==""){
        store.orderobj.is_paid=0;
      }
    
      let chsherId=   window.localStorage.getItem("chsherId");
      store.orderobj.notes=this.note;
      if(chsherId!=null){
        store.orderobj.cashier_id=chsherId;
      }else{
        store.orderobj.cashier_id=309;
      }
      store.orderobj.order_details.forEach(a=>{
        delete a.tax,a.cid,a.orginalPrice
      });
    
      console.log(JSON.stringify( store.orderobj));
       
        const p_res = await this.callApi("POST", 'https://www.kifapos.com/api/v3/add-order', store.orderobj);
        if (p_res.status === 200) {
          this.deconstructBtn= true;
          this.constrctBtn=false;
          document.getElementById("add-orderId").innerHTML="save";
       
          this.downloadUrl=p_res["data"]["data"]["invoice_link"];
          this.isBtnShow = true;
        } else {
          document.getElementById("add-orderId").innerHTML="save";
       
        }
      } catch (e) {
        document.getElementById("add-orderId").innerHTML="save";
        console.log(e.response);
      }}else{alert("must choose at least one item ");}



    


  },
  onSelectCustomer(e) {
    const store = useTaskStore();
    store.orderobj.customer_id = e.target.value;
    
    this.cutomerName = e.target.options[e.target.options.selectedIndex].text;



  },
  onihowLoginmodel() {
    this.isShowLoginmodel = true;
  },
  onClear(e){
    const store=useTaskStore();
    e.preventDefault();
    this.deconstructBtn= false;
          this.constrctBtn=true;
          store.$reset();
          window.location.reload();
  },
  onSwitchLanguage(){
 const langStore=useLanguageStore();
  langStore.switchLanguage();

 
      if(langStore.language=="ar"){
        document.getElementById("f-section").style.direction="rtl";
        document.getElementById("s-section").style.direction="rtl";
        document.getElementById("t-section").style.direction="rtl";
        document.getElementById("note-id").style.direction="rtl";
       
      }else{
      
        document.getElementById("f-section").style.direction="ltr";
        document.getElementById("s-section").style.direction="ltr";
        document.getElementById("t-section").style.direction="ltr";
        document.getElementById("note-id").style.direction="ltr";
      }
 },
 

},
   async   beforeMount(){
  await this.getCustomer();
}
}

</script>