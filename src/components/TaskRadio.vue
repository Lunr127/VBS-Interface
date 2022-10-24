<template>
  <div class="taskRadio">
    <el-radio v-model="radio" label="1">AVS</el-radio>
    <el-radio v-model="radio" label="2">KIS</el-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
    };
  },
};
</script>

<style>
.taskRadio {
    position: absolute;
    width: 350px;
    left: 50px;
    top: 185px;
  }
</style>