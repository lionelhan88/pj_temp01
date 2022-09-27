<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
      router
    >     

      <el-row>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="委托开始日期 :" prop="startDate">
           
              <el-date-picker
                v-model="ruleForm.startDate"
                type="date"
                placeholder="点击图标选择日期"
                clearable=ture
                :disabledDate="disabledDate"
                :size="size"
              >
              </el-date-picker>
        
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="委托结束日期 :" prop="endDate">
           
              <el-date-picker
                v-model="ruleForm.endDate"
                type="date"
                placeholder="点击图标选择日期"
                clearable=true
                :disabledDate="disabledEndDate"
                :size="size"
              >
              </el-date-picker>
           
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="检测类型 :" prop="orgnization">
            <el-select v-model="ruleForm.ognization" clearable=true placeholder="--请选择--">
              <el-option
                v-for="item in og_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="委托编号 :" prop="id" :rules="rules">
        <el-input v-model="ruleForm.id" placeholder="请输入委托编号" />
      </el-form-item>

      <el-form-item label="委托单位 :" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入委托单位名称"
            />
          </el-form-item>

      <!--搜索按钮-->
      <el-button
        class="submitBtn"
        type="primary"
        @click="submitForm(ruleFormRef)"
        >搜索</el-button
      >
      <!--重置按钮-->
      <el-button class="resetBtn" @click="resetForm(ruleFormRef)"
        >重置</el-button
      >
    </el-form>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, getCurrentInstance } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter, useRoute } from "vue-router"

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  name: "",
  id:"",
  orgnization:"",
  startDate:"",
  endDate:""
});

const rules = reactive<FormRules>({
});

const router = useRouter();
const currentInstance= getCurrentInstance();
const{ $axios } = currentInstance.appContext.config.globalProperties;

import { getRslt } from "@/api/apiRequest.ts"

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const { name, id, orgnization, startDate, endDate } = ruleForm;
      const data = getRslt(ruleForm);
      console.log("submit!");
      console.log("data" , data);

      router.push({ 
        name: 'result',
        query: { data },})
    } else {
      console.log("error submit!", fields);
    }
  });
};


const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  
};

const ognization = ref("");
const og_options = [
  {
    value: "自主商户",
    label: "自主商户",
  },
  {
    value: "市局抽检",
    label: "市局抽检",
  },
  {
    value: "区局抽检",
    label: "区局抽检",
  },
  {
    value: "街道抽检",
    label: "街道抽检",
  },
  {
    value: "其他",
    label: "其他",
  },
];

const startDate = ref("");
const endDate = ref("");

const disabledDate = (time: Date) => {
  return time.getTime() + 3600 * 1000 * 24 < Date.now();
};

const disabledEndDate = (time: Date) => {
  return time.getTime() < Date.now();
};
</script>

<style scoped lang="scss">
.submitBtn {
  position: absolute;
  left: 48%;
  transform: translate(-48%);
  align-items: center;
  justify-content: center;
  margin-top: 16px;

}

.resetBtn {
  position: absolute;
  left: 56%;
  transform: translate(-56%);
  align-items: center;
  justify-content: center;
  margin-top: 16px;

}
</style>
