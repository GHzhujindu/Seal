<template>
  <div id="GSystemUnitNewFileList">
     <el-form :model="unitForm2" status-icon :rules="rules2" ref="unitForm2" label-width="200px" class="demo-ruleForm">

       
      <el-form-item label="单位名称：" >
          <el-input v-model.number="unitForm2.unitName"  placeholder=""></el-input>
        </el-form-item>
      <el-form-item label="单位编码：" >
        <el-input v-model="unitForm2.unitCode" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="电子信箱：" >
        <el-input v-model="unitForm2.unitEmail" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="上级监督：" >
           <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
      </el-select>
      </el-form-item>

        <el-form-item label="单位电话：" >
          <el-input v-model.number="unitForm2.unitTel"  placeholder=""></el-input>
        </el-form-item>
       
         <el-form-item label="单位地址：" >
          <el-input v-model.number="unitForm2.unitAddress"  placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="备注信息：" >
        <el-input v-model="unitForm2.unitInfo" placeholder=""></el-input>
      </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button @click="resetForm('unitForm2')">取消</el-button>
        </el-form-item>
  </el-form>
 </div>
</template>

<style lang="scss"> 

   #GSystemUnitNewFileList {
     width: 100%;
     height: 100%;
     min-width: 600px;
     min-height: 600px;
     background: #fff;
     form{
      padding: 100px 150px 0 100px;

     }
      .el-select{
      width: 100%;
      }

      
  }
 #GSystemUnitNewFileList form>div:last-of-type{
 margin-top: 80px;
 text-align:right;
 }
 #GSystemUnitNewFileList form .el-input__inner{
 height:30px;
 line-height: 30px;
 }
 #GSystemUnitNewFileList form .el-form-item{
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
        this.$emit('unitList')
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