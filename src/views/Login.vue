
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import myFooter from './footer'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  password:''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入登录账号', trigger: 'blur' },
    { min: 3, max: 15, message: '账号长度必须在3-15个字符内', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入登录密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度必须在6-15个字符内', trigger: 'blur' },
  ],
  
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

</script>

<template>
  
  <div class="login_container">
  
    <div class="login_header">
    上 海 市 建 设 工 程 检 测 信 息 管 理 系 统</div> 
    <div class="header_en">
      Shanghai Construction Engineering Test Information management system <br>
      <br>
    </div>
      <img src="../assets/bg.png" class="inputImg"><img>
      
      <div class="login_box">
      <!-- 登录表单区域 -->
      <el-form class="loginForm"   ref="ruleFormRef" :rules="rules"
      :model="ruleForm" size="formSize">

      <!-- 输入用户名-->
        <el-form-item label="账号" prop="name" >
          <el-input label="inputname" v-model="ruleForm.name"
            placeholder="请输入登录账号" prefix-icon="el-icon-user">
            console.log(ruleForm.username)
          </el-input>
        </el-form-item>

      <!-- 输入密码-->
         <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" 
          placeholder="请输入登录账号" prefix-icon="el-icon-lock"/>
        </el-form-item>

        <!-- 登录按钮-->
        <el-button type="success" class="btnLogin" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button type="info" class="btnInfo" @click="resetForm(ruleFormRef)">重置</el-button>
    
      </el-form>
      
    </div>
        
    

  </div>
</template>

<style lang="scss" scoped>
.login_container {
  height: 100%;
  background-color: rgb(240 255 240);
}

.login_header{
  font-size: 40px;
  font-weight: bold;
  background: rgb(240 255 240);
}

.header_en{
  font-size: 20px;
  background: rgb(240 255 240);
}

.login_box {
  width: 550px;
  height: 400px;
  background: rgb(240 248 255);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-10%, -50%);
  border-radius: 5px;
}

.loginForm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 460px;
}

.btn {
  text-align: center;
}
 
.inputImg{
  display: flex;
  width: 81%;
  overflow: true;
  height: 60%;
}
</style>






