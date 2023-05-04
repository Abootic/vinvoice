<template>
    <!-- <div class="col-lg-8 col-mb-8 col-sm-12 col-xs-12 mt-3" style="background-color: red;"> -->
        <div class="row" style="text-align: initial;justify-content: space-between;" >
            <div id="col-start" class="col-lg-2 col-mb-2 col-sm-2 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-mb-12 col-sm-12 table-header">{{ langStore.TRANSLATE("pname")}} </div>
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

        <div id="col-start" class="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 table-header">{{ langStore.TRANSLATE("discount") }}</div>
                    <div class="col-lg-12 col-md-12 col-sm-12  mt-2">{{invoiceList.discount}}</div>
            </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 table-header">    {{ langStore.TRANSLATE("afterdiscount") }}</div>
                    <div class="col-lg-12 col-md-12 col-sm-12  mt-2">{{invoiceList.price-invoiceList.discount}}</div>
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
                    <div class="col-lg-12 col-md-12 col-sm-12 table-header"> {{ langStore.TRANSLATE("total") }}</div>
                    <div class="col-lg-12 col-md-12 col-sm-12  mt-2">{{ invoiceList.Subtotal }}</div>
            </div>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1  ">
            <div class="row">

                <button type="button" @click="onEdit(invoiceList)" class="btn col-5">
                  <img src="data:image/png;base64,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" data-deferred="1" style="    width: 29px;
    height: 27px;" class="rg_i Q4LuWd" jsname="Q4LuWd"  alt="Edit Button Vector SVG Icon - SVG Repo" data-iml="1045.7000000011176" data-atf="true">
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
.table-header{
    background-color: #dee2e6;
}
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
