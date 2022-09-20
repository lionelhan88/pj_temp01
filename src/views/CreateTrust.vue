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
          <el-form-item label="委托日期 :" prop="entrustDate">
            <el-config-provider :locale="locale">
              <el-date-picker
                v-model="ruleForm.entrustDate"
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
          <el-form-item label="委托开始日期 :" prop="entrustStartDate">
            <el-config-provider :locale="locale">
              <el-date-picker
                v-model="ruleForm.entrustStartDate"
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
          <el-form-item label="委托结束日期 :" prop="entrustEndDate">
            <el-config-provider :locale="locale">
              <el-date-picker
                v-model="ruleForm.entrustEndDate"
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
          <el-form-item label="检测类型 :" prop="orgnization">
            <el-select
              v-model="ruleForm.orgnization"
              clearable
              placeholder="--请选择--"
            >
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
          <el-form-item label="设施类型 :" prop="eqpType">
            <el-select
              v-model="ruleForm.eqpType"
              clearable
              placeholder="--请选择--"
            >
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

      <el-form-item label="检测方法 :" >
        <el-select v-model="testOption" clearable placeholder="--请选择--">
          <el-option
            v-for="item in test_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="委托单位 :" prop="client">
        <el-input v-model="ruleForm.client" placeholder="请输入委托单位名称" />
      </el-form-item>

      <el-form-item label="设计单位 :" prop="designCompany">
        <el-input
          v-model="ruleForm.designCompany"
          placeholder="请输入设计单位名称"
        />
      </el-form-item>

      <el-form-item label="监理单位 :" prop="supervisionCompany">
        <el-input
          v-model="ruleForm.supervisionCompany"
          placeholder="请输入监理单位名称"
        />
      </el-form-item>

      <el-form-item label="牌面底标高(m):" prop="height">
        <el-input
          v-model.number="ruleForm.height"
          placeholder="请输入牌面高度"
        />
      </el-form-item>

      <el-form-item label="检测面积(㎡) :" prop="square">
        <el-input
          v-model.number="ruleForm.square"
          placeholder="请输入检测面积"
        />
      </el-form-item>

      <el-form-item label="检测项目:" >
        <el-tree
          ref="treeRef"
          :data="checkList"
          show-checkbox
          default-expand-all
          node-key="id"
          highlight-current
       
          check-on-click-node
     
        />

        
      </el-form-item>

      <!--提交按钮-->
      <el-button
        class="submitBtn"
        type="primary"
        @click="submitForm(ruleFormRef)"
        >创建委托</el-button
      >
      <!--页面重置按钮-->
      <el-button class="resetBtn" @click="resetForm(ruleFormRef)"
        >重置页面</el-button
      >

      <!--检测项目重置按钮-->
      <el-button class="resetCheckListBtn" @click="resetChecked(ruleFormRef)"
        >重置检测项目</el-button
      >
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules, ElTree } from "element-plus";
import type Node from "element-plus/es/components/tree/src/model/node";

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  entrustDate: "2022-09-30",
  entrustStartDate: "2022-09-30",
  entrustEndDate: "2022-09-30",
  orgnization: "asd",
  eqpType: "asd",
  client: "asd",
  designCompany: "asd",
  supervisionCompany: "asd",
  height: 12,
  square: 23,
  testItemsId: [],
});

const rules = reactive<FormRules>({
  entrustDate: [
    {
      required: true,
      message: "请选择委托日期",
      trigger: "blur",
    },
  ],
  entrustStartDate: [
    {
      required: true,
      message: "请选择委托开始日期",
      trigger: "blur",
    },
  ],
  entrustEndDate: [
    {
      required: true,
      message: "请选择委托结束日期",
      trigger: "blur",
    },
  ],
  orgnization: [
    {
      required: true,
      message: "请选择检测类型",
      trigger: "blur",
    },
  ],
  eqpType: [
    {
      required: true,
      message: "请选择设施类型",
      trigger: "blur",
    },
  ],
  client: [
    {
      required: true,
      message: "请输入正确的委托单位名称",
      trigger: "blur",
    },
  ],
  designCompany: [
    {
      required: true,
      message: "请输入正确的设计单位名称",
      trigger: "blur",
    },
  ],
  supervisionCompany: [
    {
      required: true,
      message: "请输入正确的监理单位名称",
      trigger: "blur",
    },
  ],
  height: [
    {
      required: true,
      type: "number",
      message: "请输入正确的牌面底高度",
      trigger: "blur",
    },
  ],
  square: [
    {
      required: true,
      type: "number",
      message: "请输入正确的检测面积",
      trigger: "blur",
    },
  ],
  testItemsId: [
    {
      required: true,
      type: "number",
      message: "请选择检测项目",
      trigger: "blur",
    },
  ]
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      
      console.log("submit!" + formEl);
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

interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}

const treeRef = ref<InstanceType<typeof ElTree>>();

const resetChecked = () => {
  treeRef.value!.setCheckedKeys([], false);
};

const getCheckedKeys = () => {
  console.log(treeRef.value!.getCheckedKeys(false))
}

const checkList: Tree[] = [
  {
    id: 1,
    label: "基础或被依附体",
    children: [
      {
        id: 7,
        label: "外观状况",
        children: [],
      },
      {
        id: 8,
        label: "混凝土抗压强度",
        children: [],
      },
    ],
  },
  {
    id: 2,
    label: "结构构件",
    children: [
      {
        id: 9,
        label: "构件几何尺寸",
        children: [],
      },
      {
        id: 10,
        label: "构件变形",
        children: [
          {
            id: 25,
            label: "垂直度",
            children: [],
          },
          {
            id: 26,
            label: "柱身弯曲",
            children: [],
          },
          {
            id: 27,
            label: "挠度",
            children: [],
          },
          {
            id: 28,
            label: "平面侧弯",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "构架连接",
    children: [
      {
        id: 11,
        label: "结构主体与基础或被依附体连接",
        children: [
          {
            id: 29,
            label: "连接状况",
            children: [],
          },
          {
            id: 30,
            label: "后置锚栓抗拉拔",
            children: [],
          },
          {
            id: 31,
            label: "锚固螺栓拧紧扭矩",
            children: [],
          },
        ],
      },
      {
        id: 12,
        label: "结构构件连接",
        children: [
          {
            id: 32,
            label: "连接状况",
            children: [],
          },
          {
            id: 33,
            label: "法兰盘结合面状况",
            children: [],
          },
          {
            id: 34,
            label: "连接螺栓拧紧扭矩",
            children: [],
          },
        ],
      },
      {
        id: 13,
        label: "焊缝",
        children: [
          {
            id: 35,
            label: "焊缝外观",
            children: [],
          },
          {
            id: 36,
            label: "焊缝质量（超声波探伤）",
            children: [],
          },
          {
            id: 37,
            label: "焊缝质量（磁粉探伤）",
            children: [],
          },
          {
            id: 38,
            label: "焊缝质量（渗透探伤）",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "面板及围护",
    children: [
      {
        id: 14,
        label: "面板、围护及其安装质量",
        children: [],
      },
      {
        id: 15,
        label: "灯布、扎绳杆及其固定质量",
        children: [],
      },
      {
        id: 16,
        label: "显示单元及其固定质量",
        children: [],
      },
    ],
  },
  {
    id: 5,
    label: "结构防腐",
    children: [
      {
        id: 17,
        label: "锈蚀状况",
        children: [],
      },
      {
        id: 18,
        label: "防腐涂层厚度",
        children: [],
      },
      {
        id: 19,
        label: "涂层附着力",
        children: [],
      },
    ],
  },
  {
    id: 6,
    label: "电气照明及防雷装置",
    children: [
      {
        id: 20,
        label: "电气供配电及控制装置",
        children: [
          {
            id: 39,
            label: "电气控制箱（柜）供配电容量匹配",
            children: [],
          },
          {
            id: 40,
            label: "箱（柜）内电器设置规范性",
            children: [],
          },
          {
            id: 41,
            label: "供配电及控制箱（柜）接地型式",
            children: [],
          },
          {
            id: 42,
            label: "绝缘电阻",
            children: [],
          },
          {
            id: 43,
            label: "接地电阻",
            children: [],
          },
          {
            id: 44,
            label: "漏电保护装置性能",
            children: [],
          },
        ],
      },
      {
        id: 21,
        label: "线缆",
        children: [
          {
            id: 45,
            label: "供配电线缆设置状况",
            children: [],
          },
        ],
      },
      {
        id: 22,
        label: "灯具",
        children: [
          {
            id: 46,
            label: "安装状况",
            children: [],
          },
          {
            id: 47,
            label: "线缆绝缘保护",
            children: [],
          },
          {
            id: 48,
            label: "不带电金属体接地状况",
            children: [],
          },
        ],
      },
      {
        id: 23,
        label: "接地电阻",
        children: [],
      },
      {
        id: 24,
        label: "防雷装置",
        children: [
          {
            id: 49,
            label: "浪涌保护器",
            children: [],
          },
          {
            id: 50,
            label: "电气连通性",
            children: [],
          },
          {
            id: 51,
            label: "防雷接地电阻",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 52,
    label: "结构复核",
    children: [],
  },
];
</script>

<style scoped lang="scss">
.submitBtn {
  position: absolute;
  left: 24%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.resetBtn {
  position: absolute;
  left: 48%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.resetCheckListBtn{
  position: absolute;
  left: 64%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.el-tree {
  width: 100%;
  overflow: scroll;
  height: 320px;
  ::v-deep .el-tree-node__children {
    display: flex;
    flex-direction: column;
    .el-tree-node__children {
      display: flex;
      flex-direction: row;
      .el-tree__children {
        display: flex;
        flex-direction: column;
      }
      //color: #909399;
    }
  }
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

<!-- 

        
      </el-row>

     

       -->
