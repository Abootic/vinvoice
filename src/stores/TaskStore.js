import { defineStore } from "pinia";
export const useTaskStore =defineStore("taskStore",{
    
    state:()=>{
        return{
          counter:0,
            invoiceDataForSubmit:[],
            orderobj:{
                customer_id:0,
                cashier_id:309,
                cost_with_tax:0,
                cost_without_tax:0,
                tax:0,
                is_paid:1,
                order_details:[],
                paid_method:"",
                notes:"",
            },
            data:{
              id:0,
      
              name: "",
              quantity: 1,
              price: 1,
              discount: 0.0,
              Tax: 0,
              Subtotal: 0.0,
            },
        isInvoiceFormShow:false,
        isInvoiceFormValueShow:false,
        mainSaveBtn:false,
    invoiceDetailsList:[],
    productsCash:[],
    products:[],
    payment_methods:[],
    total:0.0,
    countTax:0,

    summray_tax:0,
    totalOrginalPrice:0,

        }
    },
getters:{

    getproduct(){
        if(this.productsCash.length>0){
           
this.productsCash.map(a=>{

    a.map(p=>{
        this.products.push({"id":p.id,"name":p.name});
    });
});
}
return this.products;
    },
    getInvoiceData(state){
       
    
  
       return state.invoiceDetailsList;
    },
  async  getOrderDetailse(state){
  
        return await state.orderobj;
    },
    getInvoiceSummery(){
     let price=0.0;
     let _tax=0;
     let orginalPrice=0.0;
      this.orderobj.order_details.map(a=>{
     price=a.price
     orginalPrice+=a.orginalPrice,
     _tax+=a.tax
      });
 
  
  
   
      this.total+= price;
    
      this.totalOrginalPrice=orginalPrice;
   
      this.orderobj.cost_without_tax=orginalPrice;
     

     
     this.summray_tax= Number( _tax);
     this.orderobj.cost_with_tax=this.total;
     this.orderobj.tax=this.summray_tax;
   
    }

    
 
   
    
},
actions:{
 
    onInvoiceFormShow(){
       this.isInvoiceFormShow=true;
        
     },
     addToInvoice(data){
        
       
this.invoiceDetailsList.push(data);
this.isInvoiceFormValueShow=true;
     },
     removeFromInvoiceList(index,id){
    
      let _total=0;
      let _tax=0;
    
  
 
        this.invoiceDetailsList= this.invoiceDetailsList.filter(function(item) {
          
      
    return item!==index
  });
  let orginalPrice=0;
  this.orderobj.order_details.map((item)=>{
  
    if(item.cid==id){
      
      _tax=Number(item.tax);

      _total=item.price;

      orginalPrice= item.orginalPrice
    }
  
      });
  this.orderobj.order_details=this.orderobj.order_details.filter(function(item){

      
   
return item.cid!==id;
  });
 
  this.counter--;

this.total=this.total-_total;
this.summray_tax=this.summray_tax-_tax;


this.orderobj.cost_with_tax=this.total;
this.orderobj.tax=this.summray_tax;
this.orderobj.cost_without_tax=this.totalOrginalPrice-orginalPrice;
  if(this.orderobj.order_details.length<=0){
   
    this.total=0;
    this.summray_tax=0;
    this.orderobj.cost_without_tax=0;
    this.orderobj.tax=0;
    this.orderobj.cost_with_tax=0;
  }

  
  },
 
  addToProductsCash(item){
    this.productsCash=[];
this.productsCash.push(item);

  },
  addToProducts(temp){
   
   
    this.products.push(temp);

},

  },
 

     
    

     
    
})