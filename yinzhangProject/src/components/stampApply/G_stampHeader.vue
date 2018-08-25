<template>
  <div id="G_stampHeader">
        <ul>
            <li>印章管理员</li>
            <li>2018-08-15</li>
            <li>08：23：32</li>
            <li><img src="../../assets/u48.png" class="bg1" /></li>
            <li><img src="../../assets/u42.png" class="bg2" /></li>
        </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #G_stampHeader{
        height: 82px;
        line-height: 82px;
        min-width: 1311px;
        background: #fff;
    }
    ul{
        float: right;
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
