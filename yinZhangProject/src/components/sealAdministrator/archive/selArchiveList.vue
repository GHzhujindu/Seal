<template>
  <div class="Zsystemlog">
     
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="file"
          label="用印文件"
          width="180">
        </el-table-column>
        <el-table-column
          prop="hetong"
          label="合同编码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="people"
          label="用印申请人">
        </el-table-column>
        <el-table-column
          prop="type"
          label="印章类别">
        </el-table-column>
        <el-table-column
          prop="time"
          label="用印时间">
        </el-table-column>
         <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handSeal(scope.$index, scope.row)">查看</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handBack(scope.$index, scope.row)">下载</el-button>
                </template>
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
export default {
    methods: {
      Newfile(){
      },
      onSubmit(){
        alert("查询")
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handSeal(index, row) {
        console.log(index, row);
      },
      handBack(index, row) {
        console.log(index, row);
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
        file:"合同文件.PDF",
        hetong:"hiddojdkdldd",
        people:"李磊",
        type:"公章",
        time:"2018-03-07",
        },{
        file:"合同文件.PDF",
        hetong:"hiddojdkdldd",
        people:"李磊",
        type:"公章",
        time:"2018-03-07",
        },{
        file:"合同文件.PDF",
        hetong:"hiddojdkdldd",
        people:"李磊",
        type:"公章",
        time:"2018-03-07",
        },{
        file:"合同文件.PDF",
        hetong:"hiddojdkdldd",
        people:"李磊",
        type:"公章",
        time:"2018-03-07",
        },{
        file:"合同文件.PDF",
        hetong:"hiddojdkdldd",
        people:"李磊",
        type:"公章",
        time:"2018-03-07",
        },{
        file:"合同文件.PDF",
        hetong:"hiddojdkdldd",
        people:"李磊",
        type:"公章",
        time:"2018-03-07",
        },{
        file:"合同文件.PDF",
        hetong:"hiddojdkdldd",
        people:"李磊",
        type:"公章",
        time:"2018-03-07",
        },{
        file:"合同文件.PDF",
        hetong:"hiddojdkdldd",
        people:"李磊",
        type:"公章",
        time:"2018-03-07",
        }]
      }
    }
}
</script>
<style>
  .el-form-item input{
    width:100px;
  }
  .el-form-item_img{
    display:inline-block;
    width:25px;
    height:25px;
    vertical-align:-7px;
  }
</style>
<style lang="scss" scoped>
    .Zsystemlog{
        width: 100%;
        height: 100%;
        .el-tabs{
          height: 100%;
        }
        .el-pagination{
          text-align:center;
        }
    }
</style>
