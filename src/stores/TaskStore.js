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
                is_paid:"",
                invoice_type:"",
                order_details:[],
                paid_method:"",
                notes:"",
                invoice_pattern:""
            },
            data:{
              id:0,
              productId:0,
              name: "",
              quantity: 1,
              price: 1,
              discount: 0.0,
              Tax: 0,
              Subtotal: 0.0,
              priceAfterDiscount:0,
            
            },
        isInvoiceFormShow:false,
        isInvoiceFormValueShow:false,
        mainSaveBtn:false,
        blockBtn:false,
    invoiceDetailsList:[],
    productsCash:[],
    products:[],
    payment_methods:[],
    total:0.0,
    summray_total:0,
    countTax:0,
    discount:0,
    summray_discount:0,
    summray_tax:0,
    totalOrginalPrice:0,
    cutomerName:"",

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
    // let price=0;
   let  p=0;
     let _tax=0;
     let orginalPrice=0.0;
     let discount=0;
     if(   this.orderobj.order_details.length>0){
      for(let i=0;i<this.orderobj.order_details.length;i++){
      // price+=this.orderobj.order_details[i].totalp;
 
     p+=this.orderobj.order_details[i].priceAfterDiscount;
  
       discount+= Number(this.orderobj.order_details[i].total_discount);
       orginalPrice=Number(this.orderobj.order_details[i].orginalPrice);
       console.log("LLLLLLLLLLLLLLLLLLLL0  "+p);
       _tax+=this.orderobj.order_details[i].tax*this.orderobj.order_details[i].quantity;
       
      }
      
    
     }
     
     this.total=p+_tax;
  
    this.discount=discount;
      this.totalOrginalPrice=orginalPrice-discount;

      //this.orderobj.cost_without_tax= this.total-_tax;
      this.orderobj.cost_without_tax= p;
      console.log("summeryyyyyyyyyy discount "+  this.discount)
     this.summray_tax= Number( _tax);
     this.summray_discount= this.discount;
     this.orderobj.cost_with_tax=this.total;
     this.orderobj.tax=this.summray_tax;
   
    }

    
 
   
    
},
actions:{
 
    onInvoiceFormShow(){
       this.isInvoiceFormShow=true;
        
     },
     addToInvoice(data){
   
   
        let falg=false;
      if(this.invoiceDetailsList.length>0){
        let f=this.invoiceDetailsList.some(a=>a.name==data.name);
        if(f){
       this.invoiceDetailsList.filter(function(item){
   
        if(item.name===data.name){
          console.log("  ");
        }else{
          console.log("  ");
        }
      if(item.tax==0){
        //totalt=0;
       
          return item.name===data.name?(falg=true, 
          
            item.quantity+=data.quantity, 
            item.discount+=data.discount,
          
            item.Subtotal=(data.price*item.quantity-item.discount).toPrecision(4),
           
         
          item.price=(item.quantity*data.price).toPrecision(4)
           ):falg=false}else{
           // total=0;
            return item.name===data.name?(falg=true, 
              // console.log("ggggggggggggggggggggggg  "+item.Tax),
              // console.log("orginal price is===============> "+data.price),
              item.quantity+=data.quantity, 
              item.discount+=data.discount,  
              item.Tax*=item.quantity,
              item.Subtotal=((data.price*item.quantity)+item.Tax-item.discount).toPrecision(4),
              ///////// try
      
         ///end try
            item.price=(item.quantity*data.price).toPrecision(4)
         
             ):falg=false;
           }

        });
       
      }else{
          this.invoiceDetailsList.push(data);
        }
        console.log("flag======= "+falg);
       
      }else{this.invoiceDetailsList.push(data);}

this.isInvoiceFormValueShow=true;

     },
     removeFromInvoiceList(index,id){
    
      let _total=0;
      let _tax=0;
      let discount=0;
    
  
 
        this.invoiceDetailsList= this.invoiceDetailsList.filter(function(item) {
          
      
    return item!==index
  });
  let orginalPrice=0;

  for(let i=0;i<this.orderobj.order_details.length;i++){
    if(this.orderobj.order_details[i].cid==id){
     // _total=this.orderobj.order_details[i].price;
     _total=this.orderobj.order_details[i].totalp;
    discount=this.orderobj.order_details[i].total_discount;
    //discount=this.orderobj.order_details[i].discount;
    orginalPrice=this.orderobj.order_details[i].orginalPrice;
    _tax=this.orderobj.order_details[i].tax
  }
   }
  this.orderobj.order_details=this.orderobj.order_details.filter(function(item){

      
   
return item.cid!==id;
  });
 
  this.counter--;

this.total=this.total-_total;
this.summray_tax=this.summray_tax-_tax;
this.discount-=discount;

this.orderobj.cost_with_tax=this.total;
this.orderobj.tax=this.summray_tax;
this.orderobj.cost_without_tax=this.total-this.summray_tax;
console.log(orginalPrice);
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