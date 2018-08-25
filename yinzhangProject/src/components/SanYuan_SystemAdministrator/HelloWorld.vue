<template>
    <div class="systermadministorOne">
        <el-container>
          <el-aside width="175px">
              <g-system-tab-bar />
          </el-aside>
          <el-container>
            <el-header height="82px">
              <g-header />
            </el-header>
              <el-main>
                <router-view />
              </el-main>
          </el-container>
        </el-container>
    </div>

</template>

<script>
import GHeader from './GHeader'
import GTabbarLeft from './GTabbarLeft'
import GSystemTabBar from './GSystemTabBar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to ganXianJuns'
    }
  },
  components: { 
    GHeader,
    GTabbarLeft,
    GSystemTabBar
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .el-header{
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #333333;
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #000;
    padding:20px 0!important;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  
  
</style>