<template>
  <div id="GSystemSetPasswordList">
     <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="200px" class="demo-ruleForm">

       
      <el-form-item label="口令长度" >
          <el-input v-model="ruleForm2.len"  placeholder="1"></el-input>
        </el-form-item>

        <el-form-item label="包含字符" >
             <el-select v-model="value1" placeholder="请选择">
      <el-option
        v-for="im in options1"
        :key="im.value"
        :label="im.label"
        :value="im.value"
        :disabled="im.disabled">
    </el-option>
  </el-select>
        </el-form-item>
        <el-form-item label="包含数字" >
           <el-select v-model="value2" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
        </el-form-item>
         <el-form-item label="鉴别次数" >
          <el-input v-model.number="ruleForm2.cishu"  placeholder="3"></el-input>
        </el-form-item>
        <el-form-item label="登陆失效时间：(单位：分钟)" >
        <el-input v-model="ruleForm2.time" placeholder="10"></el-input>
      </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">确定</el-button>
           <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
  </el-form>
 </div>
</template>

<style lang="scss"> 

   #GSystemSetPasswordList {
     width: 100%;
     height: 100%;
     min-height: 600px;
     background: #fff;
      padding: 100px 150px 0 100px;

      .el-select{
       width:100%;
      }
  }
 #GSystemSetPasswordList form>div:last-of-type{
 margin-top: 80px;
 text-align:right;
 }
 #GSystemSetPasswordList form .el-input__inner{
 height:30px;
 line-height: 30px;
 }
 #GSystemSetPasswordList form .el-form-item{
 margin-bottom: 0;
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
      options1: [{
          value: '选项1',
          label: '糕'
        }, {
          value: '选项2',
          label: '奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
       options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: '',
        value1: '',
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
          len:'',
          zifu:'',
          num:'',
          cishu:'',
          time:''
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
      }
    }
  }
</script>