<template>

  <div class="uploadImg">
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Drag the file here, or <em>Click to upload</em></div>
    </el-upload>
  </div>

</template>

<script>
export default {};
</script>

<style>
.uploadImg {
  position: absolute;
  width: 350px;
  left: 50px;
  top: 260px;
}
</style>