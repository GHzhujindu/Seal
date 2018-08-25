<template>
  <div class="Zquanxian">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="所属单位" style="text-align:left;">
    <el-radio v-model="form.radio" label="1">备选项</el-radio>
    <el-radio v-model="form.radio" label="2">备选项</el-radio>
  </el-form-item>
  <el-form-item label="所属单位">
    <el-input v-model="form.name" ></el-input>
  </el-form-item>
  <el-form-item label="印章尺寸" style="text-align:left;">
    <el-input v-model="form.name" style="display:inline-block; width:20%;"></el-input>*<el-input style="width:20%;display:inline-block" v-model="form.name" ></el-input>
  </el-form-item>
  <el-form-item label="是否激活">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="Zbaocun">新建审批类型</el-button>
    <el-button @click="Zbaocun">取消</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
    data () {
        return {
                form: {
                name: '',
                region: '',
                type: [],
                radio: '1'
                }

        }
    },
     methods: {
      Zbaocun(){
        this.$router.push({path:'/component/GSystemSetup'})
      }
    },
}
</script>

<style lang="scss" scoped>
    .Zquanxian{
        height:100%; widht:100%;
        background:#fff;
        text-align:center;
        .el-form{
            display:inline-block;
            width:60%;
            padding-top:10px;
        }
        .el-select{
            width:100%;
        }
    }
</style>
