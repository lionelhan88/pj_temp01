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
          <el-form-item label="委托开始日期 :">
            <el-config-provider :locale="locale">
              <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="点击图标选择日期"
                clearable="true"
                :disabledDate="disabledDate"
                :size="size"
              >
              </el-date-picker>
            </el-config-provider>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="委托结束日期 :">
            <el-config-provider :locale="locale">
              <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="点击图标选择日期"
                clearable="true"
                :disabledDate="disabledEndDate"
                :size="size"
              >
              </el-date-picker>
            </el-config-provider>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="检测类型 :">
            <el-select v-model="ognization" clearable placeholder="--请选择--">
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

      <el-form-item label="委托单位 :">
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
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router"

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  name: "",
  id:"",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],

  id: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
});

const router = useRouter();

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      router.push({ 
        path: '/searchTrust/result',
        name: 'test'})
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  formEl.dateValue = "";
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
  left: 50%;
  transform: translate(-50%);
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.resetBtn {
  position: absolute;
  left: 55%;
  transform: translate(-55%);
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
