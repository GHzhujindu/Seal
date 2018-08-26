<template>
  <div class="Zsystemlog">
     
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="type"
          label="印章种类"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="印章名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="class"
          label="印章类别">
        </el-table-column>
        <el-table-column
          prop="file"
          label="用印文件">
        </el-table-column>
        <el-table-column
          prop="apply"
          label="申请单位">
        </el-table-column>
        <el-table-column
          prop="time"
          label="申请时间">
        </el-table-column>
        <el-table-column
          prop="people"
          label="申请人">
        </el-table-column>
        <el-table-column
          prop="num"
          label="用印次数">
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
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
        },{
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
        },{
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
        },{
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
        },{
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
        },{
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
        },{
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
        },{
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
        },{
        type:"电子",
        name:"公章",
        file:"PDF",
        apply:"书生",
        time:"2018-03-07",
        people:"李磊",
        num:"4"
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
