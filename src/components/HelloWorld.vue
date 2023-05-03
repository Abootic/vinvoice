<template>
    <div class="layout-wrapper layout-content-navbar " dir="rtl">
  <div class="layout-container" id="main-dirv">
    <button @click=" onSwitchLanguage">switch</button>
   <invoice/>
    </div>
  </div>
</template>

<script>
import { useLanguageStore } from '@/stores/languageStore';


import invoice from "./invoice/invoice.vue";


export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: { invoice },
    
  methods:{
    onSwitchLanguage(){
 const langStore=useLanguageStore();
  langStore.switchLanguage();
   console.log(" vvvvvvvvvvvvvvvvvv "+langStore.language);
 
      if(langStore.language=="ar"){
        console.log(" 1111111111111111111111111111111 "+langStore.language);
        document.getElementById("main-dirv").style.direction="rtl";
       
      }else{
        console.log(" 22222222222222222 "+langStore.language);
        document.getElementById("main-dirv").style.direction="ltr";
      }
 },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
