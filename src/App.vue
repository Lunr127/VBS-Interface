<template>
  <div id="app">

    <info-input></info-input>
    <all-result></all-result>
    

  </div>
</template>

<script>
import InfoInput from "./components/InfoInput.vue";
import AllResult from "./components/AllResult.vue";


export default {
  name: "App",
  components: {
    InfoInput,
    AllResult,
  },
};
</script>

<style>
</style>
