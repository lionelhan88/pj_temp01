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
      <el-row>
        <el-col :span="8">
          <el-form-item label="委托编号 :" style="width:340px">
            <el-input
              v-model="ruleForm.entrustmentInfoVo.entrustmentNo"
              placeholder="完成表单后，系统自动生成"
              disabled
            />
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="设施名称:" prop="disabledItem">
            <el-input v-model="ruleForm.disabledItem"  style="width:220px" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-button type="primary" @click="searchFacility" style="margin-left:250px"
            >选择设施</el-button
          >
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="设施编号:" prop="disabledItem" >
            <el-input v-model="ruleForm.disabledItem" style="width:220px" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="设施样式:" prop="disabledItem" >
            <el-input v-model="ruleForm.disabledItem" style="width:220px" disabled/>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="行政区域:" prop="disabledItem" >
            <el-input v-model="ruleForm.disabledItem" style="width:220px" disabled />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="店铺名称:" prop="disabledItem" >
            <el-input v-model="ruleForm.disabledItem" style="width:220px" disabled/>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="设施地点:" prop="disabledItem" >
            <el-input v-model="ruleForm.disabledItem" style="width:220px" disabled/>
          </el-form-item>
        </el-col>

        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="委托日期 :" prop="entrustmentInfoVo.entrustDate">
            <el-config-provider :locale="locale">
              <el-date-picker
                v-model="ruleForm.entrustmentInfoVo.entrustDate"
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
      </el-row>

      <el-row>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="检测开始日期 :" prop="entrustStartDate">
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
          <el-form-item label="检测结束日期 :" prop="entrustEndDate">
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

        <el-col :span="8">
          <el-form-item label="检测类型 :" prop="entrustmentInfoVo.detectionType">
            <el-select
              v-model="ruleForm.entrustmentInfoVo.detectionType"
              clearable
              placeholder="--请选择--"
            >
              <el-option
                v-for="item in detectionType_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="设施类型 :" prop="eqpType">
            <el-select
              v-model="ruleForm.eqpType"
              clearable=true
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

        <el-col :span="8">
          <el-form-item label="检测方法 :" prop="testMethodsId" >
            <el-select
              v-model="ruleForm.testMethodsId"
              multiple
              collapse-tags
              collapse-tags-tooltip
              placeholder="请选择"
              style="width: 240px"
              @change="handleSelect" 
            >
              <el-checkbox-group v-model="ruleForm.testMethodsId">
              
              <el-option
                v-for="item in test_options"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
               
                </el-option>
              </el-checkbox-group>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12" >
          <el-form-item label="委托单位 :"  prop="entrustmentInfoVo.client">
            <el-input v-model="ruleForm.entrustmentInfoVo.client" placeholder="请输入委托单位名称" />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="监理单位 :" prop="supervisionCompany">
            <el-input
              v-model="ruleForm.supervisionCompany"
              placeholder="请输入监理单位名称"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="设计单位 :" prop="designCompany">
            <el-input
              v-model="ruleForm.designCompany"
              placeholder="请输入设计单位名称"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="施工单位 :" prop="disabledItem">
            <el-input
              v-model="ruleForm.disabledItem"
              disabled 
            />
          </el-form-item>
        </el-col>
      </el-row>

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

      <el-form-item label="检测项目:" prop="testItemsId">
        <el-tree
          ref="treeRef"
          :data="checkList"
          show-checkbox
          default-expand-all
          node-key="id"
          highlight-current
          check-on-click-node
          v-model="ruleForm.testItemsId"
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

  <!-- 重置页面弹窗 -->
  <el-dialog
      v-model="dialogVisible"
      title="重置页面"
      width="30%"
    >
      <span>确认要将当前页面所有已经输入的信息清空吗？</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleClick(ruleFormRef)"
            >确认</el-button>
          <el-button  @click="dialogVisible = false"
            >取消</el-button>
        </span>
      </template>
    </el-dialog>

</template>



<script lang="ts" setup>
import { reactive, ref, getCurrentInstance } from "vue";
import type { FormInstance, FormRules, ElTree, ElMessageBox } from "element-plus";
import type Node from "element-plus/es/components/tree/src/model/node";
import { useRouter, useRoute } from "vue-router"


const router = useRouter();
const route = useRoute();
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const dialogVisible = ref(false);
const detectionType = ref();
const eqpType = ref("");
const testMethodsId = ref([]);
const treeRef = ref<InstanceType<typeof ElTree>>();

const startDate = ref("");
const endDate = ref("");
const dateValue = ref("");
let isIndeterminate = 'false';

interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}


const ruleForm = reactive({

  entrustStartDate: "2022-09-30 01:01:01",
  entrustEndDate: "2022-09-30 01:01:01",
  orgnization: "asd",
  eqpType: "asd",
  designCompany: "asd",
  supervisionCompany: "asd",
  height: 12,
  square: 1,
  testItemsId: [2,3,1,4],
  testMethodsId: [1,2,3,4],
  facilityNo: "312321",
  facilityName: "afasf",
  facilityCategory: 12,
  districtCode:"12321",
  constructionCopmany:"asdfa",
  detailedAddress:"adsfas",
  shopName:"123",
  entrustmentInfoVo:{
    client: "asd",
    detectionType:1,
    entrustmentNo: "",
    entrustDate: "2022-09-30 01:01:01",
  }
  
});


//=================================== 网络请求 ===========================================
const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;
import { getFacilities, createEntrust } from '@/api/apiRequest.ts'

const searchFacility = () => {
  const { square } = ruleForm
  const data = getFacilities(ruleForm);
  router.push({ 
    name: 'searchFacilities',
    query: { data },})
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ruleForm.testItemsId = treeRef.value!.getCheckedKeys(false);
      const { client, entrustmentNo, entrustDate, detectionType } = ruleForm.entrustmentInfoVo;
      const { entrustStartDate, entrustEndDate,
              orgnization, eqpType,  designCompany, supervisionCompany, height,
              square, testItemsId, testMethodsId, facilityNo , facilityName, facilityCategory,
              districtCode, constructionCopmany, detailedAddress, shopName } = ruleForm;
      const data = createEntrust(ruleForm);
      console.log("submit! " + ruleForm.testItemsId );

    }else {
      console.log("error submit!", fields);
    }
  });
};


//=================================== 点击事件 ===========================================


const resetForm = (formEl: FormInstance | undefined) => {
  dialogVisible.value = true;
};

const handleClick = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  dialogVisible.value = false;
  formEl.resetFields();
  formEl.testMethodsId = "--请选择--"
  formEl.dateValue = "";
}


const handleSelect = () => {
    const checkedCount = value.length;
		testMethodsId = ref(value);
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length;
}


const resetChecked = () => {
  treeRef.value!.setCheckedKeys([], false);
};

const getCheckedKeys = () => {
  console.log(treeRef.value!.getCheckedKeys(false))
}

//=================================== 日期规则 ===========================================

const disabledEndDate = (time: Date) => {
  return time.getTime() < Date.now();
};

const disabledDate = (time: Date) => {
  return time.getTime() + 3600 * 1000 * 24 < Date.now();
};

//=================================== 表单规则 ===========================================


const rules = reactive<FormRules>({
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
  ],

  disabledItem: [
    {
      required: false,
      message: "请选择设施",
      trigger: "blur",
    },
  ],

  entrustmentInfoVo: {
    client: [
      {required: true, message: "请输入正确的委托单位", trigger: 'blur'},
    ],

    detectionType: [
      {required: true, message: "请选择检测类型", trigger: 'blur'},
    ],

    entrustDate: [
      {required: true, message: "请选择委托日期", trigger: 'blur'},
    ],
  },

  testMethodsId: {
    required: true, message:"请选择校验方法", trigger: 'blur',
  },

  testItemsId: {
    required: true, message:"请选择校验方法", trigger: 'blur',
  },
  
});

//=================================== 各类选项 ===========================================

const detectionType_options = [
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
    label: "局局抽检",
  },
  {
    value: 4,
    label: "街道抽检",
  },
  {
    value: 5,
    label: "其他",
  },
]

const eqp_options = [
  {
    value: 1,
    label: "户外招牌",
  },
  {
    value: 2,
    label: "户外广告",
  },
];

const test_options = [
   {
    id: 1,
    name: "《户外广告设施设置技术规范》 DB31/283-2015",
  },
  {
    id: 2,
    name: '《户外招牌设置技术规范》 DB31/T 977-2016',
  },
  {
    id: 3,
    name: '《户外广告和招牌设施安全检测要求》 DB31/T 1289-2021',
  },
  {
    id: 4,
    name: '《上海市户外广告和招牌设施安全检测规范（2021版）》',
  },
  {
    id: 5,
    name: '《霓虹灯安装规范》 GB 19653-2005',
  }
];

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

.dialog-footer button:first-child {
  margin-right: 10px;
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
