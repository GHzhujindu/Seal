<template>
<div class="Zanquan">
  <div class="Zanquans">
    <el-row>
      <span>系统管理员日志</span>
      <el-button type="info" plain @click="ZNewltype" >进入</el-button>
  </el-row>
    <el-table
      :data="tableData"
      stripe>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
    <div class="Zanquans">
      <el-row>
          <span>安全管理员日志</span>
          <el-button type="info" plain @click="ZNewltype" >进入</el-button>
      </el-row>
          <el-table
      :data="tableData"
      stripe>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
      </div>
      <div class="Zanquans">
        <el-row>
            <span>制作印章人日志</span>
            <el-button type="info" plain @click="ZNewltype" >进入</el-button>
        </el-row>
            <el-table
      :data="tableData"
      stripe>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
        </div>
        <div class="Zanquans">
          <el-row>
              <span>印控仪维护日志</span>
              <el-button type="info" plain @click="ZNewltype" >进入</el-button>
          </el-row>
      <el-table
      :data="tableData"
      stripe>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
          </div>
 </div>
</template>
<style>
  .el-table{
      height:80%;
    }
    .el-table__body tr{
      height:20%;
    }
    .el-table td{
      padding:8px 0;
    }
</style>
<style lang="scss" scoped>
.Zanquan{
	width: 100%;
	height: 100%;
  min-width:736px;
}
  .Zanquans{
    width:45%; height:50%;
    min-width:360px;
    display:inline-block;
    .el-table{
      height:80%;
      tr{
        height:20%;
      }
      td{
        padding:0;
      }
    }
    button{
      float:right;
    }
    span{
      display:inline-block;
      height:40px;
      line-height:40px;
    }
  }
</style>

<script>
  export default {
    methods: {
      ZNewltype(){
        // tZanquans.$router.push({path:"/component/ZNewltype"})
      }
    },
    data() {
      return {
        tableData: [{
          date: '2',
          name: '王小虎',
          address: '上海市普陀'
        }, {
          date: '2',
          name: '王小虎',
          address: '上海市普陀',
        }, {
          date: '20',
          name: '王小虎',
          address: '上海市普陀'
        },{
          date: '4',
          name: '王小虎',
          address: '上海市普陀区',
        }]
      }
    }
  }
</script>