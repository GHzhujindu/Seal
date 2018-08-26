<template>
  <div class="selfTabBarLeft">
        <ul>
            <li :class="{ active: item.isActive }"  v-for="(item,ind) in menus" :key="ind" @click="menusclick(item.path)">
                <img :src="item.img" />{{item.message}}
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
                    message :"用印管理",
                    path : "sealManageList"
                },
                {
                    img : require("@/assets/u7026.png"),
                    message :"用印归档",
                    path : "selArchiveList"
                },
                {
                    img : require("@/assets/u7031.png"),
                    message :"用印日志",
                    path : "selLogList"
                }
            ]
        }
    },
    methods:{
        menusclick(menuspath){
            this.$router.push({path:menuspath});
            
        }
    } 
}
</script>

<style scoped>
    .selfTabBarLeft{
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
