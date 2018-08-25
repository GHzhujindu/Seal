<template>
  <div class="Zanquanleft">
        <ul>
            <li :class="{lis:'flage'}" @click="Zsystemlog"><img src="../assets/u13.png"/>系统管理员日志</li>
            <li :class="flage" @click="Zanquanlog"><img src="../assets/u18.png"/>安全保密员日志</li>
            <li :class="flage" @click="Zzhizhanglog"><img src="../assets/u23.png"/>制作印章人日志</li>
            <li :class="flage" @click="Zyinkongyilog"><img src="../assets/u23.png"/>印控仪维护日治</li>
        </ul>
  </div>
</template>

<script>
export default {
    data () {
        return {
            flage : "false"
        }
    },
    methods:{
        Zsystemlog(){
            this.$router.push({name:'Zsystemlog'})
        },
        Zanquanlog(){
            this.$router.push({name:'Zanquanlog'})
        },
        Zzhizhanglog(){
            this.$router.push({name:'Zzhizhanglog'})            
        },
        Zyinkongyilog(){
            this.$router.push({name:'Zyinkongyilog'})                        
        }
    } 
}
</script>

<style scoped>
    .Zanquanleft{
        width: 100%;
        height:100%;
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
        border-bottom: 2px solid #4b4b4b;
        cursor:pointer;
    }
    li:hover{
        border-bottom:2px solid #cc800d;
    }
    .lis{
       border-bottom:2px solid #cc800d; 
    }
    li img{
        margin: 0 15px 0 20px;
        width: 17px;
        height: 17px;
        vertical-align: -2px;
    }
</style>
