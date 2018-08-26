<template>
  <div class="ZSystemManagement">
    <el-tabs :tab-position="tabPosition" type="card" v-show="el_tabsflage" >
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
    <div class="Zryqx" v-show="RoleFlage">
      <table>
        <tr>
          <td>*角色名称</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>*角色描述</td>
          <td><input type="text" />
            <span class="quanxian">权限设置
              <el-checkbox>全选</el-checkbox>
            </span>
          </td>
        </tr>
        <tr>
          <td>印章管理</td>
          <td class="yzguanli">
            <el-checkbox>印章申请</el-checkbox>
            <el-checkbox>印证发布列表</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>印章申请列表</el-checkbox>
            <el-checkbox>删除印章</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>待制章列表</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>印章列表</el-checkbox>
          </td>
        </tr>
        <tr>
          <td>审批管理</td>
          <td class="yzguanli">
            <el-checkbox>待审批列表</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>已审批列表</el-checkbox>
          </td>
        </tr>
        <tr>
          <td>印章列表</td>
          <td class="yzguanli">
            <el-checkbox>写入</el-checkbox>
            <el-checkbox>发布</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>冻结</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>解冻</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>注销</el-checkbox>
          </td>
        </tr>
        <tr>
          <td>签章服务器</td>
          <td class="yzguanli">自动化管理</td>
          <td class="yzguanli">
            <el-checkbox>业务系统注册</el-checkbox>
            <el-checkbox style="display:inline-block;">业务系统任务动态</el-checkbox>
            <el-checkbox>业务系统配置项管理</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>全选</el-checkbox>
          </td>
          <td class="yzguanli">
            <el-checkbox>全选</el-checkbox>
          </td>
        </tr>
        <tr>
          <td>文档服务</td>
          <td></td>
        </tr>
        <tr>
          <td>可视化平台</td>
          <td class="yzguanli">
            <el-checkbox>全选</el-checkbox>
          </td>
        </tr>
        <tr>
          <td>移动验证</td>
          <td class="yzguanli">
            <el-checkbox>全选</el-checkbox>
          </td>
        </tr>
        <tr>
          <td>溯源追踪</td>
          <td></td>
        </tr>
        <tr>
          <td>防伪验证</td>
          <td class="yzguanli">
            <el-checkbox>全选</el-checkbox>
          </td>
        </tr>
      </table>
      <el-row>
        <el-button @click="Savefile">保存</el-button>
      </el-row>
    </div>
    <div class="Zquanxian" v-show="JurisdivtionFlage">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="所属单位">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="办公电话">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户号码">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="所属角色">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否激活">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="ButClick">保存</el-button>
          <el-button @click="ButClick">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RoleFlage: false,
      JurisdivtionFlage: false,
      el_tabsflage : true,
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
      }],
      form: {
        name: '',
        region: '',
        type: [],
      }
    }
  },
  methods: {
    Newfile() {
      this.RoleFlage = true;
      this.el_tabsflage = false;
    },
    Savefile() {
      this.RoleFlage = false;
      this.el_tabsflage = true;
    },
    handleClick() {
      this.JurisdivtionFlage = true;
      this.el_tabsflage = false;
    },
    ButClick(){
      this.JurisdivtionFlage = false;
      this.el_tabsflage = true;
    }
  },
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
  .Zryqx {
    height: 100%;
    width: 100%;
    table {
      width: 100%;
      background: #fff;
      tr {
        width: 100%;
        border: 1px solid #ccc;
        border-bottom: none;
        input {
          width: 40%;
          height: 25px;
          margin-left: 10px;
        }
        .quanxian {
          float: right;
          label {
            background: none ! important;
          }
        }
        .yzguanli {
          display: inline-block;
          width: 25%;
          border-right: 1px solid #ccc;
          label {
            margin-left: 0;
            background: none ! important;
            margin-left: 6px;
          }
        }
      }
      tr:nth-of-type(odd) td:first-of-type {
        background: #f1f1f1;
      }
      tr:nth-of-type(even) td:first-of-type {
        background: #f7f7f7;
      }
      tr .yzguanli:last-of-type {
        border-right: none;
      }
    }
    .el-row {
      padding: 10px 0;
      button {
        float: right;
      }
    }
  }
  .Zquanxian {
    height: 100%;
    width: 100%;
    background: #fff;
    text-align: center;
    .el-form {
      display: inline-block;
      width: 60%;
      padding-top: 10px;
    }
    .el-select {
      width: 100%;
    }
  }
}
</style>
