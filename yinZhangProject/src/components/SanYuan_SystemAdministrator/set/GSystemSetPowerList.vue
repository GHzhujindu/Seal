<template>
  <div id="GSystemSetPowerList">
   	<div class="files">授权文件:</div>
  	<el-upload
	  class="upload-demo"
	  ref="upload"
	  action=""
	  :on-preview="handlePreview"
	  :on-remove="handleRemove"
	  :file-list="fileList"
	  :auto-upload="false">
	  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
	  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
	</el-upload>
 </div>
</template>

<style lang="scss" scoped> 

   #GSystemSetPowerList {
     width: 100%;
     height: 100%;
     min-height: 600px;
     background: #fff;
      padding: 100px 150px 0 100px;
      .files{
      	font-size: 24px;
      	margin-bottom: 20px;
      }
      
  }
 
</style>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>