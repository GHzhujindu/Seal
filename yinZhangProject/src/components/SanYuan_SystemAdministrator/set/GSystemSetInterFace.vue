<template>
  <div id="GSystemLogStamp">
      <el-container>
          <el-aside width="116px">
                <div class="GSystemManagement_left">
                    <ul>
                        <li>
                            <router-link to="/HelloWorld/GSystemSetInterFace/GSystemSetInterFaceList">

                            <div><img src="../../../assets/u835.png" /></div>
                            定义界面
                            </router-link>

                        </li>
                        <li>
                            <router-link to="/HelloWorld/GSystemSetInterFace/GSystemSetPasswordList">

                            <div><img src="../../../assets/u788.png" /></div>
                            口令定义
                            </router-link>

                        </li>
                        <li>
                            <router-link to="/HelloWorld/GSystemSetInterFace/GSystemSetPowerList">

                            <div><img src="../../../assets/u459.png" /></div>
                            授权管理
                            </router-link>
                        </li>
                    </ul>
               </div>
          </el-aside>
          <el-main>
             <div class="GSystemManagement_right">
                
                            <router-view />
                
            
            </div>
          </el-main>
    </el-container>
       
     
      
  </div>
</template>

<script>
import GPaper from '../GPaper'
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
#GSystemLogStamp .el-main{
    padding: 0!important;
}
    #GSystemLogStamp{
        width: 100%;
        min-height: 600px;
        min-width:800px;
        margin: 0 auto;
        background: #E9EEF3;
    }
    #GSystemLogStamp .el-aside {
        background-color: #E9EEF3;
        color: #333;
      }
    .GSystemManagement_left{
        padding: 0 20px;
        text-align:center;
         min-height: 600px;
    }
    .GSystemManagement_left>ul>li> div{
       width: 76px;
       height: 76px;
       margin: 0 0 5px 0;
    }
    .GSystemManagement_left>ul>li> div>img{
    margin-top: 10px;
    }
    
    .GSystemManagement_right{
        padding: 0 18px;
        heihgt: 100%;
        min-height: 600px;

    }
    .GSystemManagement_right> table{
        width: 100%;
        mine-width: 800px;
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
   
</style>
