<template>
  <div class="Zlogguanli">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="操作类型">
          <el-select v-model="formInline.region" placeholder="操作类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作人">
          <el-input v-model="formInline.user" placeholder="操作人"></el-input>
        </el-form-item>
        <el-form-item label="选择日期">
        </el-form-item>
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作日期">
        </el-table-column>
        <el-table-column
          prop="address"
          label="IP地址">
        </el-table-column>
        <el-table-column
          prop="address"
          label="备注">
        </el-table-column>
      </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
          </el-pagination>
  </div>
</template>

<script>
import GPaper from './GPaper'
export default {
 components: { 
        GPaper
       },
    methods: {
      Newfile(){
        this.$router.push({path:'/component/Zryqx'})
      },
      onSubmit(){
        alert("查询")
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        value6 : '',
        currentPage1: 5,
                tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
}
</script>

<style lang="scss" scoped>
    .Zlogguanli{
        width: 100%;
        height: 100%;
        .el-tabs{
          height: 100%;
        }
        .el-pagination{
          text-align:center;
        }
        .el-row{
          padding:0 !important;
        }
    }
</style>
