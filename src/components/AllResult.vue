<template>
    <el-container>
        <el-main>
            <el-image style="width: 120px; height: 80px;" v-for="url in urls" @click="ShowpreviewPic(url)" :key="url"
                :src="url" lazy>
            </el-image>
            <el-dialog :visible.sync="visible" :modal="false" title="Preview" width="30%">
                <img :src="previewpic" alt="" width="100%" />
            </el-dialog>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "AllResult",
    data() {
        return {
            urls: [],
            visible: false,
            previewpic: "",
        }
    },
    mounted() {
        this.$bus.$on("getUrl", (data) => {
            this.urls = []
            data.data.forEach(element => {
                var s = 'https://github.com/Lunr127/vbs-img/blob/main' + element + '?raw=true'
                this.urls.push((s))
            })
            console.log(this.urls);
        })
    },
    beforeDestroy() {
        this.$bus.off("getUrl")
    },
    methods: {
        ShowpreviewPic(url) {
            this.previewpic = url;
            this.visible = true;
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