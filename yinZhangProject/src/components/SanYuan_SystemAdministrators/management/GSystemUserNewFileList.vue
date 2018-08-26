<template>
  <div id="GSystemUserNewFileList">
     <el-form :model="unitForm2" status-icon :rules="rules2" ref="unitForm2" label-width="200px" class="demo-ruleForm">

       
      <el-form-item label="*所属单位：" >
          <el-input v-model.number="unitForm2.unitName"  placeholder=""></el-input>
        </el-form-item>
      <el-form-item label="*用户名：" >
        <el-input v-model="unitForm2.unitCode" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="*姓名：" >
        <el-input v-model="unitForm2.unitEmail" placeholder=""></el-input>
      </el-form-item>
     
      </el-form-item>

        <el-form-item label="*手机号：" >
          <el-input v-model.number="unitForm2.unitTel"  placeholder=""></el-input>
        </el-form-item>
       
         <el-form-item label="*单位邮箱：" >
          <el-input v-model.number="unitForm2.youxiang"  placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="单位地址：" >
          <el-input v-model.number="unitForm2.unitAddress"  placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="备注信息：" >
        <el-input v-model="unitForm2.unitInfo" placeholder=""></el-input>
      </el-form-item>
      <div class="password">
      *密码：<input type="password"><label><input type="checkbox" name="password">默认密码</label>
      </div>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button @click="resetForm('unitForm2')">取消</el-button>
        </el-form-item>
  </el-form>
 </div>
</template>

<style lang="scss"> 

   #GSystemUserNewFileList {
     width: 100%;
     height: 100%;
     min-height: 600px;
     background: #fff;
      padding: 100px 150px 0 100px;
      .el-select{
      width: 100%;
      }
      .password{
      font-size: 14px;
      color:#606266;
      padding-left: 135px;
        [type="password"]{
            width: 400px;
            height: 30px;
            margin:  5px 16px;
            border:1px solid #dcdfe6;
            border-radius: 4px;
        }
       [type="checkbox"] {
            vertical-align: -2px;
        }
      }
      
  }
 #GSystemUserNewFileList form>div:last-of-type{
 margin-top: 80px;
 text-align:right;
 }
 #GSystemUserNewFileList form .el-input__inner{
 height:30px;
 line-height: 30px;
 }
 #GSystemUserNewFileList form .el-form-item{
 margin-bottom: 0;
 }
</style>
<script>
export default {
    data() {
      var unitTelNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入电话号码'));
          } else {
            if (value.length != 11) {
              callback(new Error('电话号码位数不正确'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var unitEmails = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮件'));
        } else {
          if (this.ruleForm2.unitEmail !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
     
      return {
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
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
        value: '',
        unitForm2: {
          unitName: '',
          unitCode: '',
          unitEmail: '',
          unitTop: '',
          unitTel: '',
          unitAddress: '',
          unitInfo: ''
        },
        rules2: {
          unitEmail: [
            { validator: unitTelNum, trigger: 'blur' }
          ],
          unitTel: [
            { validator: unitEmails, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
    save(){
       this.$emit("userList")
    },
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