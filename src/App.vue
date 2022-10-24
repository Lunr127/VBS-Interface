<template>
  <div id="app">

    <dataset-select></dataset-select>
    <text-input></text-input>
    <task-radio></task-radio>
    <upload-img></upload-img>
    <search-button></search-button>
    <rerank-button></rerank-button>
    <show-all></show-all>
    <user-interact></user-interact>
    

  </div>
</template>

<script>
import TextInput from "./components/TextInput.vue";
import UploadImg from "./components/UploadImg.vue";
import TaskRadio from "./components/TaskRadio.vue";
import SearchButton from "./components/SearchButton";
import RerankButton from "./components/RerankButton.vue";
import DatasetSelect from "./components/DatasetSelect.vue";
import ShowAll from "./components/ShowAll.vue";
import UserInteract from "./components/UserInteract.vue";


export default {
  name: "App",
  components: {
    TextInput,
    UploadImg,
    TaskRadio,
    SearchButton,
    RerankButton,
    DatasetSelect,
    ShowAll,
    UserInteract,
  },
};
</script>

<style>
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
