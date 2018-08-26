<template>
  <div class="Zryqx">
    <table>
        <tr><td>*角色名称</td><td ><input type="text" /></td></tr>
        <tr><td>*角色描述</td><td><input type="text" /><span class="quanxian">权限设置<el-checkbox>全选</el-checkbox></span></td></tr>
        <tr><td>印章管理</td><td class="yzguanli"><el-checkbox>印章申请</el-checkbox><el-checkbox>印证发布列表</el-checkbox></td><td class="yzguanli"><el-checkbox>印章申请列表</el-checkbox><el-checkbox>删除印章</el-checkbox></td><td class="yzguanli"><el-checkbox>待制章列表</el-checkbox></td><td class="yzguanli"><el-checkbox>印章列表</el-checkbox></td></tr>
        <tr><td>审批管理</td><td class="yzguanli"><el-checkbox>待审批列表</el-checkbox></td><td class="yzguanli"><el-checkbox>已审批列表</el-checkbox></td></tr>
        <tr><td>印章列表</td><td class="yzguanli"><el-checkbox>写入</el-checkbox><el-checkbox>发布</el-checkbox></td><td class="yzguanli"><el-checkbox>冻结</el-checkbox></td><td class="yzguanli"><el-checkbox>解冻</el-checkbox></td><td class="yzguanli"><el-checkbox>注销</el-checkbox></td></tr>
        <tr><td>签章服务器</td><td class="yzguanli">自动化管理</td><td class="yzguanli"><el-checkbox>业务系统注册</el-checkbox><el-checkbox style="display:inline-block;">业务系统任务动态</el-checkbox><el-checkbox>业务系统配置项管理</el-checkbox></td><td class="yzguanli"><el-checkbox>全选</el-checkbox></td><td class="yzguanli"><el-checkbox>全选</el-checkbox></td></tr>
        <tr><td>文档服务</td><td></td></tr>
        <tr><td>可视化平台</td><td class="yzguanli"><el-checkbox>全选</el-checkbox></td></tr>
        <tr><td>移动验证</td><td class="yzguanli"><el-checkbox>全选</el-checkbox></td></tr>
        <tr><td>溯源追踪</td><td></td></tr>
        <tr><td>防伪验证</td><td class="yzguanli"><el-checkbox>全选</el-checkbox></td></tr>
    </table>
    <el-row>
        <el-button @click="Savefile">保存</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
     methods: {
      Savefile(){
        this.$router.push({path:'/component/ZSystemManagement'})
      }
    },
}
</script>

<style lang="scss" scoped>
    .Zryqx{
        height:100%; width:100%;
        table{
            width:100%;
            background:#fff;
            tr{
                width:100%;
                border:1px solid #ccc;
                border-bottom:none;
                input{
                    width:40%; height:25px;
                    margin-left:10px;
                }
                .quanxian{
                    float:right;
                    label{
                        background:none ! important;
                    }
                }
                .yzguanli{
                    display:inline-block;
                    width:25%;
                    border-right:1px solid #ccc;
                    label{
                        margin-left:0;
                        background:none ! important;
                        margin-left:6px;
                    }
                }
            }
            tr:nth-of-type(odd) td:first-of-type{
                background:#f1f1f1;
            }
            tr:nth-of-type(even) td:first-of-type{
                background:#f7f7f7;
            }
            tr .yzguanli:last-of-type{
                border-right:none;
            }
        }
        .el-row{
          padding:10px 0;
          button{
            float:right;
          }
        }
    }
</style>
