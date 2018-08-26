<template>
  <div class="sealManageList">
      <el-tabs :tab-position="tabPosition" type="card">
        <el-tab-pane>
          <span class="el-tabs_span" slot="label"><i><img :src="require('@/assets/u3653.png')"></i>实物用印</span>
              <el-row>
                <el-button @click="Newfile">新增用印</el-button>
              </el-row>
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
                    @click="handSeal(scope.$index, scope.row)">盖章</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handBack(scope.$index, scope.row)">打回</el-button>
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
              
        </el-tab-pane>
        <el-tab-pane>
          <span class="el-tabs_span" slot="label"><i><img :src="require('@/assets/u7180.png')"></i> 电子用印</span>
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="date"
                label="单位名称">
              </el-table-column>
              <el-table-column
                prop="name"
                label="用户名">
              </el-table-column>
              <el-table-column
                prop="address"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="date"
                label="所属角色">
              </el-table-column>
              <el-table-column
                prop="name"
                label="办公状态">
              </el-table-column>
              <el-table-column
                prop="address"
                label="手机">
              </el-table-column>
              <el-table-column
                prop="name"
                label="状态">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="授权"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick" type="text" size="small">授权</el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
    methods: {
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      Newfile(){
        this.$router.push({path:'/sealIndex/addSeal'})
      },
      handleClick(){
        this.$router.push({path:'/sealIndex/Zquanxian'})        
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
         currentPage1: 5,
        tabPosition :"left",
        tableData: [{
          file: '合同文件.pdf',
          hetong: "hioudido",
          people: 'lilei',
          type: '公章',
          num: 3,
          time:"2018-03-06"
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
<style>
.el-tabs__nav{
    height:100%;
  }
  .el-tabs__item{
    height:150px;
    text-align:center;
    border:none !important;
  }
  .el-tabs_span{
      display:block;
      width:100%; height:150px;
      text-align:center;
    }
    .el-tabs_span>img{
      display:inline-block;
    }
    .el-tabs_span>i{
      display:block;
    }
</style>
<style lang="scss" scoped>
    .sealManageList{
        width: 100%;
        height: 100%;
        .el-tabs{
          height: 100%;
        }
        .el-row{
          padding:10px 0;
          button{
            float:right;
          }
        }
    }
     .el-pagination{
          text-align:center;
        }
        
</style>
