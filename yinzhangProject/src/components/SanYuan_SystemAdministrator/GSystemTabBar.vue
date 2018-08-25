<template>
  <div id="GSystemTabBar">
        <div class="GHeader"><img src="../../assets/u46.png" /></div>
        <ul>
            <li><router-link to="/HelloWorld/GSystemUnit"><img src="../../assets/u13.png" />系统管理</router-link></li>
            <li><router-link to="/HelloWorld/GSystemLogStamp"><img src="../../assets/u18.png">日志管理</router-link></li>
            <li><router-link to="/HelloWorld/GSystemSetInterFace"><img src="../../assets/u23.png">系统设置</router-link></li>
        </ul>
  </div>
</template>

<script>
export default {
    data () {
    return {}
    
      
  }
}
</script>

<style scoped>
    #GSystemTabBar{
        width: 175px;
        height: 100%;
        position:absolute;
        left:0;
    }
    .GHeader{
        width: 100%;
        height: 82px;
        line-height:82px;
        background: #ff6618;
        text-align:center;
    }
    .GHeader >img{
    width: 144px;
    height:54px;
    margin-top: 14px;
    }
    ul{
        width: 100%;
        height: 600px;
        background: #333333;
        color: #fff;
    }
    li{
        height: 70px;
        width: 100%;
        line-height: 70px;
        border-bottom: 1px solid #4b4b4b;

    }
    li a {
        color: #fff;
        width: 100%;
        height: 70px;
        display: inline-block;
    }
    li img{
        margin: 0 15px 0 20px;
        width: 17px;
        height: 17px;
        vertical-align: -2px;
    }
</style>
