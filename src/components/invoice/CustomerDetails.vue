<template>
  <!--Modal Save-->
  <div class="modal" style="display:inline" id="exampleModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ languageStore.TRANSLATE("c_newCustomer") }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"  @click="close" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form  v-on:submit="create($event)" >
            <div class="mb-1">
              <label for="recipient-name" class="col-form-label text-start">{{ languageStore.TRANSLATE("c_customerName") }}</label>
              <input type="text" class="form-control" v-on:input="typeCname" v-model="customerData.name" id="recipient-name" >
              <span class="text-danger">{{  nameErr }}</span>
            </div>
            <!-- <div class="mb-3">
              <label for="recipient-name" class="col-form-label">{{ languageStore.TRANSLATE("c_username") }}</label>
              <input type="text" class="form-control" v-model="customerData.user_name" id="recipient-name">
            </div> -->
            <div class="mb-1">
              <label for="recipient-name" class="col-form-label">{{ languageStore.TRANSLATE("c_email") }}</label>
              <input type="text" class="form-control" v-model="customerData.email" id="recipient-name">
            </div>
            <div class="mb-1">
              <label for="recipient-name" class="col-form-label">{{ languageStore.TRANSLATE("c_Address") }}</label>
              <input type="text" class="form-control"  v-model="customerData.address_en" id="recipient-name">
            </div>
            <div class="mb-1">
              <label for="recipient-name" class="col-form-label">{{ languageStore.TRANSLATE("c_TaxNumber") }}</label>
              <input type="text" class="form-control"  v-model="customerData.tax_number" id="recipient-name">
            </div>
            <div class="mb-1">
              <label for="recipient-name" class="col-form-label">{{ languageStore.TRANSLATE("c_Phone") }}</label>
              <input type="number"  v-model="customerData.phone" class="form-control" id="recipient-name">
            </div>
            <div class="mb-3 btn-group">
            <button type="button" class="btn btn-secondary m-2"  @click="close" data-bs-dismiss="modal">{{ languageStore.TRANSLATE("closeBtn") }}</button>
          <button type="submit" class="btn btn-primary m-2" id="save-btn" :disabled="disable" >{{ languageStore.TRANSLATE("saveBtn") }}</button>
            </div>
          </form>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary"  @click="close" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" :disabled="disable" >Save</button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { useTaskStore } from '@/stores/TaskStore';

//import { callApi  }  from "../../common.js";
import { useLanguageStore } from "../../stores/languageStore";
export default {
    name:"customer-details",
    setup(){
      const languageStore=useLanguageStore();
     
      return{ languageStore}
    },
    
    data(){
      return{
        customerData:{
          name:"",
      //    user_name:"",
          email:"",
          address_en:"",
          tax_number:"",
          phone:Number
        },
        nameErr:"",
        disable:false,
      }
    },
    methods:{
      typeCname(){
this.nameErr="";
      },
      close:function(){
         
         this.$emit("close");
     },
    async create(e) {
      const store=useTaskStore();
      e.preventDefault();
      if(this.customerData.name==""){
            this.nameErr="enter customer name please ";

          }else{
          document.getElementById("save-btn").innerHTML="<div class='spinner-border text-info'><span class='sr-only'></span></div>";
         
        
    
       try{

        store.cutomerName=this.customerData.name;
          this.disable=true;
       
           const res=await this.callApi("post",'https://www.kifapos.com/api/v3/create-customer',this.customerData);
    
          const elm=this.$refs.cBtn;
          if(res.status === 200){
              document.getElementById("save-btn").innerHTML="حفظ";
              store.orderobj.customer_id=res["data"]["data"]["id"];
            
              this.disable=false;
              this.$emit("close");
              elm.click();
           
          }else{
              document.getElementById("save-btn").innerHTML="حفظ";
              this.disable=false;
              
          }
      }catch(e){
          document.getElementById("save-btn").innerHTML="حفظ";
              this.disable=false;
             
           
          }}
         
       
      }
    }
}
</script>
