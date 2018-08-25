<template>
  <div id="GSystemUnit">
      <el-container>
          <el-aside width="116px">
                <div class="GSystemManagement_left">
                    <ul>
                        <li>
                            <router-link to="/HelloWorld/GSystemUnit/GSystemUnitList">
                                <div><img src="../../../assets/u113.png" /></div>
                                单位管理
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/HelloWorld/GSystemUnit/GSystemUserList">

                            <div><img src="../../../assets/u1303.png" /></div>
                            用户管理
                            </router-link>

                        </li>
                    </ul>
               </div>
          </el-aside>
          <el-aside width="220px">
                  <div class="GJurisdiction_center">
                    <div class="jurisdiction_img1"><img src="../../../assets/u91.png" />书生</div>
                    <div class="jurisdiction_img2"><img src="../../../assets/u95.png" /><span>中国银行</span></div>   
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
export default {
  data () {
    return {
    }
  },
  components: { 
   }
}
</script>

<style scoped>
#GSystemUnit .el-main{
    padding: 0!important;
}
    #GSystemUnit{
        width: 100%;
        min-height: 600px;
        min-width: 800px;
        margin: 0 auto;
        background: #E9EEF3;
    }
    #GSystemUnit .el-aside {
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
    margin-top: 3px;
    }
    .GSystemManagement_right{
        padding: 0 18px;
        heihgt: 100%;
        min-height: 600px;

    }
    .GSystemManagement_right> table{
        width: 100%;
        mine-width: 958px;
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
        height: 600px;
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
