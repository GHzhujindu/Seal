<template>
  <div class="GTabbarLeft">
        <ul>
            <li @click="ZSystemManagement"><img src="../assets/u13.png"></img>系统管理</li>
            <li @click="Zlogguanli"><img src="../assets/u18.png">日志管理</li>
            <li @click="GSystemSetup"><img src="../assets/u23.png">系统设置</li>
        </ul>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods:{
        ZSystemManagement(){
            this.$router.push({path:'ZSystemManagement'})
        },
        GDaylyManage(){
            this.$router.push({path:'GDaylyManage'})
        },
        Zlogguanli(){
            this.$router.push({path:'Zlogguanli'})            
        },
        GSystemSetup(){
            this.$router.push({path:'GSystemSetup'})                        
        }
    } 
}
</script>

<style scoped>
    .GTabbarLeft{
        width: 100%;
        height:100%;
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
        height: 100%;
        background: #333333;
        color: #fff;
    }
    li{
        height: 70px;
        width: 100%;
        line-height: 70px;
        border-bottom: 1px solid #4b4b4b;
        cursor:pointer;
    }
    li img{
        margin: 0 15px 0 20px;
        width: 17px;
        height: 17px;
        vertical-align: -2px;
    }
</style>
