<template>

   <div>
   <h3 class="header1">委托详情</h3>
    <el-descriptions class="margin-top" :column="4" border >
    
      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">委托编号</div>
        </template>
        {{entrustmentInfo.entrustmentNo ? entrustmentInfo.entrustmentNo : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">报告编号</div>
        </template>
        {{info.reportNo ? info.reportNo : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">校验码</div>
        </template>
        {{info.checkCode ? info.checkCode : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">委托日期</div>
        </template>
        {{entrustmentInfo.entrustmentDate ? entrustmentInfo.entrustmentDate : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">检测类型</div>
        </template>
        {{entrustmentInfo.detectionType ? detectionType[entrustmentInfo.detectionType-1] : 
        "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">委托单位</div>
        </template>
        {{entrustmentInfo.client ? entrustmentInfo.client : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">店铺名称</div>
        </template>
        {{info.shopName ? info.shopName : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">设施名称</div>
        </template>
        {{info.facilityName ? info.facilityName : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">设施编号</div>
        </template>
        {{info.facilityNo ? info.facilityNo : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">设施地点</div>
        </template>
        {{info.detailedAddress ? info.detailedAddress : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">设施类型</div>
        </template>
        {{info.facilityType ? facilityType[info.facilityType-1] : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">设施样式</div>
        </template>
        {{info.facilityCategory ? facilityCategory[info.facilityCategory-1] : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">设计单位</div>
        </template>
        {{info.designCompany ? info.designCompany : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">施工单位</div>
        </template>
        {{info.constructionCopmany ? info.constructionCopmany : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">监理单位</div>
        </template>
        {{info.supervisionCompany ? info.supervisionCompany : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">行政区域</div>
        </template>
        {{info.facilityNo ? info.facilityNo : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">检测开始时间</div>
        </template>
        {{info.detectionStartTime ? info.detectionStartTime : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">检测结束时间</div>
        </template>
        {{info.detectionEndTime ? info.detectionEndTime : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">创建时间</div>
        </template>
        {{info.insertTime ? info.insertTime : "暂无结果" }}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">创建用户</div>
        </template>
        {{info.creator ? info.creator : "暂无结果"}}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">修改时间</div>
        </template>
        {{info.updateTime ? info.updateTime : "暂无结果"}}
      </el-descriptions-item>

      <el-descriptions-item align="center">
        <template #label>
          <div class="cell-item">修改用户</div>
        </template>
        {{info.modifier ? info.modifier : "暂无结果"}}
      </el-descriptions-item>

      <el-descriptions-item align="center" span="2">
        <template #label>
          <div class="cell-item">完工</div>
        </template>
        {{info.status ? finished[info.status] : "未完工"}}
      </el-descriptions-item>

      <el-descriptions-item align="left" span="4">
        <template #label>
          <div class="cell-item" align="center">检测方法</div>
        </template>
        <span v-if="info.testMethods == null" align="center"
        style="text-align: center;display:block;"
        > 暂无结果 </span>
        <span v-else :keys="item" v-for="item in info.testMethods" align="center">
        《 {{item.name}} 》 
        </span>
        
      </el-descriptions-item>

      <el-descriptions-item align="left" span="4">
        <template #label>
          <div class="cell-item" align="center">检测项目</div>
        </template>
        <span v-if="info.testItemsVos == null" 
        style="text-align: center;display:block;"
        > 暂无结果 </span>
        <span v-else :keys="item" v-for="item in info.testItemsVos" >
        《 {{item.name}} 》 
        </span>
    
      </el-descriptions-item>

      <el-descriptions-item align="center" span="4">
        <template #label>
          <div class="cell-item">综合等级</div>
        </template>
        {{info.comprehensiveGrade ? grade[info.comprehensiveGrade-1] : "暂无结果"}}
      </el-descriptions-item>

      <el-descriptions-item align="left" span="4">
        <template #label>
          <div class="cell-item" align="center">检测结果</div>
        </template>
        {{info.detectionResult ? info.detectionResult : "暂无结果"}}
      </el-descriptions-item>

      
    </el-descriptions>

    <el-button class="editBtn" type="primary" @click="testResult()"
      >编辑</el-button
    >
    <el-button class="cancelBtn" @click="testResult()">取消</el-button>
    <el-button class="approveBtn" @click="approve()">批准</el-button>
    <el-button class="reportBtn" @click="reportPage()">报告</el-button>
  </div>

  
</template>

<script lang="ts" setup>

import { reactive, ref, onBeforeMount, onMounted, onBeforeUpdate , getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router"
import { toRaw } from '@vue/reactivity'

const route = useRoute();
const router = useRouter();
const data = {id: route.query};
const info = ref([]);
const entrustmentInfo = ref([]);
const finished = ["未完工", "已完工"];
const grade = ["A", "B", "C"];
const facilityType = ["户外招牌", "户外广告"];
const detectionType = ["商户自主", "市局抽检" , "局局抽检", "街道抽检", "其他"];
const facilityCategory = [
  "电子显示屏(墙面)", "侧招(墙面-垂直式)", "招幌(墙面-垂直式)", "字符式(墙面-平行式)", 
  "箱体式(墙面-平行式)", "平板式(墙面-平行式)", "独立式(地面-落地式)", "镂空(屋顶)", "非镂空(屋顶)"
];

const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;
import { getRslt } from '@/api/apiRequest.ts';


//================================ 加载页面前获取数据并赋值 ==================================
onMounted( () => {
  const detail =  getRslt(data.id);
  console.log(detail);
   detail.then( response => {
    info.value = response.data.data;
    entrustmentInfo.value = response.data.data.entrustmentInfoVo;
  })
  
})


//====================================== 路由跳转 ===========================================
const reportPage = () => {
  router.push({ 
        name: 'report',
        })
}

//====================================== 点击事件 ===========================================
const approve = () => {
  console.log ("button hit");
}

</script>

<style scoped lang="scss">
.editBtn {
  margin-top: 80px;
  position: relative;
  left: 16%;
}

.cancelBtn {
  margin-top: 80px;
  position: relative;
  left: 32%;
}

.approveBtn {
  margin-top: 80px;
  position: relative;
  left: 48%;
}

.reportBtn {
  margin-top: 80px;
  position: relative;
  left: 64%;
}

.header1 {
  display: flex;
  margin-left: 740px;
  margin-bottom: 48px;
  align-items: center;
  font-size: 24px;

}
</style>

<!--   
  
 ====================================================================================



import type { FormInstance, FormRules } from "element-plus";

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();



const tableData = [
  {
    entrustmentNo: "7987465423",
    reportNo: "12345678",
    inspectResult: "1、（A级）可继续使用，并应按规范要求做好维护保养。 2、（B级）某某分项存在一般缺陷，应按规范要求15天内完成整改，并申请复检" +
    "。 3、（C级）某某分项存在严重缺陷，应按规范要求7天内完成整改，并申请复检。某某存在坠落、倾覆危险，应按规范要求24小时内予以拆除。）"

  },
];

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
  </div> -->