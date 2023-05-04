<template>
    <!-- <div class="col-lg-8 col-mb-8 col-sm-12 col-xs-12 mt-3" style="background-color: red;"> -->
        <div class="row" style="text-align: initial;justify-content: space-between;" >
            <div id="col-start" class="col-lg-2 col-mb-2 col-sm-2 col-xs-12">



                <div class="row">
                    <div class="col-lg-12 col-mb-12 col-sm-12 table-header">{{ langStore.TRANSLATE("pname") +invoiceList.id  }} </div>
                    <div class="col-lg-12 col-mb-2 col-sm-12  mt-2">{{ invoiceList.name }}</div>
            </div>
        </div>
        <div id="col-start" class="col-lg-2 col-mb-2 col-sm-2 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-mb-12 col-sm-12 table-header">{{ langStore.TRANSLATE("Quantity") }}</div>
                    <div class="col-lg-12 col-mb-2 col-sm-12  mt-2">{{ invoiceList.quantity }}</div>
            </div>
        </div>
        <div id="col-start" class="col-lg-1 col-md-1 col-sm-2 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 table-header">{{ langStore.TRANSLATE("price") }}</div>
                    <div class="col-lg-12 col-md-12 col-sm-12  mt-2">{{invoiceList.price}}</div>
            </div>
        </div>

        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 table-header">{{ langStore.TRANSLATE("discount") }}</div>
                    <div class="col-lg-12 col-md-2 col-sm-12  mt-2">{{invoiceList.discount}}</div>
            </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 table-header">    {{ langStore.TRANSLATE("afterdiscount") }}</div>
                    <div class="col-lg-12 col-md-2 col-sm-12  mt-2">{{invoiceList.price-invoiceList.discount}}</div>
            </div>
        </div>
        <div id="col-start" class="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-md-12  col-sm-12 table-header">{{ langStore.TRANSLATE("tax") }}</div>
                    <div class="col-lg-12 col-md-12 col-sm-12  mt-2">{{ invoiceList.Tax }}</div>
            </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2  ">
                <div class="row">
                    <div class="col-lg-12 col-md-2 col-sm-12 table-header"> {{ langStore.TRANSLATE("total") }}</div>
                    <div class="col-lg-12 col-md-2 col-sm-12  mt-2">{{ invoiceList.Subtotal }}</div>
            </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2  ">
            <div class="row">

                <button type="button" @click="onEdit(invoiceList)" class="btn col-5">
                    edit
                </button>
                <div  class="btn col-2" @click="store.removeFromInvoiceList(invoiceList,invoiceList.id)" >
                  <!-- <img src="https://www.svgrepo.com/show/349637/trash.svg" @click="store.removeFromInvoiceList(index)" class="icon-svg"   alt="Correct Vector SVG Icon - SVG Repo" jsname="kn3ccd"> -->
                  <img src="https://www.svgrepo.com/show/349637/trash.svg"  class="icon-svg"   alt="Correct Vector SVG Icon - SVG Repo" jsname="kn3ccd">
                </div>
              </div>
    </div>




    </div>

        <!-- </div> -->
</template>
<style scoped>
.icon-svg{
    max-width: 30px;
    width: 32px;
    height: 28px;
    margin: 0px;
    margin-block: 14px;
}
</style>
<script>
import { useLanguageStore } from '@/stores/languageStore';
import {useTaskStore} from "../../stores/TaskStore"
export default {

    setup(){
  const store=useTaskStore();
  const langStore=useLanguageStore();
   return{store,langStore}
},
name:"invoice-details",
props:["invoiceList"],
// props:{
//     invoiceList:{type:[]} ,


// },
methods:{
    onEdit(item){
        const store=useTaskStore();
       const newList= store.invoiceDetailsList.at(item)
       store.data.name=item.name;
       store.data.id=item.id;
       store.data.quantity=item.quantity;
       store.data.discount=item.discount;
       store.data.Subtotal=item.Subtotal;
       store.data.price=item.price;
       console.log("new array "+JSON.stringify(newList));
       store.removeFromInvoiceList(item,item.id)
        
    }
}
}
</script>
