<template>
<div id="GSystemUserList">
    <g-system-user-new-file-list  v-show="flag"  @userList = "newPeople"/>
    <div  v-show="!flag"> 
    <div class="hi">
      	<el-row>
      	  
      	  <el-button type="info" plain @click="newPeople">新建人员</el-button>
      	  
      </el-row>
    </div>
      <el-table
        :data="tableData2"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="date"
          label="单位名称"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name2"
          label="姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="tel1"
          label="办公电话"
          >
        </el-table-column>
        <el-table-column
          prop="tel2"
          label="手机"
          >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
                <g-paper/>
      </div>
 </div>
</template>

<style lang="scss">
#GSystemUserList .hi{
	width: 100%;
	height: 30px;
	text-align:right;
	padding-right: 20px;
	margin-bottom: 20px;
}
#GSystemUserList .hi  button{
	width: 155px;
	height: 40px;
  background:#fff;

}
#GSystemUserList .hi  button span{
	color: #000;
}

 #GSystemUserList .el-table .warning-row {
  height:53px;
  }
#GSystemUserList .has-gutter th{
	color: #000;
	font-weight: bold;
    text-align:center;

}
 
  .GContent #GSystemUserList{
  padding: 0 20px;
  }
 #GSystemUserList  table tr{
  height: 53px;
  }
  #GSystemUserList  table tr td{
  text-align: center;
  }
 #GSystemUserList table tr:nth-of-type(odd){
    background: #fafafa;

  }
  #GSystemUserList table tr:nth-of-type(even){
    background: #fff;
  	
  }
</style>

<script>

  import GPaper from '../GPaper'
	import GSystemUserNewFileList from './GSystemUserNewFileList'
  export default {

      components: { 
        GPaper,
        GSystemUserNewFileList
       },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      newPeople(){
        this.flag = !this.flag;
      },
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    data() {
      return {
        flag: false,
        tableData2: [{
          date: '光大银行',
          name: '王小虎',
          name2: '王小虎',
          tel:"12345678911",
          tel2:"12345678911",
          do: '修改 删除'
        },{
          date: '光大银行',
          name: '王小虎',
          name2: '王小虎',
          tel:"12345678911",
          tel2:"12345678911",
          do: '修改 删除'
        },{
          date: '光大银行',
          name: '王小虎',
          name2: '王小虎',
          tel:"12345678911",
          tel2:"12345678911",
          do: '修改 删除'
        },{
          date: '光大银行',
          name: '王小虎',
          name2: '王小虎',
          tel:"12345678911",
          tel2:"12345678911",
          do: '修改 删除'
        },{
          date: '光大银行',
          name: '王小虎',
          name2: '王小虎',
          tel:"12345678911",
          tel2:"12345678911",
          do: '修改 删除'
        },
        {
          date: '光大银行',
          name: '王小虎',
          name2: '王小虎',
          tel:"12345678911",
          tel2:"12345678911",
          do: '修改 删除'
        },{
          date: '光大银行',
          name: '王小虎',
          name2: '王小虎',
          tel:"12345678911",
          tel2:"12345678911",
          do: '修改 删除'
        },{
          date: '光大银行',
          name: '王小虎',
          name2: '王小虎',
          tel:"12345678911",
          tel2:"12345678911",
          do: '修改 删除'
        }]
      }
    }
  }
</script>