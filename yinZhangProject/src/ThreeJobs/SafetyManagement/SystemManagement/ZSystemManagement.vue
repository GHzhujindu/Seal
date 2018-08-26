<template>
  <div class="ZSystemManagement">
    <el-tabs :tab-position="tabPosition" type="card">
      <el-tab-pane>
        <span class="el-tabs_span" slot="label">
          <i><img :src="require('@/assets/u113.png')"></i>角色管理</span>
        <el-row>
          <el-button @click="Newfile">新建角色</el-button>
        </el-row>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="角色名称" width="180">
          </el-table-column>
          <el-table-column prop="address" label="角色描述">
          </el-table-column>
          <el-table-column prop="address" label="操作">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane>
        <span class="el-tabs_span" slot="label">
          <i><img :src="require('@/assets/u1303.png')"></i> 权限管理</span>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="单位名称">
          </el-table-column>
          <el-table-column prop="name" label="用户名">
          </el-table-column>
          <el-table-column prop="address" label="姓名">
          </el-table-column>
          <el-table-column prop="date" label="所属角色">
          </el-table-column>
          <el-table-column prop="name" label="办公状态">
          </el-table-column>
          <el-table-column prop="address" label="手机">
          </el-table-column>
          <el-table-column prop="name" label="状态">
          </el-table-column>
          <el-table-column fixed="right" label="授权" width="100">
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
    Newfile() {
      this.$router.push({ path: '/component/Zryqx' })
    },
    handleClick() {
      this.$router.push({ path: '/component/Zquanxian' })
    }
  },
  data() {
    return {
      tabPosition: "left",
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
      }, {
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
.el-tabs__nav {
  height: 100%;
}

.el-tabs__item {
  height: 150px;
  text-align: center;
  border: none !important;
}

.el-tabs_span {
  display: block;
  width: 100%;
  height: 150px;
  text-align: center;
}

.el-tabs_span>img {
  display: inline-block;
}

.el-tabs_span>i {
  display: block;
}
</style>
<style lang="scss" scoped>
.ZSystemManagement {
  width: 100%;
  height: 100%;
  .el-tabs {
    height: 100%;
  }
  .el-row {
    padding: 10px 0;
    button {
      float: right;
    }
  }
}
</style>
