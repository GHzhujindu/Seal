<template>
  <div class="Zanquanleft">
        <ul>
            <li v-for="(item,ind) in menus" :key="ind" @click="Zmenusclick(item.path)">
                <img :src="{item,img}" />{{item.message}}
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    data () {
        return {
            menus : [
                {
                    img : require("@/assets/u13.png"),
                    message :"系统管理员日志",
                    path : "Zanquanlog"
                },
                {
                    img : require("@/assets/u18.png"),
                    message :"安全保密员日志",
                    path : "Zsystemlog"
                },
                {
                    img : require("@/assets/u23.png"),
                    message :"制作印章人日志",
                    path : "Zzhizhanglog"
                },
                {
                    img : require("@/assets/u13.png"),
                    message :"印控仪维护日治",
                    path : "Zyinkongyilog"
                }
            ]
        }
    },
    methods:{
        Zmenusclick(menuspath){
            this.$routre.push({path:menuspath})
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
