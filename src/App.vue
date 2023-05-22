<template>
 
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {useLanguageStore} from "./stores/languageStore"

export default {
  name: 'App',

  components: {
    HelloWorld
  },
  setup(){
    
    const lStore=useLanguageStore();
  lStore.$i18n= lStore.getLang;
 
    return {lStore};
  },
  mounted(){
const url= decodeURI(window.location.href);
//const url=window.location.href+"24920|B7bLNKOOlzdpWZMU527x6cEPl17qONZjpNsIzEqG";
const listUrl=url.split("/");
let token="";
for(let i=0;i<listUrl.length;i++){
token=listUrl[i];
}
localStorage.setItem("token",token);

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
