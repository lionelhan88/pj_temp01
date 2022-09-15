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
    >
      <el-form-item label="委托编号 :">
        <el-input
          v-model="ruleForm.name"
          placeholder="完成以下表单后，由系统自动生成"
          disabled
        />
      </el-form-item>

      <el-row>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="委托日期 :" required>
            <el-config-provider :locale="locale">
              <el-date-picker
                v-model="dateValue"
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

        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="委托开始日期 :" required>
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
          <el-form-item label="委托结束日期 :" required>
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
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="检测类型 :" required>
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

        <el-col :span="8">
          <el-form-item label="设施类型 :" required>
            <el-select v-model="eqpType" clearable placeholder="--请选择--">
              <el-option
                v-for="item in eqp_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="检测方法 :" required>
        <el-select v-model="testOption" clearable placeholder="--请选择--">
          <el-option
            v-for="item in test_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="委托单位 :" required >
        <el-input v-model="ruleForm.name" placeholder="请输入委托单位名称" />
      </el-form-item>

      <el-form-item label="设计单位 :" required>
        <el-input
          v-model="ruleForm.designOG"
          placeholder="请输入设计单位名称"
        />
      </el-form-item>

      <el-form-item label="监理单位 :" required>
        <el-input
          v-model="ruleForm.superviseOG"
          placeholder="请输入监理单位名称"
        />
      </el-form-item>

      <el-form-item label="牌面底标高(m):" required>
        <el-input v-model="ruleForm.height" placeholder="请输入牌面高度" />
      </el-form-item>

      <el-form-item label="检测面积(㎡) :" required>
        <el-input v-model="ruleForm.square" placeholder="请输入检测面积" />
      </el-form-item>

      <el-form-item label="检测项目:" required>
        <el-input v-model="ruleForm.square" placeholder="请输入检测面积" />
      </el-form-item>

      <!--提交按钮-->
      <el-button
        class="submitBtn"
        type="primary"
        @click="submitForm(ruleFormRef)"
        >Create</el-button
      >
      <!--重置按钮-->
      <el-button class="resetBtn" @click="resetForm(ruleFormRef)"
        >Reset</el-button
      >
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  name: "",
  designOG: "",
  superviseOG: "",
  height: "",
  square: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
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

const dateValue = ref("");

const disabledDate = (time: Date) => {
  return time.getTime() + 3600 * 1000 * 24 < Date.now();
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

const eqpType = ref("");
const eqp_options = [
  {
    value: "户外招牌",
    label: "户外招牌",
  },
  {
    value: "户外广告",
    label: "户外广告",
  },
];

const startDate = ref("");
const endDate = ref("");
const disabledEndDate = (time: Date) => {
  return time.getTime() < Date.now();
};

const testOption = ref("");
const test_options = [
  {
    value: "placeholder1",
    label: "placeholder1",
  },
  {
    value: "placeholder2",
    label: "placeholder2",
  },
  {
    value: "placeholder3",
    label: "placeholder3",
  },
  {
    value: "placeholder4",
    label: "placeholder4",
  },
  {
    value: "placeholder5",
    label: "placeholder5",
  },
];
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

<!-- ================================================================ -->
<!-- <el-form-item label="委托编号:">
        <el-input
          v-model="ruleForm.name"
          placeholder="完成以下表单后，由系统自动生成"
          disabled
        />
      </el-form-item>

      <el-form-item label="委托日期:" required>
        <el-date-picker
          v-model="dateValue"
          type="date"
          placeholder="点击图标选择日期"
          clearable="true"
          :size="size"
        />
      </el-form-item>

      <el-form-item label="委托单位:" required overflow="false">
        <el-input v-model="ruleForm.name" placeholder="请输入委托单位名称" />
      </el-form-item>

      <el-form-item label="检测类型:" required>
        <el-select v-model="ognization" clearable placeholder="--请选择--">
          <el-option
            v-for="item in og_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="设施类型:" required>
        <el-select v-model="eqpType" clearable placeholder="--请选择--">
          <el-option
            v-for="item in eqp_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="设计单位:">
        <el-input
          v-model="ruleForm.designOG"
          placeholder="请输入设计单位名称"
        />
      </el-form-item>

      <el-form-item label="监理单位:">
        <el-input
          v-model="ruleForm.superviseOG"
          placeholder="请输入监理单位名称"
        />
      </el-form-item>

      <el-form-item label="牌面底标高(m):">
        <el-input v-model="ruleForm.height" placeholder="请输入牌面高度" />
      </el-form-item>

      <el-form-item label="检测面积(㎡):">
        <el-input v-model="ruleForm.square" placeholder="请输入检测面积" />
      </el-form-item>

      <el-form-item label="检测开始时间:" required>
        <el-date-picker
          v-model="dateValue"
          type="date"
          placeholder="点击图标选择日期"
          clearable="true"
          :size="size"
        />
      </el-form-item>

      <el-form-item label="检测结束时间:" required>
        <el-date-picker
          v-model="dateValue"
          type="date"
          placeholder="点击图标选择日期"
          clearable="true"
          :disabled-date="disabledDate"
          :size="size"
        />
      </el-form-item> -->
