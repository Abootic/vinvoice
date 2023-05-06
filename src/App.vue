<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { useLanguageStore } from "./stores/languageStore"

export default {
  name: 'App',

  components: {
    HelloWorld
  },
  setup() {

    const lStore = useLanguageStore();
    lStore.$i18n = lStore.getLang;

    return { lStore };
  },

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
