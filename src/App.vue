<template>
  <div id="app">

    <!-- <dataset-select></dataset-select>
    <text-input></text-input>
    <task-radio></task-radio>
    <upload-img></upload-img>
    <search-button></search-button>
    <rerank-button></rerank-button>
    <show-all></show-all>
    <user-interact></user-interact> -->
    <info-input></info-input>
    <all-result></all-result>
    

  </div>
</template>

<script>
// import TextInput from "./components/TextInput.vue";
// import UploadImg from "./components/UploadImg.vue";
// import TaskRadio from "./components/TaskRadio.vue";
// import SearchButton from "./components/SearchButton";
// import RerankButton from "./components/RerankButton.vue";
// import DatasetSelect from "./components/DatasetSelect.vue";
// import ShowAll from "./components/ShowAll.vue";
// import UserInteract from "./components/UserInteract.vue";
import InfoInput from "./components/InfoInput.vue";
import AllResult from "./components/AllResult.vue";


export default {
  name: "App",
  components: {
    // TextInput,
    // UploadImg,
    // TaskRadio,
    // SearchButton,
    // RerankButton,
    // DatasetSelect,
    // ShowAll,
    // UserInteract,
    InfoInput,
    AllResult,
  },
};
</script>

<style>
</style>
