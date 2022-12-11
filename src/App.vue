<template>
  <div id="app">
    <el-input style="position: absolute;width: 350px;top: 50px;left: 20px;" type="textarea" :rows="3"
      placeholder="Please input query text" v-model="textarea" resize="nones">
    </el-input>
    <el-radio style="position: absolute;width: 20px;top: 135px;left: 20px;" v-model="radio" label="1">AVS</el-radio>
    <el-radio style="position: absolute;width: 20px;top: 135px;left: 110px;" v-model="radio" label="2">KIS</el-radio>

    <el-upload style="position: absolute;width: 350px;top: 220px;left: 20px;" class="upload-demo" drag
      action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Drag the file here, or <em>Click to upload</em></div>
    </el-upload>

    <el-row style="position: absolute;width: 350px;top:700px;">
      <el-col :span="8" :offset="3">
        <el-button @click="search" type="primary" size="small">Search</el-button>
      </el-col>
      <el-col :span="8" :offset="4">
        <el-button @click="rerank" type="danger" size="small">Re-Rank</el-button>
      </el-col>
    </el-row>

    <el-main>
      <el-image style="width: 118px; height: 80px; border-style: solid; border-width: 1px; border-color: white"
        v-for="(url, index) in urls" @click="ShowpreviewPic(url, index)" :key="url.shot" :src="url.base64" lazy>
      </el-image>
      <el-dialog :visible.sync="visible" :modal="false" width="30%" v-dialogDrag>
        {{urlIndex}}       LikeCount:{{LikeCount}}       NotLikeCount:{{NotLikeCount}}
        <img :src="previewpic" alt="" width="100%" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="Skip" type="info" size="small">Skip</el-button>
          <el-button @click="Like" type="primary" size="small">Like</el-button>
          <el-button @click="NotLike" type="danger" size="small">Not Like</el-button>
        </span>
      </el-dialog>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      textarea: "",
      radio: "1",
      urls: [
        // 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      ],
      visible: false,
      previewpic: "",
      shot: "",
      Likes: [],
      NotLikes: [],
      urlIndex: 0,
      LikeCount: 0,
      NotLikeCount: 0,
    };
  },
  methods: {

    search() {
      this.urls = []
      this.Likes = []
      this.NotLikes = []
      this.shots = []
      this.LikeCount = 0
      this.NotLikeCount = 0
      this.$axios.post('http://localhost:8050/search/text', {
        textInput: this.textarea,
        radioSelect: this.radio
      })
        .then(res => {
          res.data.forEach(element => {
            this.urls.push(element)
          })
        }).catch(err => {
          console.log(err)
        })
    },

    ShowpreviewPic(url, index) {
      this.previewpic = url.base64
      this.visible = true;
      this.shot = url.shot
      this.urlIndex = index
    },

    Like() {
      this.LikeCount++
      this.shot = this.urls[this.urlIndex].shot
      this.Likes.push(this.shot)
      this.urlIndex = this.urlIndex + 1
      this.previewpic = this.urls[this.urlIndex].base64
      // console.log("like ", this.shot);
    },

    NotLike() {
      this.NotLikeCount++
      this.shot = this.urls[this.urlIndex].shot
      this.NotLikes.push(this.shot)
      this.urlIndex = this.urlIndex + 1
      this.previewpic = this.urls[this.urlIndex].base64
      // console.log("Not like ", this.shot);
    },

    Skip() {
      this.urlIndex = this.urlIndex + 1
      this.previewpic = this.urls[this.urlIndex].base64
    },

    rerank() {
      this.$axios.post('http://localhost:8050/search/reRank', {
        LikePaths: this.Likes,
        NotLikePaths: this.NotLikes
      })
        .then(res => {
          this.urls = []
          console.log(res);
          res.data.forEach(element => {
            this.urls.push(element)
          })
        }).catch(err => {
          console.log(err)
        })
      this.Likes = [],
      this.NotLikes = []
    },
  },
};
</script>

<style>
.el-main {
  position: absolute;
  width: 1030px;
  height: 470px;
  left: 450px;
  top: 20px;
  border-radius: 10px;
  border: 2px solid rgb(64, 158, 255);
}
</style>
