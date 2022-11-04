<template>
    <div class="infoInput">
        <el-input type="textarea" :rows="3" placeholder="Please input query text" v-model="textarea" resize="nones">
        </el-input>
        <el-radio v-model="radio" label="1">AVS</el-radio>
        <el-radio v-model="radio" label="2">KIS</el-radio>

        <el-upload style="position: absolute;width: 350px;top: 160px;" class="upload-demo" drag
            action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drag the file here, or <em>Click to upload</em></div>
        </el-upload>

        <el-row style="position: absolute;width: 350px;top:600px;">
            <el-col :span="8" :offset="3">
                <el-button @click="search" type="primary" size="small">Search</el-button>
            </el-col>
            <el-col :span="8" :offset="4">
                <el-button type="danger" size="small">Re-Rank</el-button>
            </el-col>
        </el-row>
    </div>
</template>
  
<script>
export default {
    name: "TextInput",
    data() {
        return {
            textarea: "",
            radio: "1",
        };
    },
    methods: {
        search() {
            this.$axios.post('http://localhost:8050/search/text', {
                textInput: this.textarea,
                radioSelect: this.radio
            })
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                    this.$bus.$emit("getUrl", res)
                }).catch(err => {
                    console.log(err)
                })
        }
    },
};
</script>
  
<style>
.infoInput {
    position: absolute;
    width: 350px;
    left: 50px;
    top: 100px;
}
</style>