<template>
  <div id="GHeader">
        <div class="GHeader_left">
            <img :src="require('@/assets/u46.png')" />
        </div>
        <ul>
            <li>签章管理员</li>
            <li>2018-08-15</li>
            <li>08：23：32</li>
            <li><img :src="require('@/assets/u48.png')" class="bg1"></img></li>
            <li><img :src="require('@/assets/u42.png')" class="bg2"></img></li>
        </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #GHeader{
        width:100%;
        height: 82px;
    }
    .GHeader_left{
        width:175px;
        height:82px;
        background:rgb(255,102,12);
        display:inline-block;
        img{
            width:175px;
            height:82px;
        }
    }
    ul{
        height:82px;
        line-height:82px;
        display:inline-block;
        float:right;
    }
    li{
        float: left;
        margin-right: 25px;
    }
    li> span{
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid;
        vertical-align: -3px;
    }
    li img{
    vertical-align: middle;
    }
    li .bg1{
        width: 27px;
        height: 27px;
    }
    li .bg2{
        width: 23px;
        height: 23px;
    }
</style>
