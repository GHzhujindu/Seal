<template>
<div id="GSystemLogUserList">
<div class="hi">
      <div class="role">
            <form>
             
              <el-row>
                  印章名称：<input type="text" class="operator"/>
                  使用范围：<input type="text" />
                  <el-button type="info" plain>全部</el-button>
                  <el-button type="info" plain>查询</el-button>
                  
              </el-row>
            </form>
        </div>

</div>
  <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    
    <el-table-column
      prop="name"
      label="编号"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name2"
      label="操作人"
      width="80">
    </el-table-column>
    
    <el-table-column
      prop="tel2"
      label="操作日期"
      >
    </el-table-column>
   
    
     <el-table-column
      prop="zhengshu"
      label="单位名称"
     >
    </el-table-column>
    
     <el-table-column
      prop="beizhu"
      label="备注"
      >
    </el-table-column>
  </el-table>
            <g-paper/>

 </div>
</template>

<style> 
#GSystemLogUserList .hi{
	width: 100%;
	height: 30px;
	text-align:left;
	padding-right: 20px;
	margin-bottom: 20px;
}
#GSystemLogUserList .hi  button{
	width: 100px;
	height: 40px;
  background:#fff;
  float: right;
  margin-left: 30px;
}

#GSystemLogUserList .hi  button span{
	color: #000;
}

 #GSystemLogUserList .el-table .warning-row {
  height:53px;
  }
#GSystemLogUserList .has-gutter th{
	color: #000;
	font-weight: bold;
    text-align:center;

}
 
  .GContent #GSystemLogUserList{
  padding: 0 20px;
  }
 #GSystemLogUserList  table tr{
  height: 53px;
  }
  #GSystemLogUserList  table tr td{
  text-align: center;
  }
  #GSystemLogUserList table tr:nth-of-type(odd){
    background: #fafafa;

  }
  #GSystemLogUserList table tr:nth-of-type(even){
    background: #fff;
  	
  }
  #GSystemLogUserList .hi .role{
         width: 100%;
         height: 70px;
         font-size: 16px;
     }
    #GSystemLogUserList .hi .role form{
         width: 100%;
         font-weight: bold;
     }
     
     #GSystemLogUserList .hi .role input{
         width:136px;
         height: 30px;
     }
     #GSystemLogUserList .hi .role .operator{
        margin-right: 50px;
     }
     
      
</style>

<script>
	import GPaper from '../GPaper'
  export default {

      components: { 
        GPaper
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
    },
    data() {
      return {
      input1:'',
      input2:'',
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