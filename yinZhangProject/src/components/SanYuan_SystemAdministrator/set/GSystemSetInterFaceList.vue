<template>
  <div id="GSystemSetInterFaceList">
      <ul>
          <li>

               <div class="logo">抬头定义:</div>
                <form action="">
                     <input type="text">
                      <br/>
                      字体：<select name="font" id="">
                        <option value=""></option>
                        <option value="">宋体</option>
                      </select>
                      字色：<input type="color">
                      <div>字号：<select name="size" id="">
                        <option value=""></option>
                        <option value="">2</option>
                      </select></div>
                      <label>
                          <input type="checkbox" name="bold"> 加粗
                      </label>
                      <label>
                      <input type="checkbox" name="italic"> 斜体
                      </label>
                      <label>
                      <input type="checkbox" name="undeline"> 下划线
                      </label>

                      <br />
                      <input type="button" value="保存">
                </form>
          </li>
          <li>

            <div class="logo">LOGO定义:</div>
        <form action="">
          抬头图片： <input type="text"><span>尺寸*尺寸</span>
          <br/>
          登陆主页： <input type="text"><span>尺寸*尺寸</span>
          <br/>
          <input type="button" value="保存">
        </form>
          </li>
          <li>
            <div class="colors">主色定义：</div>
            <span class="demonstration"></span>
            <div class="block">
              <el-slider v-model="value1"></el-slider><span>{{ value1 }}</span>
              <el-slider v-model="value2"></el-slider><span>{{ value2 }}</span>
              <el-slider v-model="value3"></el-slider><span>{{ value3 }}</span>
              <div>
                <button class="save">保存</button>
                </div>

            </div>
          </li>
          <li>
              <div class="colors">按钮定义：</div>
              <span class="demonstration"></span>
              <div class="block">
                <el-slider v-model="value4"></el-slider><span>{{ value4 }}</span>
                <el-slider v-model="value5"></el-slider><span>{{ value5 }}</span>
                <el-slider v-model="value6"></el-slider><span>{{ value6 }}</span>
                <div>
                <button class="save">保存</button>
                </div>
              </div>
          </li>
      </ul>
 </div>
</template>

<style lang="scss"> 

   #GSystemSetInterFaceList {
   width: 100%;
   height: 100%;
   min-height: 600px;
   min-width: 1150px;
   background: #fff;
     ul{
      width: 100%;
      height: 100%;
      min-height: 600px;
      li{
        width: 50%;
        height: 300px;
        float: left;
        padding: 20px 100px 0 20px;
        .logo{
          font-size: 20px;
          margin-bottom: 10px;
        }
      }

      li:nth-of-type(2),li:nth-of-type(1){
        form {
            text-align: right;
            [type="text"]{
              width: 300px;
              height: 30px;
              margin-bottom: 20px;
            }
            [type="button"]{
              width: 100px;
              height: 40px;
            }
            span{
              font-size: 12px;
              margin-left: 18px;
            }
        }
      }
      li:nth-of-type(1){
          form{
            [type="text"]{
                  width: 400px;
                 
              }
              select:nth-of-type(1){
                margin-right: 52px;
              }
              div{
                text-align: left;
                padding-left: 30px;
              }
            select ,[type="color"]{
                  width: 150px;
                  height: 30px;
                 margin-bottom: 20px;
              }
              label:nth-of-type(2){
                margin: 0px 120px;
              }
              [type="button"]{
                  margin-top: 20px;
            }
          }
          
      }
      li:nth-of-type(3),li:nth-of-type(4){
        padding: 0px 100px 0 230px;
        .demonstration{
          display: inline-block;
          width: 190px;
          height: 180px;
          background: #ccc;
          position: relative;
          left: -210px;
          top: 50px;
          
        }
        .el-slider__runway{
            width: 80%;
          }
          span{
            position: relative;
            top: -25px;
            left: 230px;
          }
        .colors{
            position: relative;
            left: -210px;
            top: 40px;
            font-size: 20px;
        }
        .block{
        line-height: 10px;
          position: relative;
          top: -140px;
          .save{
            width: 100px;
            height: 40px;
            color: #000;
            margin-top: 10px;
            line-height: 40px;
            text-align:center;
            border: 1px solid;
            position: relative;
            left: 150px;
          }
        }
      }
    }
    
  }
 
</style>

<script>
	export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
      
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
        value6: 0,
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      formatTooltip(val) {
        return val / 200;
      }
    }
  }
</script>