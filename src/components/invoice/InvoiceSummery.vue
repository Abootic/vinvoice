<template>
    <!--The new Added Here-->
    <div class="container-fluid co-color" style="background-color:white">
        <div class="row ">
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
<div class="row bg-color" >

    <div class=" col-sm-3"  style="background-color:white">
  
    </div>
     <div class=" col-sm-3" style="background-color:white">
  
    </div>
     <div class=" col-sm-6 ">
      <div class="row">
        <div class="col-sm-4  text-title mt-1 ">
          {{ langStore.TRANSLATE("invoicesummary") }}
        </div>
       
      
        <div class="col-sm-4  ">
          <select v-on:change="onSelectPayment($event)" class="form-select   text-start text-option  mt-1 mb-1" aria-label="Default select example">
    <option v-for="(pay_method ,key) in store.payment_methods" :key="key" :value="pay_method">{{pay_method}}</option>

  </select>
  
        </div>
        <div class="col-sm-3  text-title"></div>
      </div>
      
    </div>
  </div>
  <div class="row ">
    <div class=" col-sm-3" style="background-color:white">
  
    </div>
    <div class=" col-sm-3"  style="background-color:white">
  
    </div>
    <div class=" col-sm-6">
  
   
 
  <div class="row">

    <div class="col-4 text-center">{{ langStore.TRANSLATE("tax") }}</div>
    <div class="col-4 text-center"></div>
    <div class="col-4  text-center">{{store.orderobj.tax}}</div>

  </div>
  <div class="row">

<div class="col-4 text-center">{{ langStore.TRANSLATE("pricewithcost") }}</div>
<div class="col-4 text-center"></div>
<div class="col-4  text-center">{{ store.orderobj.cost_with_tax }}</div>

</div>
<div class="row">

<div class="col-4 text-center">{{ langStore.TRANSLATE("pricewithoutcost") }}</div>
<div class="col-4 text-center"></div>
<div class="col-4  text-center">{{ store.orderobj.cost_without_tax }}</div>

</div>
  <div class="row">

    <div class="col-4 text-center">{{ langStore.TRANSLATE("total") }}</div>
    <div class="col-4 text-center"></div>
    <div class="col-4  text-center">{{ store.total  }}</div>
  </div>
</div>
</div>
</div>
</div>
    </div>
  <!--The new Added Here-->
</template>
<style scoped>
.co-color{
    background-color: #adb5bdb3;
}
.bg-color{
    background-color: #adb5bde6;
}
.text-option{
    width: 7rem;
    height: 3rem;
    margin-inline: 62px;
   
}
/*.text-title{

    width: 39%;
    font-size: 88%;
    margin-block: 17px;
}*/
</style>
<script>
import { useLanguageStore } from '@/stores/languageStore';
import {useTaskStore} from "../../stores/TaskStore"

export default {
    name:"invoice-summery",
    setup(){
const store=useTaskStore();

const langStore=useLanguageStore();

return {store,langStore};
    },
    data(){
      return{
       // payment_methods:[],
      }
    },
methods:{
  async getPaymentMethod(){
const store=useTaskStore();
    try{
      const pay_res=await this.callApi("Get",'https://www.kifapos.com/api/v3/get-settings');
if(pay_res.status === 200){
 

if(pay_res["data"]["data"]["payment_methods"]!=null){
 
  localStorage.setItem("tax",pay_res["data"]["data"]["tax"].value);
  store.payment_methods=pay_res["data"]["data"]["payment_methods"];
}
      
      
    }
    }catch(e){
      console.log(e.response);
    }
  },
  /////// onSelectPayment to select payment methode
  onSelectPayment(e){
    const store=useTaskStore();
    store.orderobj.paid_method=e.target.value;
   
  }

},
beforeMount(){
  this.getPaymentMethod();
}
}
</script>
