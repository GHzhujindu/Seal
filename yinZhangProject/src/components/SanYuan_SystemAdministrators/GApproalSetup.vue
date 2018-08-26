<template>
<div id="GApproalSetup">
<div class="hi">
	<el-row>
	  
	  <el-button type="info" plain>新建审批类型</el-button>
	  
</el-row>
</div>
  <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="印章类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="印章类别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="审批类型">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>
            <g-paper/>

 </div>
</template>

<style>
#GApproalSetup .hi{
	margin: 10px;
	width: 100%;
	height: 40px;
	text-align:right;
	padding-right: 20px;
	margin-bottom: 20px;
}
#GApproalSetup .hi  button{
	width: 155px;
	height: 40px;
  background:#fff;

}
#GApproalSetup .hi  button span{
	color: #000;
}

 #GApproalSetup .el-table .warning-row {
  height:53px;
  }
#GApproalSetup .has-gutter th{
	color: #000;
	font-weight: bold;
    text-align:center;

}
 
  .GContent #GApproalSetup{
  padding: 0 20px;
  }
 #GApproalSetup  table tr{
  height: 53px;
  }
  #GApproalSetup  table tr td{
  text-align: center;
  }
 #GApproalSetup table tr:nth-of-type(odd){
    background: #fff;

  }
  #GApproalSetup table tr:nth-of-type(even){
    background: #fafafa;
  	
  }
</style>

<script>
	import GPaper from './GPaper'
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
        tableData2: [{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }]
      }
    }
  }
</script>