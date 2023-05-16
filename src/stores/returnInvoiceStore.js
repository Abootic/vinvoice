import { defineStore } from "pinia";
export const useReturnInvoiceStore=defineStore("returnInvoiceStore",{
state:()=>{
return{
    returnInvoiceCache:[],
    AddreturnData:{
        id:0,
        cashier_name:"",
        invoice_number:"",
        cost_with_tax:0,
        cost_without_tax:0,
        tax:0,
        is_paid:0,
        order_details:[],
        notes:"",
    },
    returnData:[],
}

},
getters:{

},
actions:{

},

});