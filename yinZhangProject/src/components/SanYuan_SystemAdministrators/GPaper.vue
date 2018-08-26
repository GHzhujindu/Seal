<template>
  <div id="GPaper">
       <ul>
       		<li>上一页</li>
       		<li class="paperNow">当前1/12</li>
       		<li>下一页</li>
       </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #GPaper{
    	width: 100%;
    }
   #GPaper > ul {
	   width: 300px;
	   height: 50px;
	   line-height: 56px;
	   padding: 0 15px;
	   margin: 0 auto;
   }
   #GPaper > ul > li{
	   float: left;
   }
   .paperNow{
   margin: 0 50px;
   }
</style>
