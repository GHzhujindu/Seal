<template>
  <div id="GSystemManagement">
       <div class="GSystemManagement_left">
            <ul>
                <li>
                    <div><img src="../../assets/u113.png" /></div>
                    角色管理
                </li>
                <li>
                    <div><img src="../../assets/u1303.png" /></div>
                    权限管理
                </li>
            </ul>
       </div>
        <div class="GSystemManagement_right">
            <div class="hi">
                <el-row>
                  <el-button type="info" plain>新建角色</el-button>
                </el-row>
            </div>
            <el-table
                :data="tableData2"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="date"
                  label="编号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="角色名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="角色描述">
                </el-table-column>
                <el-table-column
                  prop="address2"
                  label="操作"
                   width="180">
                </el-table-column>
              </el-table>

                <g-paper />
       </div>
  </div>
</template>

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
          date: '01',
          name: '安全审计管理员',
          address: '安全审计管理员',
          address2: '查看'

        }, {
          date: '02',
          name: '系统管理员',
          address: '系统管理员',
          address2: '查看'

        }, {
          date: '03',
          name: '安全管理保密员',
          address: '安全管理保密员',
          address2: '查看'

        },{
          date: '04',
          name: '制章员',
          address: '',
          address2: '修改 删除'

        }, {
          date: '05',
          name: '制章员',
          address: '',
          address2: '修改 删除'

        }, {
          date: '06',
          name: 'd',
          address: '上海市普陀区金沙江路 1518 弄',
          address2: '修改 删除'

        }, {
          date: '07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          address2: '修改 删除'
        },{
          date: '08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          address2: '修改 删除'
        }]
      }
    }
}
</script>

<style>

#GSystemManagement .hi{
    margin: 10px;
    width: 100%;
    height: 30px;
    text-align:right;
    padding-right: 20px;
    margin-bottom: 20px;
}
#GSystemManagement .hi  button{
    width: 155px;
    height: 40px;
    background:#fff;
}
#GSystemManagement .hi  button span{
    color: #000;
}
 #GSystemManagement  table tr{
  height: 53px;
  }
  #GSystemManagement  table tr td{
    text-align:center;
  }
  #GSystemManagement table  tbody tr:nth-of-type(odd){
    background: #fff;

  }
 #GSystemManagement table tbody tr:nth-of-type(even){
    background: #fafafa;
    
  }
 #GSystemManagement .el-table .warning-row {
  height:53px;
  }
#GSystemManagement .has-gutter th{
    color: #000;
    font-weight: bold;
    text-align:center;
}
    #GSystemManagement{
        width: 100%;
        height: 602px;
    }
    #GSystemManagement>div{
        float:left;
    }
    #GSystemManagement .GSystemManagement_left{
        padding: 0 20px;
        text-align:center;
        height: 600px;
    }
    #GSystemManagement .GSystemManagement_left>ul>li> div{
       width: 76px;
       height: 76px;
       margin: 20px 0 5px 0;
    }
    #GSystemManagement .GSystemManagement_left>ul>li> div>img{
    margin-top: 3px;
    }
    #GSystemManagement .GSystemManagement_right{
        width:1176px;
        heihgt: 100%;
        height: 600px;

    }
    
     
</style>
