<template>
  <div class="Zquanxian">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="所属单位">
    <el-input v-model="form.name" disabled></el-input>
  </el-form-item>
    <el-form-item label="用户名称">
    <el-input v-model="form.name" disabled></el-input>
  </el-form-item>
    <el-form-item label="办公电话">
    <el-input v-model="form.name" disabled></el-input>
  </el-form-item>
    <el-form-item label="用户号码">
    <el-input v-model="form.name" disabled></el-input>
  </el-form-item>
    <el-form-item label="姓名">
    <el-input v-model="form.name" disabled></el-input>
  </el-form-item>
  <el-form-item label="所属角色">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="是否激活">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="Zbaocun">保存</el-button>
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
                }

        }
    },
     methods: {
      Zbaocun(){
        this.$router.push({path:'/component/ZSystemManagement'})
      }
    },
}
</script>

<style lang="scss" scoped>
    .Zquanxian{
        height:100%; width:100%;
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
