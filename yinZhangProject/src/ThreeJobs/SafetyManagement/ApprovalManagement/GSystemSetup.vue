<template>
  <div>
    <div class="hi">
      <el-row>
        <el-button type="info" plain @click="ZNewltype">新建审批类型</el-button>
      </el-row>
    </div>
    <el-table :data="tableData2" stripe style="width: 100%">
      <el-table-column prop="date" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="角色名称" width="180">
      </el-table-column>
      <el-table-column prop="address" label="角色描述">
      </el-table-column>
      <el-table-column prop="address" label="操作">
      </el-table-column>
    </el-table>
    <el-pagination prev-text="上一页" next-text="下一页" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
    </el-pagination>

  </div>
</template>

<style scoped>
.hi {
  width: 100%;
  height: 30px;
  text-align: right;
  padding-right: 20px;
  margin-bottom: 20px;
}

.hi button {
  width: 155px;
  height: 40px;
}

.hi button span {
  color: #000;
}

.el-table .warning-row {
  height: 53px;
}

.has-gutter th {
  color: #000;
  font-weight: bold;
}

.GContent>div {
  padding: 0 20px;
}

table tr {
  height: 53px;
}

table tr:nth-of-type(odd) {
  background: #fff;
}

table tr:nth-of-type(even) {
  background: #fafafa;
}

.el-pagination {
  text-align: center;
}
</style>

<script>
export default {
  methods: {
    ZNewltype() {
      this.$router.push({ path: "/component/ZNewltype" })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
      }, {
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
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }]
    }
  }
}
</script>