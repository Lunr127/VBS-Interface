<template>
  <div class="textInput">
    <el-input type="textarea" :rows="3" placeholder="Please input query text" v-model="textarea" resize="nones">
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style>
.textInput {
  position: absolute;
  width: 350px;
  left: 50px;
  top: 100px;
}
</style>