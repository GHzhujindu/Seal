<template>
	 <div id="GSystemUnitList">
            <el-row>
              
              <el-button type="info" plain v-show="flag" @click="options">{{ name }}</el-button>
              
          </el-row>
          <g-system-unit-new-file-list v-show="!flag" @unitList = "options"/>
       </div>

</template>

<style scoped lang="scss">
	 #GSystemUnitList{
	    width: 100%;
	    height: 30px;
	    text-align:right;
	    padding-right: 20px;
		    button{
			    width: 155px;
			    height: 40px;
			    background:#fff;
			  	color:#000;
			    
			}
	}
	 
</style>
<script>
import GSystemUnitNewFileList from './GSystemUnitNewFileList'

	export default {
	  data () {
	    return {
	    	flag:true,
	    	name:"新建单位"
	    }
	  },
	  components: { 
	  	GSystemUnitNewFileList
	   },
	   methods:{
	   	options(){
	   		return this.flag = !this.flag;
	   	}
	   }
}
</script>