<template>
  <form class="row" v-on:submit="handelSubmit($event)">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
      <div class="row ">
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <!-- <input    v-model="data.pid"  class="from-control table-form"> -->
            <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">{{ langStore.TRANSLATE("pname") }}</div>

            <div class="col-lg-12 col-md-12 col-sm-12 mt-2" id="dropdown-wrapper">
              <div class="selected-item text-title "  @click="isArrowVisible = !isArrowVisible">
                <span class="text-title " style="    font-size: 13px; ">{{ selectedItem != null ?
                  selectedItem.name : langStore.TRANSLATE("selectPruduct") }}</span>
                <svg class="dtp-down-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path
                    d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z">
                  </path>
                </svg>
              </div>

              <div class="dropdown-popover"  v-if="isArrowVisible">
                <input placeholder="search" v-model="store.data.name" class="form-control search-input" />
                <span v-if="filterComboBox.length === 0"> No data Available</span>
                <div class="options">
                  <ul>
                    <li class="text-title " @click="onSelectedItem(product)" v-for="(product, key) in filterComboBox" :key="key"
                      :value="product.id">{{ product.name }}</li>

                  </ul>
                </div>
              </div>
            </div>
            <span class="text-danger">{{ nameError }}</span>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">
              {{ langStore.TRANSLATE("Quantity") }}
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
              <input type="number" min="1" v-model="store.data.quantity" v-on:input="onCalQauntity($event)"
                class="from-control table-form" />
            </div>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">
              {{ langStore.TRANSLATE("price") }}
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
              <!-- v-on:input="onPrice($event)" -->
              <input    type="text" v-model="store.data.price" v-on:input="onPrice($event)" class="from-control table-form" />
            </div>
            <span class="text-danger">{{ priceErr }}</span>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center text-title">
              {{ langStore.TRANSLATE("discount") }}
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
              <!-- v-on:input="onDiscount($event)" -->
              <input  type="number" v-model="store.data.discount" class="from-control table-form" />
            </div>
            <span class="text-danger">{{ discountErr }}</span>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center text-title">
              {{ langStore.TRANSLATE("afterdiscount") }}
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
              <!-- v-on:input="onDiscount($event)" -->
              <input readonly type="number" v-model="store.priceAfterDiscount" class="from-control table-form" />
            </div>
            <span class="text-danger">{{ discountErr }}</span>
          </div>
        </div>

        <div class="col-lg-2 col-md-2 col-sm-2">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">
              {{ langStore.TRANSLATE("total") }}
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
              <input type="number" readonly v-model="store.data.Subtotal" class="from-control table-form" />
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="text-align: initial; justify-content: space-between">
        <div class="col-8 mt-3 mb-3">

        </div>

        <div class="col-12 mt-3 mb-3">
          <div class="row">
         
            <button :disabled="store.blockBtn" type="submit" class="btn btn-default col-12 mt-3 mb-3 Cbtn">
              <span>{{ langStore.TRANSLATE("addItem") }}</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import { useTaskStore } from "../../stores/TaskStore";
import { useLanguageStore } from '@/stores/languageStore';

//import { mapActions } from 'pinia';

//import {ref} from "vue";
export default {
  name: "InvoiceTable",
  setup() {
    const store = useTaskStore();
    const getProd = store.getproduct;
    const langStore = useLanguageStore();
    return { store, getProd, langStore };
  },

  data() {
    return {

      ///// start compobox

      selectedItem: null,
      isArrowVisible: false,

      ///// end compobox
      customersName: [],

dd:0,
d:1,
summary_tax:1,
      nameError: "",
      priceErr: "",
      discountErr: "",
      orginalPrice: 0,
      priceAfterDiscount: 0,
    };
  },
  computed: {
    filterComboBox() {

      const store = useTaskStore();
      const query = store.data.name.toLowerCase();
      if (store.data.name == "") {
        return store.products;
      }
      return store.products.filter((item) => {
        return Object.values(item).some((word => String(word).toLowerCase().includes(query)));
      });
    }
  },

  methods: {
    ///////////////////////// start invoiceTotal /////////////////

    invoiceTotal() {
      const store = useTaskStore();
      let total = store.data.quantity * store.data.price;
      let totalwIthTax = total * (store.data.Tax / 100);

      if (store.data.discount == 0.0) {
        store.data.Subtotal = total + totalwIthTax - store.data.discount;
      } else {
        store.data.Subtotal = total + totalwIthTax - store.data.discount;
      }
    },

    handelSubmit(e) {
      const store = useTaskStore();
      e.preventDefault();
      if (this.selectedItem == null) {
        this.nameError = "enter name";
      } else if (store.data.price == 0.0) {
        this.priceErr = "enter price";
      }
      else {

        let i = store.counter++;

        store.data.id = i;
    
        store.data.Tax = store.countTax;
       // store.allTax+=store.data.Tax;
// store.data.discount=this.d;
if(this.d!==0){
  store.discount=this.d;
}
//store.tt=this.summary_tax;
console.log("this.summary_tax "+this.summary_tax);
        store.addToInvoice(store.data);
     
       // store.allTax=   store.data.Tax +    store.allTax;
        let flag=false;
        if(store.orderobj.order_details.length>0){
          let f=store.orderobj.order_details.some(a=>a.name==store.data.name);
          if(f){
            
          store.orderobj.order_details.filter(function(item){
            if(item.tax==0){
             
              return item.name===store.data.name?(flag=true,
            item.quantity+=store.data.quantity,
            
            item.discount=store.data.discount,
           item.total_discount+=store.data.discount,
            item.price=store.data.price,
              item.totalp=item.quantity*store.data.price-item.total_discount,
             
              item.priceAfterDiscount+=store.data.priceAfterDiscount,
              console.log("============ 11111 =========================="),
            //  item.totalp=item.quantity*store.data.price-item.discount,
            item.orginalPrice=item.price
       
            ):flag=false;
            }else{
             
              return item.name===store.data.name?(flag=true,
              
            item.quantity+=store.data.quantity,
          
            item.discount=store.data.discount,
            item.total_discount+=store.data.discount,
            item.totalp=Number(item.price*item.quantity),
            console.log("============ 2222222 =========================="),
            item.priceAfterDiscount+=store.data.priceAfterDiscount,
          //  item.totalp=Number(item.orginalPrice*item.quantity)+Number(item.tax)-item.total_discount,
           // console.log("itemp  22222222222222222222222222 "+item.totalp),
           // item.totalp=Number(item.orginalPrice*item.quantity)+Number(item.tax)-item.discount,
            item.price=store.data.price,
            
           
       
            item.orginalPrice=store.data.price
         
            ):flag=false;
            }
         
          });
        }else{ 
      
          store.orderobj.order_details.push({
          id: store.data.productId,
          cid: i,
          discount:store.data.discount,
          total_discount:store.data.discount,
          name: store.data.name,
          totalp:store.data.Subtotal,
          price: store.data.price,
          orginalPrice: this.orginalPrice,
          quantity: store.data.quantity,
          tax: store.data.Tax,
          priceAfterDiscount:  store.data.priceAfterDiscount,
        
        });}
         console.log(flag);
        }else{
         
       
        store.orderobj.order_details.push({
          id: store.data.productId,
          cid: i,
         // discount:store.data.discount,
         discount:this.d,
          total_discount:store.data.discount,
          name: store.data.name,
          totalp:store.data.Subtotal,
          price: store.data.price,
          orginalPrice: this.orginalPrice,
          quantity: store.data.quantity,
          tax: store.data.Tax,
          priceAfterDiscount:  store.data.priceAfterDiscount,
        });}

        store.mainSaveBtn = true;
        store.getInvoiceSummery;
store.discount=this.d;
        store.data = {
          productId:0,
          name: "",
          quantity: 1,
          price: 0.0,
          discount: 0.0,
          Tax: 0.0,
          Subtotal: 0.0,

        };

      }

      this.selectedItem = null;
      //taskStore.addToInvoice(newtas);
    },

    onSelectedItem(item) {
      const store = useTaskStore();
      this.selectedItem = item;
      store.data.name = item.name;
      this.isArrowVisible = false;
      this.nameError = "";

      if (store.productsCash.length > 0) {
        store.productsCash.map((a) => {
          a.map((p) => {
          
          
            if (p.id == item.id) {
              store.data.productId=p.id;
          //   console.log("taxxxxxxxxxxxxxxx  "+p.apply_vat);
              if (p.apply_vat == 0) {
this.dd= p.price - p.price_after_discount;
                store.data.discount = p.price - p.price_after_discount;
                store.priceAfterDiscount = p.price_after_discount;
                store.data.Tax = 0;
                store.countTax = 0;
                store.data.price = p.price;
store.data.priceAfterDiscount=p.price_after_discount;
                let total = store.data.quantity * store.data.price;
                store.data.Subtotal = (total - store.data.discount).toPrecision(2);
                
              ///  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx "+store.data.Subtotal );
                this.orginalPrice = store.data.price;

              } else {
                store.data.priceAfterDiscount=p.price_after_discount;
                store.data.Tax = localStorage.getItem("tax");
                store.data.discount = p.price - p.price_after_discount;
                this.dd= p.price - p.price_after_discount;
                store.priceAfterDiscount = p.price_after_discount;
                store.countTax = store.data.Tax;
        
                store.data.price = p.price;
                let total = store.data.quantity * store.data.price;
              //  console.log("priceeeeeeee  "+total);
                let totalwithTax = total * (store.data.Tax / 100);
             //   console.log("22222222222222222  "+totalwithTax);
                store.data.Subtotal = total + totalwithTax - store.data.discount;
                
                store.countTax = p.price_after_discount * (localStorage.getItem("tax") / 100);
                this.orginalPrice = store.data.price;
             
                //console.log( store.countTax);

              }
            }
          });
        });
      }

    },

    onCalQauntity(e) {
      const store = useTaskStore();
      let qty = 1;

      if (e.target.value == "" || e.target.value == 0) {

        qty = store.data.quantity;
      } else {
        qty = e.target.value;

      }
      // if( e.target.value>0){
      //   store.data.quantity=1;
      // }

      if (store.data.Tax == 0) {
        let total = qty * store.data.price;
        this.orginalPrice = total;
        if (store.data.discount == 0.0) {
          store.data.Subtotal = total - store.data.discount;

        } else {
        
          store.data.Subtotal = total - store.data.discount;
        
        }
      } else {
        let total = qty *  store.priceAfterDiscount ;
     //   let total = qty * store.data.price;
        this.orginalPrice = total;
       
       // let totalwithTax = total *(store.countTax /100);
        let totalwithTax = total *(store.data.Tax/100);
        store.countTax=totalwithTax;
      console.log("new tax= "+store.data.Tax);
        if (store.data.discount == 0.0) {

          store.data.Subtotal = total + totalwithTax - store.data.discount;

        } else {
          this.d= this.dd*qty;
        //c  store.allTax*qty;
          store.discount=this.d;
          console.log("tttttttttttttttt "+totalwithTax);
     //   this.summary_tax=totalwithTax;
     store.tt=totalwithTax;
          console.log("11111111111111 "+store.discount);
        let v1=  total + totalwithTax;
     
        store.data.Subtotal = v1;
         
            //store.data.discount=this.d;
      
          console.log("dddddddddd "+this.d);
        //  store.data.discount= store.data.discount+store.data.discount;


        }

      }
    },


    onPrice(e){
      const store = useTaskStore();
    let ePrice=0;
    if (e.target.value === "" || e.target.value === 0) {
      ePrice =e.target.value;
     
} else {
  ePrice=e.target.value;

}
if (store.data.Tax == 0) {
      //  let total = store.data.quantity * store.data.price;
        let total = store.data.quantity * ePrice;
        this.orginalPrice = total;
        if (store.data.discount == 0.0) {
          store.data.Subtotal = total - store.data.discount;

        } else {
          store.data.discount*=store.data.quantity;
          store.data.Subtotal = total - store.data.discount;
        }
      } else {
       // let total = store.data.quantity * store.data.price;
        let total = store.data.quantity * ePrice;
        this.orginalPrice = total;
       
        let totalwithTax = total *(store.countTax /100);
        
        if (store.data.discount == 0.0) {

          store.data.Subtotal = total + totalwithTax - store.data.discount;

        } else {
          store.data.discount*=store.data.quantity;
          store.data.Subtotal = total + totalwithTax - store.data.discount;


        }
      }
console.log(ePrice +"hhhhhhhhhhhhhhhhhhhhh")
  },
  },
  ///////////////////// onprice /////////////////////////////////
 

  //////////////////////////// end onprice /////////////

  ////////////////////////// on discount /////////////////
  async mounted() {
    try {
      const store = useTaskStore();
      const p_res = await this.callApi(
        "Get",
        "https://www.kifapos.com/api/v3/products",
        { current_page: 1, category_id: 18, search_key: "test1" }
      );
      if (p_res.status === 200) {
        if (p_res["data"]["data"]["products"].length > 0) {
          store.productsCash = [];
          store.productsCash.push(p_res["data"]["data"]["products"]);
          if (store.productsCash.length > 0) {
            store.productsCash.map((a) => {
              store.products = [];
              a.map((p) => {

                store.addToProducts({ id: p.id, name: p.name });
              });
            });
          }
        }
      }
    } catch (e) {
    ////////  console.log(e);
    }
  },
  beforeMount() {

    this.invoiceTotal();
  },
};
</script>
<style scoped>
.table-header {
  /* text-align: initial; */
  font-family: system-ui;
  background-color: #dee2e6;
}

.table-form {
  height: 40px;
  border: 1px solid #dc2020;
  width: 7rem;
  border-radius: 5px;
}

.description-input {
  height: 60px;
  border: 1px solid #dc2020;
  width: 98%;
  border-radius: 5px;
}

.icon-svg {
  max-width: 30px;
  width: 32px;
  height: 28px;
  margin: 0px;
  margin-block: 14px;
}

.third-section-select-form {
  height: 60px;
  border: 1px solid #dc2020;
  width: 6rem;
  border-radius: 5px;
}

.selected-item {
  height: 40px;

  border: 2px solid lightgray;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
}

.dropdown-popover {
  border: 2px solid lightgray;

  width: 100%;
}

.search-input {
  margin-bottom: 10px;
  height: 40px;
  border: 1px solid #dc2020;
  font-size: 20px;
  border-radius: 5px;
}

.options {
  width: 100%;

}

ul {
 
  list-style: none;
  text-align: center;
  padding-left: 8px;
  padding-right: 15px;
  max-height: 120px;
  overflow-y: scroll;
  overflow-x: hidden;
}

li {

  width: inherit;
  border-bottom: 1px solid lightgray;
  padding: 6px ;


  cursor: pointer;
background-color: #fff;
  font-size: 17px;
}

li:hover {
  background: #70878a;
  color: #fff;
}
</style>