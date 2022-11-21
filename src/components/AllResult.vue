<template>
    <el-container>
        <el-main>
            <el-image style="width: 118px; height: 80px; border-style: solid; border-width: 1px; border-color: white"
                v-for="url in urls" @click="ShowpreviewPic(url)" :key="url" :src="url" lazy>
            </el-image>
            <el-dialog :visible.sync="visible" :modal="false" title="Preview" width="40%">
                <img :src="previewpic" alt="" width="100%" />
                <span slot="footer" class="dialog-footer">
                    <el-button @click="Like" type="primary" size="small">Like</el-button>
                    <el-button @click="NotLike" type="danger" size="small">Not Like</el-button>
                </span>
            </el-dialog>
        </el-main>

        <el-row style="position: absolute;width: 1650px;top:600px;">
            <el-col :span="8" :offset="20">
                <el-button @click="rerank" type="danger" size="small">rerank</el-button>
            </el-col>
        </el-row>

    </el-container>


</template>

<script>
export default {
    name: "AllResult",
    data() {
        return {
            urls: [
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
            ],
            visible: false,
            previewpic: "",
            // Likes: [],
            // NotLikes: []
        }
    },
    mounted() {
        this.$bus.$on("getUrl", (data) => {
            this.urls = []
            data.data.forEach(element => {
                // var s = 'https://github.com/Lunr127/vbs-img/blob/main' + element + '?raw=true'
                var a = element.substr(1, 5)
                var b = element.substr(7)
                var s = require('E:/Git/towhee-main/V3Ctest/' + a + '/' + b)
                this.urls.push(s)
            })
        })
    },
    beforeDestroy() {
        this.$bus.off("getUrl")
    },
    methods: {
        ShowpreviewPic(url) {
            this.previewpic = url;
            this.visible = true;
        },
        Like() {
            // this.Likes.push(this.previewpic)
            this.$axios.post('http://localhost:8050/search/feedback', {
                path: this.previewpic
            })
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err)
                })
            console.log("like ", this.previewpic);
        },
        NotLike() {
            // this.NotLikes.push(this.previewpic)
            console.log("Not like ", this.previewpic);
        },
        rerank(){
            this.$axios.post('http://localhost:8050/search/reRank', {
            })
                .then(res => {
                    this.urls = []
                    console.log(res);
                    res.data.forEach(element => {
                        var a = element.substr(1, 5)
                        var b = element.substr(7)
                        var s = require('E:/Git/towhee-main/V3Ctest/' + a + '/' + b)
                        this.urls.push(s)
                    })
                }).catch(err => {
                    console.log(err)
                })
        }
    },
}
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

.footer {
    position: absolute;
    width: 1030px;
    height: 220px;
    left: 450px;
    top: 520px;
    border-radius: 10px;
    border: 2px solid rgb(64, 158, 255);
}
</style>