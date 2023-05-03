

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  {createI18n}  from "vue-i18n"
import App from './App.vue'
import common from './common.js'
import en from './local/en.json';
import ar from './local/ar.json';
import { useLanguageStore } from './stores/languageStore'
//let s="";
const pinia = createPinia()

const i18n= createI18n({
        legacy:false,
        locale:"ar",
        fallbackLocale:'en',
        globalInjection: true,
        messages: {
          en,
          ar
        }
        
      });
const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.provide('i18n',i18n)
app.config.globalProperties.$i18n = i18n
const $lstore=useLanguageStore()
$lstore.$i18n=i18n
console.log("55555555555555 "+$lstore.language);
//s=$lstore.language;
app.mixin(common)
app.mount('#app')
//createApp({extends:App,mixins:[common]}).mount('#app');



