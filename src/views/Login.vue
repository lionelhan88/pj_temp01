<script setup lang="ts">
import { reactive, ref, getCurrentInstance } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import myFooter from './footer'
import { useRouter, useRoute } from "vue-router"

const router = useRouter();
const route = useRoute();

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  userName: 't9990001',
  pwd:'1'
})

//================================= 表单校验规则 ====================================
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: '请输入登录账号', trigger: 'blur' },
    { min: 3, max: 15, message: '账号长度必须在3-15个字符内', trigger: 'blur' },
  ],
  pwd: [
    { required: true, message: '请输入登录密码', trigger: 'blur' },
    { min: 1, max: 15, message: '密码长度必须在6-15个字符内', trigger: 'blur' },
  ],
  
})


//================================= axios请求 ====================================
const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;
import { loginAction } from '@/api/apiRequest.ts'

const dialogVisible = ref(false)


//================================= 登录及重置按钮 ====================================
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')

      const { userName, pwd } = ruleForm
      const data = loginAction(ruleForm);
      
      data.then( response => {
        const a = response.data
        console.log("test " + a.code)

        if(a.code == 200 ){
          console.log("yes")
          router.push({ 
            name: "home",
          }); 
        }else{
          dialogVisible.value = true;
          formEl.resetFields()
          console.log("no")
        }
      })

      console.log(data)
     
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
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
        <el-form-item label="账号" prop="userName" >
          <el-input label="inputname" v-model="ruleForm.userName"
            placeholder="请输入登录账号" prefix-icon="el-icon-user">
            console.log(ruleForm.username)
          </el-input>
        </el-form-item>

      <!-- 输入密码-->
         <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password" 
          placeholder="请输入登录账号" prefix-icon="el-icon-lock"/>
        </el-form-item>

        <!-- 登录按钮-->
        <el-button type="success" class="btnLogin" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button type="info" class="btnInfo" @click="resetForm(ruleFormRef)">重置</el-button>
    
      </el-form>
    </div>

    <el-dialog
        v-model="dialogVisible"
        title="登录错误"
        width="30%"
      >
        <span>请输入正确的用户名和密码</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false"
              >确认</el-button
            >
          </span>
        </template>
      </el-dialog>

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






