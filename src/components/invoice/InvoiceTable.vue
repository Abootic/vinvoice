<template>
  <form  class="row" v-on:submit="handelSubmit($event)">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
      <div
        class="row"
        style="text-align: initial; justify-content: space-between"
      >
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <!-- <input    v-model="data.pid"  class="from-control table-form"> -->
            <div class="col-lg-12 col-md-12 col-sm-12 table-header">{{ langStore.TRANSLATE("pname") }}</div>

            <div class="col-lg-12 col-md-12 col-sm-12 mt-2" id="dropdown-wrapper">
              <div class="selected-item"  @click="isArrowVisible=!isArrowVisible">
                <span style="    font-size: 13px; font-weight: bold;">{{ selectedItem!=null? selectedItem.name:langStore.TRANSLATE("select") }}</span>
                <svg 
               
                class="dtp-down-icon"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                width="24"
                height="24"
                >
                  <path
                    d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"
                  ></path>
                </svg>
              </div>
            
                <div class="dropdown-popover" v-if="isArrowVisible">
                  <input
                   
                    placeholder="search"
                    v-model="store.data.name"
                    class="form-control search-input"
                  />
                  <span v-if="filterComboBox.length===0"> No data Available</span>
                  <div class="options">
                    <ul>
                      <li @click="onSelectedItem(product)"  v-for="(product ,key) in filterComboBox" :key="key" :value="product.id">{{ product.name }}</li>
                      
                    </ul>
                  </div>
              </div>
            </div>
            <span class="text-danger">{{ nameError }}</span>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 table-header">
              {{ langStore.TRANSLATE("Quantity") }}
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 mt-2">
              <input
                type="number"
                v-model="store.data.quantity"
                v-on:input="onCalQauntity($event)"
                class="from-control table-form"
              />
            </div>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 table-header">
              {{ langStore.TRANSLATE("price") }}
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 mt-2">
              <!-- v-on:input="onPrice($event)" -->
              <input
              readonly
                type="text"
                v-model="store.data.price"
                class="from-control table-form"
              />
            </div>
            <span class="text-danger">{{ priceErr }}</span>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 table-header">
              {{ langStore.TRANSLATE("discount") }}
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 mt-2">
              <!-- v-on:input="onDiscount($event)" -->
              <input
              readonly
                type="number"
                v-model="store.data.discount"
                class="from-control table-form"
              />
            </div>
            <span class="text-danger">{{ discountErr }}</span>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 table-header">
              {{ langStore.TRANSLATE("afterdiscount") }}
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 mt-2">
              <!-- v-on:input="onDiscount($event)" -->
              <input
              readonly
                type="number"
                v-model="priceAfterDiscount"
                class="from-control table-form"
              />
            </div>
            <span class="text-danger">{{ discountErr }}</span>
          </div>
        </div>
       
        <div class="col-lg-2 col-md-2 col-sm-2">
          <div class="row">
            <div class="col-lg-12 col-md-2 col-sm-12 table-header">
              {{ langStore.TRANSLATE("total") }}
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
              <input
                type="number"
                readonly
                v-model="store.data.Subtotal"
                class="from-control table-form"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="row"
        style="text-align: initial; justify-content: space-between"
      >
        <div class="col-8 mt-3 mb-3">
         
        </div>

        <div class="col-12 mt-3 mb-3">
          <div class="row">
            <button type="submit" class="btn btn-info col-12 mt-3 mb-3">
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
    const langStore=useLanguageStore();
    return { store, getProd,langStore };
  },

  data() {
    return {

      ///// start compobox
      
      selectedItem:null,
      isArrowVisible:false,
     
      ///// end compobox
      customersName: [],
     
     
      nameError: "",
      priceErr: "",
      discountErr: "",
      orginalPrice:0,
      priceAfterDiscount:0,
    };
  },
  computed:{
    filterComboBox(){
     
      const store=useTaskStore();
      const query=store.data.name.toLowerCase();
      if(store.data.name==""){
        return store.products;
      }
      return store.products.filter((item)=>{
        return Object.values(item).some((word=>String(word).toLowerCase().includes(query)));
      });
    }
  },
  
  methods: {
    ///////////////////////// start invoiceTotal /////////////////

    invoiceTotal() {
  const store=useTaskStore();
      let total = store.data.quantity * store.data.price;
      let totalwIthTax=total*(store.data.Tax/100);

      if (store.data.discount == 0.0) {
        store.data.Subtotal = total +totalwIthTax- store.data.discount;
      } else {
        store.data.Subtotal = total +totalwIthTax- store.data.discount;
      }
    },
  
    handelSubmit(e) {
      const store = useTaskStore();
      e.preventDefault();
      if (this.selectedItem== null) {
        this.nameError = "enter name";
      } else if (store.data.price == 0.0) {
        this.priceErr = "enter price";
      }
      else {
       
    let i= store.counter++;
      
    store.data.id=i;
    store.data.Tax=store.countTax;
       
        store.addToInvoice(store.data);
        store.orderobj.order_details.push({
          id:89,
          cid:i,
          name: store.data.name,
          price: store.data.Subtotal,
          orginalPrice:this.orginalPrice,
          quantity: store.data.quantity,
          tax: store.data.Tax,
        });
      
        store.mainSaveBtn = true;
        store.getInvoiceSummery;

        store.data = {
          
          name: "",
          quantity: 1,
          price: 0.0,
          discount: 0.0,
          Tax: 0.0,
          Subtotal: 0.0,
         
        };
     
      }
     
      this.selectedItem=null;
      //taskStore.addToInvoice(newtas);
    },
 
    onSelectedItem(item){
      const store = useTaskStore();
      this.selectedItem=item;
      store.data.name=item.name;
      this.isArrowVisible=false;
      this.nameError="";
    
      if (store.productsCash.length > 0) {
        store.productsCash.map((a) => {
          a.map((p) => {
            if (p.id == item.id) {
              if (p.apply_vat == 0) {
              
                store.data.discount=p.price-p.price_after_discount;
                store.priceAfterDiscount=p.price_after_discount;
                store.data.Tax = 0;
                store.countTax=0;
                store.data.price = p.price;
                let total = store.data.quantity * store.data.price;
                store.data.Subtotal = total-store.data.discount;
                this.orginalPrice=store.data.price;
               
              } else {
                
                store.data.Tax =localStorage.getItem("tax");
                store.data.discount=p.price-p.price_after_discount;
                store.countTax=store.data.Tax;
                store.data.price = p.price;
                let total = store.data.quantity * store.data.price;
              let totalwithTax=  total*( store.data.Tax/100);              
              store.data.Subtotal = total + totalwithTax-store.data.discount;
             store.countTax=p.price_after_discount*localStorage.getItem("tax")/100;
                this.orginalPrice=store.data.price;

              }
            }
          });
        });
      }

    },
   
    onCalQauntity(e) {
      const store=useTaskStore();
      let qty = 1;

      if (e.target.value == "" || e.target.value == 0) {
       
        qty = store.data.quantity;
      } else {
        qty = e.target.value;
  
      }

      if (store.data.Tax == 0) {
        let total = qty * store.data.price;
        this.orginalPrice=total;
        if (store.data.discount == 0.0) {
          store.data.Subtotal = total - store.data.discount ;
       
        } else {
          store.data.Subtotal = total - store.data.discount;
        }
      } else {
        let total = qty * store.data.price;
        this.orginalPrice=total;
              let totalwithTax=  total*(store.countTax/100 );
        if (store.data.discount == 0.0) {
              
          store.data.Subtotal = total + totalwithTax-store.data.discount;
        
        } else {
          store.data.Subtotal = total + totalwithTax-store.data.discount;
          
         
        }
      }
    },

   
  },
async mounted(){
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
                store.products=[];
                a.map((p) => {
               
                  store.addToProducts({ id: p.id, name: p.name });
                });
              });
            }
          }
        }
      } catch (e) {
        console.log(e);
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

  background-color: #fff;
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
  /* padding-left: 8px; */
  max-height: 100px;
  overflow-y: scroll;
  overflow-x: hidden;
}
li {
  /* width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  background-color: #ffff;
  cursor: pointer;
  font-size: 15px ; */
  width: 100%;
    border-bottom: 1px solid lightgray;
    padding: 9px;
    background-color: #ffff;
    cursor: pointer;
    font-size: 17px;
}
li:hover {
  background: #70878a;
  color: #fff;
}
</style>