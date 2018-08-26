<template>
<el-container>
  <el-header height="82px"><signatureTop></signatureTop></el-header>
  <el-container>
    <el-aside width="175px"><signatureTabBarLeft></signatureTabBarLeft></el-aside>
    <el-main>
        <router-view />
    </el-main>
  </el-container>
</el-container>
</template>


<script>
import signatureTop from './signatureTop'
import signatureTabBarLeft from './signatureTabBarLeft'
export default {
    name : "sealIndex",
    components:{
	    signatureTop,
      signatureTabBarLeft
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body,html{
    width:100%;
    height:100%;
}
#app{
    width:100%;
    height:100%;
}
h1, h2 {
  font-weight: normal;
}

li {
    list-style:none;
}
a {
  color: #42b983;
  text-decoration: none;
}
    .systermadministorOne{
        width: 100%;
        height: 682px;
        margin: 0 auto;
    }
    .systermadministorOne> div{
        float: left;
    }
    .systermadministorOne_left{
        width: 150px;
        height: 100%;
    }
    .systermadministorOne_right{
        width: 85%;
        height: 100%;
    }
    .GContent{
       position: absolute;
        top: 82px;
        left: 175px;
        width:1311px;
        height: 600px;
        background: #e9f0f5;
    }
    table{
        border-collapse: collapse;
    }
</style>
<style lang="scss" scoped>
    .el-container{
        width:100%;
        height:100%;
        .el-header{
            height:82px;
            padding:0;
        }
        .el-container{
            .el-aside{
            }
            .el-main{
                background:#e9f0f5;
            }
        }
    }
</style>



