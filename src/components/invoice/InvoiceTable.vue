<template>
  <form  class="row" v-on:submit="handelSubmit($event)">
    <div class="col-lg-12 col-mb-12 col-sm-12 col-xs-12 mt-3">
      <div
        class="row"
        style="text-align: initial; justify-content: space-between"
      >
        <div id="col-start" class="col-lg-2 col-mb-2 col-sm-2 col-xs-12">
          <div class="row">
            <!-- <input    v-model="data.pid"  class="from-control table-form"> -->
            <div class="col-lg-8 col-mb-8 col-sm-8 table-header">{{ langStore.TRANSLATE("pname") }}</div>

            <div class="col-lg-8 col-mb-8 col-sm-8 mt-2" id="dropdown-wrapper">
              <div class="selected-item"  @click="isArrowVisible=!isArrowVisible">
                <span>{{ selectedItem!=null? selectedItem.name:"Select"}}</span>
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
                    v-model="data.name"
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
        <div id="col-start" class="col-lg-2 col-mb-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-8 col-mb-8 col-sm-8 table-header">
              {{ langStore.TRANSLATE("Quantity") }}
            </div>
            <div class="col-lg-8 col-mb-8 col-sm-8 mt-2">
              <input
                type="number"
                v-model="data.quantity"
                v-on:input="onCalQauntity($event)"
                class="from-control table-form"
              />
            </div>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-mb-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-8 col-mb-8 col-sm-8 table-header">
              {{ langStore.TRANSLATE("price") }}
            </div>
            <div class="col-lg-8 col-mb-8 col-sm-8 mt-2">
              <!-- v-on:input="onPrice($event)" -->
              <input
              readonly
                type="text"
                v-model="data.price"
                class="from-control table-form"
              />
            </div>
            <span class="text-danger">{{ priceErr }}</span>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-mb-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-8 col-mb-8 col-sm-8 table-header">
              {{ langStore.TRANSLATE("discount") }}
            </div>
            <div class="col-lg-8 col-mb-8 col-sm-8 mt-2">
              <!-- v-on:input="onDiscount($event)" -->
              <input
              readonly
                type="number"
                v-model="data.discount"
                class="from-control table-form"
              />
            </div>
            <span class="text-danger">{{ discountErr }}</span>
          </div>
        </div>
        <div id="col-start" class="col-lg-2 col-mb-2 col-sm-2 col-xs-12">
          <div class="row">
            <div class="col-lg-12 col-mb-12 col-sm-12 table-header">
              {{ langStore.TRANSLATE("afterdiscount") }}
            </div>
            <div class="col-lg-8 col-mb-8 col-sm-8 mt-2">
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
       
        <div class="col-lg-2 col-mb-2 col-sm-2">
          <div class="row">
            <div class="col-lg-12 col-mb-2 col-sm-12 table-header">
              {{ langStore.TRANSLATE("total") }}
            </div>
            <div class="col-lg-12 col-mb-12 col-sm-12 mt-2">
              <input
                type="number"
                readonly
                v-model="data.Subtotal"
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
          <!-- <input type="text" placeholder="Description" v-model="data.Description" class="from-control description-input"> -->
        </div>

        <div class="col-4 mt-3 mb-3">
          <div class="row">
            <button type="submit" style="padding: 0 50px 0 20px;" class="btn  col-2">
              <img
                src="https://www.svgrepo.com/show/28381/correct-signal.svg"
                class="icon-svg"
                alt="Correct Vector SVG Icon - SVG Repo"
                jsname="kn3ccd"
              />
            </button>
            <!-- <button type="submit" class="btn col-2">
              <img
                src="https://www.svgrepo.com/show/349637/trash.svg"
                class="icon-svg"
                alt="Correct Vector SVG Icon - SVG Repo"
                jsname="kn3ccd"
              />
            </button> -->
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
     
     
    
      data: {
        id:0,
      
        name: "",
        quantity: 1,
        price: 1,
        discount: 0.0,
        Tax: 0,
        Subtotal: 0.0,
        Description: "",
      },
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
      const query=this.data.name.toLowerCase();
      if(this.data.name==""){
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
  
      let total = this.data.quantity * this.data.price;
      let totalwIthTax=total*(this.data.Tax/100);

      if (this.data.discount == 0.0) {
        this.data.Subtotal = total +totalwIthTax- this.data.discount;
      } else {
        this.data.Subtotal = total +totalwIthTax- this.data.discount;
      }
    },
    ///////////////////////////////    end invoiceTotal //////////////////////
    ///////////////// start add order //////////////////////////////
    handelSubmit(e) {
      const store = useTaskStore();
      e.preventDefault();
      if (this.selectedItem== null) {
        this.nameError = "enter name";
      } else if (this.data.price == 0.0) {
        this.priceErr = "enter price";
      }
      //     else  if(this.data.discount==0.0){  this.discountErr="enter discount"; }
      else {
       
    let i= store.counter++;
      
         this.data.id=i;
         this.data.Tax=store.countTax;
         console.log("store.countTax "+store.countTax);
        store.addToInvoice(this.data);
        store.orderobj.order_details.push({
          id:89,
          cid:i,
          name: this.data.name,
          price: this.data.Subtotal,
          orginalPrice:this.orginalPrice,
          quantity: this.data.quantity,
          tax: this.data.Tax,
        });
      
        store.mainSaveBtn = true;
        store.getInvoiceSummery;

        this.data = {
          //id:0,
          name: "",
          quantity: 1,
          price: 0.0,
          discount: 0.0,
          Tax: 0.0,
          Subtotal: 0.0,
          Description: "",
        };
     
      }
     
      this.selectedItem=null;
      //taskStore.addToInvoice(newtas);
    },
 
    onSelectedItem(item){
    
      this.selectedItem=item;
      this.data.name=item.name;
      this.isArrowVisible=false;
      this.nameError="";
      const store = useTaskStore();
      if (store.productsCash.length > 0) {
        store.productsCash.map((a) => {
          a.map((p) => {
            if (p.id == item.id) {
              if (p.apply_vat == 0) {
                  this.data.discount=p.price-p.price_after_discount;
                  this.priceAfterDiscount=p.price_after_discount;
                this.data.Tax = 0;
                this.data.price = p.price;
                let total = this.data.quantity * this.data.price;
                this.data.Subtotal = total-this.data.discount;
                this.orginalPrice=this.data.price;
              } else {
                
             this.data.Tax =localStorage.getItem("tax");
             this.data.discount=p.price-p.price_after_discount;
                store.countTax=this.data.Tax;
                this.data.price = p.price;
                let total = this.data.quantity * this.data.price;
              let totalwithTax=  total*( this.data.Tax/100);              
                this.data.Subtotal = total + totalwithTax-this.data.discount;
             store.countTax=p.price_after_discount*localStorage.getItem("tax")/100;
                this.orginalPrice=this.data.price;

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
       
        qty = this.data.quantity;
      } else {
        qty = e.target.value;
  
      }

      if (this.data.Tax == 0) {
        let total = qty * this.data.price;
        this.orginalPrice=total;
        if (this.data.discount == 0.0) {
          this.data.Subtotal = total - this.data.discount ;
       
        } else {
          this.data.Subtotal = total - this.data.discount;
        }
      } else {
        let total = qty * this.data.price;
        this.orginalPrice=total;
              let totalwithTax=  total*(store.countTax/100 );
        if (this.data.discount == 0.0) {
              
                this.data.Subtotal = total + totalwithTax-this.data.discount;
        
        } else {
          this.data.Subtotal = total + totalwithTax-this.data.discount;
          
          //this.data.Subtotal = (total * this.data.discount) / 100;
        }
      }
    },

    // onPrice(e) {
    //   let price = e.target.value;

    //   let total = (this.data.quantity * price * this.data.Tax) / 100;
    //   if (this.data.discount == 0.0) {
    //     this.data.Subtotal = total + this.data.discount / 100;
    //   } else {
    //     this.data.Subtotal = (total * this.data.discount) / 100;
    //   }
    // },
    // onDiscount(e) {
    //   let discount = e.target.value;
    //   let qty = this.data.quantity;
    //   let total = qty * this.data.price;
    //   if (this.data.discount == 0.0) {
    //     this.data.Subtotal = total + discount;
    //   } else {
    //     this.data.Subtotal = (total * discount) / 100;
    //   }
    // },
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

  border-radius: 5px;
}
.options {
  width: 100%;
}
ul {
  list-style: none;
  text-align: left;
  padding-left: 8px;
  max-height: 100px;
  overflow-y: scroll;
  overflow-x: hidden;
}
li {
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  background-color: #ffff;
  cursor: pointer;
}
li:hover {
  background: #70878a;
  color: #fff;
}
</style>