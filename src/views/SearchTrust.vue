<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="ruleForm"
      :size="formSize"
      status-icon
      router
    >     

      <el-row>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="委托开始日期 :" prop="entrustmentStartDate">

              <el-date-picker
                v-model="ruleForm.entrustmentStartDate"
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
          <el-form-item label="委托结束日期 :" prop="entrustmentEndDate">
           
              <el-date-picker
                v-model="ruleForm.entrustmentEndDate"
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
          <el-form-item label="检测类型 :" prop="detectionType">
            <el-select v-model="ruleForm.detectionType" clearable=true placeholder="--请选择--">
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

      <el-form-item label="委托编号 :" prop="entrustmentNo" >
        <el-input v-model.number.trim="ruleForm.entrustmentNo" placeholder="请输入委托编号" />
      </el-form-item>

      <el-form-item label="委托单位 :" prop="client">
            <el-input
              v-model="ruleForm.client"
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

    <el-dialog
      v-model="dialogVisible"
      title="注意"
      width="30%"
    >
      <div class="content">委托编号或者委托单位不能为空</div>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"> 确定</el-button>
        </span>
      </template>
    </el-dialog>
    
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, getCurrentInstance } from "vue";
import type { FormInstance, FormRules, ElMessageBox } from "element-plus";
import { useRouter, useRoute } from "vue-router"

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const dialogVisible = ref(false);
const router = useRouter();

const ruleForm = reactive({
  client: "",
  entrustmentNo: "",
  entrustmentStartDate: "",
  entrustmentEndDate: "",
  detectionType: null,
});

const rules = reactive<FormRules>({
//  entrustmentNo: [
  //  {
    //  type: "number",
      //message: "委托编号为纯数字",
//      trigger: "blur",
//    },
//  ],
});


const submitForm = async (formEl: FormInstance | undefined) => {

  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const { client, entrustmentNo, entrustmentStartDate, entrustmentEndDate, 
              detectionType  } = ruleForm;
              
      if(entrustmentNo=="" && client==""){
        dialogVisible.value = true;
      }else{
        console.log("submit!");
        router.push({ 
          name: 'result',
          query: { 
            client: ruleForm.client.trim(),
            entrustmentNo: ruleForm.entrustmentNo.trim(),
            entrustmentStartDate: ruleForm.entrustmentStartDate,
            entrustmentEndDate: ruleForm.entrustmentEndDate,
            detectionType: ruleForm.detectionType,
      
           },})
      }

      

     
      
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
    value: 1,
    label: "商户自主",
  },
  {
    value: 2,
    label: "市局抽检",
  },
  {
    value: 3,
    label: "区局抽检",
  },
  {
    value: 4,
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
  margin-top: 96px;

}

.resetBtn {
  position: absolute;
  left: 56%;
  transform: translate(-56%);
  align-items: center;
  justify-content: center;
  margin-top: 96px;

}

.ruleForm{
  margin: 24px;
}

.el-form-item{
  margin-top: 40px;
}

.content{
  letter-spacing: 1px;
}
</style>

