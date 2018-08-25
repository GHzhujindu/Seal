<template>
  <div id="GJurisdiction">
       <div class="GSystemManagement_left">
            <ul>
                <li>
                    <div><img src="../assets/u113.png"></img></div>
                    角色管理
                </li>
                <li>
                    <div><img src="../assets/u1303.png"></img></div>
                    权限管理
                </li>
            </ul>
       </div>
       <div class="GJurisdiction_center">
        <div class="jurisdiction_img1"><img src="../assets/u91.png"></img>书生</div>
        <div class="jurisdiction_img2"><img src="../assets/u95.png"></img><span>中国银行</span></div>
           
       </div>
       <div class="GSystemManagement_right">
            <table>
                <tr v-for=" i in 10">
                    <td>编号</td>
                    <td>角色名称</td>
                    <td>角色描述</td>
                    <td>操作</td>
                    <td>编号</td>
                    <td>角色名称</td>
                    <td>角色描述</td>
                    <td>操作</td>
                </tr>      
            </table>
            <g-paper />
       </div>
  </div>
</template>

<script>
import GPaper from './GPaper'
export default {
  data () {
    return {
    }
  },
  components: { 
    GPaper
   }
}
</script>

<style scoped>
    #GJurisdiction{
        width: 100%;
        height: 602px;
    }
    #GJurisdiction>div{
        float:left;
    }
    .GSystemManagement_left{
        padding: 0 20px;
        text-align:center;
        height: 600px;
    }
    .GSystemManagement_left>ul>li> div{
       width: 76px;
       height: 76px;
       margin: 20px 0 5px 0;
    }
    .GSystemManagement_left>ul>li> div>img{
    margin-top: 3px;
    }
    .GSystemManagement_right{
        width: 958px;
        padding: 18px 0 0 18px;
        heihgt: 100%;
        height: 600px;

    }
    .GSystemManagement_right> table{
        width: 100%;
        text-align:center;
    }
    .GSystemManagement_right> table>tr{
        width: 100%;
        height:53px;
    }
    .GSystemManagement_right> table>tr:nth-of-type(odd){
      background: #fff;
    }
    .GSystemManagement_right> table>tr:nth-of-type(even){
      background: #fafafa;
    }
    .GSystemManagement_right> table>tr>td{
        width: 12.5%;
    }
     
    .GSystemManagement_right > div>span{
        width:140px;
        height:40px;
        border-radius: 4px;
        border:1px solid;
        background: #fff;
        text-align:center;
        line-height: 40px;
        position:absolute;
        right: 20px;
        top: 10px;
    }
    .GJurisdiction_center{
        width: 218px;
        height: 566px;
        margin-top: 18px;
        background: #fff;
        font-size: 14px;
        padding: 14px 0 0 24px;
    }
    .jurisdiction_img1 img{
        width: 20px;
        height: 20px;
    }
    .jurisdiction_img2 img{
        width: 24px;
        height: 15px;
        margin: 0 7px;
    }
   .jurisdiction_img2 span{
        position: relative;
        top: 7px;
    }
</style>
