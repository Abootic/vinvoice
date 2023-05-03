import { defineStore } from 'pinia';
import en from '../local/en.json';
import ar from '../local/ar.json';
import  {createI18n}  from "vue-i18n"

export const useLanguageStore = defineStore("languageStore",{
  id: 'language',
    state: () => ({   
      $i18n: {},
   isLang:false,
      language: 'en'
      
    }),
    actions: {
      switchLanguage() {
if(this.isLang){
  this.language  ='en';
}else{
  this.language="ar";
}
this.isLang=!this.isLang;
this.$i18n.global.locale=this.language;

         
        
         console.log("ddddddddddddddd  "+this.language);
      //  this.i18n.locale = this.language;
      },
      TRANSLATE(message) {
        return this.$i18n.global.t(message)
      }

    },
    getters: {

      getLang(){
        const i18n= createI18n({
          legacy:false,
         locale:this.language,
          fallbackLocale:'en',
         // globalInjection: true,
          messages: {
            en,
            ar
          }
          
        });
        return i18n;
      }
      // $t() {
        
      //   return   this.i18n.t.bind(this.i18n)
      // }
    },
 
  });