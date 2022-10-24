<template>
    <div>
        <h6 class="dataset">Dataset:</h6>
        <el-select v-model="value" placeholder="choose" size="mini" class="datasetSelect">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            options: [{
                value: 'option1',
                label: 'V3C1 + V3C2'
            }, {
                value: 'option2',
                label: 'Underwater'
            }],
            value: ''
        }
    }
}
</script>

<style>
.datasetSelect {
    position: absolute;
    width: 120px;
    height: 100px;
    left: 110px;
    top: 60px;
}

.dataset {
    position: absolute;
    width: 250px;
    left: 50px;
    top: 42px;
}
</style>
