<template>
  <div class="addSeal">
  
    <table>
        <tr>
            <td>用印编号:</td>
            <td><input type="text" /></td>
            <td>用印名称:</td>
            <td><input type="text" /></td>
            <td>用印类别:</td>
            <td>
            <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
            </select>

            </td>
        </tr>
        <tr>
            <td>用印个数:</td>
            <td><input type="text"></td>
            <td>实际用印个数:</td>
            <td><input type="text"></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>用印人单位:</td>
            <td>
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </td>
            <td>用印人申请:</td>
            <td>
                 <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>用印文件:</td>
            <td><input type="file"></td>
            <td><button>上传</button></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><el-checkbox>电子</el-checkbox><el-checkbox>实物</el-checkbox></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <el-row>
        <el-button @click="Savefile">保存</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    name:"addSeal",
    data () {
        return {

        }
    },
     methods: {
      Savefile(){
        this.$router.push({path:'/sealIndex/sealManageList'})
      }
    },
}
</script>

<style lang="scss" scoped>
    .addSeal{
        height:100%; width:100%;
        background:#fff;        
        table{
            width:95%;
            height: 70%;
            font-weight:bold;
            tr{
                input,select{
                    height: 30px;
                    width: 100%;
                }
                td:nth-of-type(odd){
                    width:10%;
                    text-align:right;
                    padding-right: 10px;
                }
                td:nth-of-type(even){
                    width:23%;
                }
                button{
                     width: 100px;
                     height: 30px;
                }
            }
            
        }
        .el-row{
          padding:10px 0;
          button{
            margin-left: 88%;
            width: 100px;
            height: 40px;
            background: #eee;
          }
        }
    }
</style>
