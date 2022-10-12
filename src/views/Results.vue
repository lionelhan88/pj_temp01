<template>
  <div>
    <h4 class="header1">查询列表</h4>

    <el-table :data="content" :border="parentBorder"  #default="props">
      
      <el-table-column label="委托编号" prop="entrustmentInfoVo.entrustmentNo" 
        align="center" style="font-weight:bold"
      />

      <el-table-column label="委托单位" prop="entrustmentInfoVo.client" align="center" />

      <el-table-column label="委托日期" prop="entrustmentInfoVo.entrustmentDate" 
        align="center"  :formatter="formatDate"
      >
      </el-table-column>
      
      <el-table-column label="检测类型" prop="entrustmentInfoVo.detectionType" align="center"
      :formatter="formatType">
      </el-table-column>

      <el-table-column label="设施名称" prop="facilityName" align="center" />

       <el-table-column label="完工状态" align="center" #default="props" >
        {{projectStatus[props.row.status]}}
        
      </el-table-column>

      

      <el-table-column label="委托详情和检测结果" align="center" #default="props">
        <el-button class="testRsltBtn" @click="testResult(props)">检测结果</el-button>
        <el-button class="approvalBtn" @click="approval(props)">详情</el-button>
      </el-table-column>

      <el-table-column label="操作" align="center" #default="props">

        <el-checkbox-button class="testRsltBtn" v-model="props.row.status" label="完工" @change="handleChange($event, props)"
        :true-label="1"
        :false-label="0"
        > </el-checkbox-button>
        
        <el-button class="approvalBtn" @click="approval(props)">批准</el-button>
      </el-table-column>

    </el-table>

    <div class="example-pagination-block">
      <el-pagination v-model:currentPage="thisPage" :page-size="10" background 
        hide-on-single-page
        layout="prev, pager, next, total" :total="total" @current-change="handlePageChange"  />
    </div>
    
   
    
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();


const dialogVisible = ref(false);

const parentBorder = ref(true);
const detectionType = ["商户自主", "市局抽检" , "局局抽检", "街道抽检", "其他"];
const projectStatus = ["未完工", "完工"];

//============================= 包装axios请求 ====================================
const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;
import { finishProject, approvalById, listByCondition } from '@/api/apiRequest.ts'

const receiveData = route.query;


// 重新包装请求，添加分页参数
const total = ref(0);
const thisPage = ref(1);

const data = {
  client: receiveData.client,
  entrustmentNo: receiveData.entrustmentNo,
  entrustStartDate: receiveData.entrustStartDate,
  entrustEndDate: receiveData.entrustEndDate,
  detectionType: receiveData.detectionType,
  queryCriteria:{
    maxRecordReturn: 10,
    startIndex:(thisPage.value - 1) * 10 ,
  }
}

const handlePageChange = (val: number) => {
  console.log("valllll " , val);
  thisPage.value = val;
  data.queryCriteria.startIndex = (thisPage.value - 1) * 10;
  callBack = listByCondition(data);
  callBack.then(response => {
    content.value = response.data.data.records;
  })
};

let callBack = listByCondition(data);
let content = ref([]) ;
console.log(callBack);
callBack.then(response => {
  content.value = response.data.data.records;
  total.value = response.data.data.total;
})

const handleChange = (event, props) => {
  dialogVisible.value = true;  
  const request = {id: props.row.id, status: props.row.status } ;
  const data = finishProject(request);
}

//============================= 路由跳转 ========================================

const testResult = ( props ) => {
  router.push({ 
    name: "evaluation",
    query: {
      id: props.row.id,      
    }
     });
};

const approval = ( props ) => {
  console.log("idddddd "+ props.row.id)
  const request = {id: props.row.id};
  const data = approvalById(request);
  console.log("testsss " + props.row.id);
  router.push({ 
    name: "approval",
    query: {
      id: props.row.id,      
    } });
  
}

//============================= 测试数据 ========================================
const formatType = (row, column) => {
  // 获取单元格数据
  return detectionType[row.entrustmentInfoVo.detectionType]
};

const formatDate = (row, column) => {



  let dt = new Date(row.entrustmentInfoVo.entrustmentDate);
  return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() ; 
   
}


</script>

<style scoped lang="scss">
.header1 {
  display: flex;
  margin-left: 720px;

  align-items: center;
  font-size: 24px;

}

.header2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-table {
  width: 100%;
  margin-top: 80px;
}
.margin-top {
  margin-top: 20px;
}

.editBtn{
    margin-top: 64px;
    position: relative;
    left: 30%;
}

.cancelBtn{
    margin-top: 64px;
    position: relative;
    left: 40%;
}

.example-pagination-block  {
  margin-left: 640px;
  margin-top: 16px;
  
}

.el-pagination{
  margin-top: 104px;
  margin-left: -5%;
}

.approvalBtn{
  margin-left: 10px;
}
</style>


<!-- <el-table :data="tableData" :border="parentBorder" style="width: 100%" #default="props">
    <el-table-column type="expand">
        <template #default="props">
          <h3 class="header2">委托详情</h3>
       
          <br />
          <div>
            <el-descriptions class="margin-top" :column="4" border>
              <el-descriptions-item align="center">
                <template #label>
                  <div>委托编号:</div>
                </template>
                {{ props.row.entrustmentNo }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>报告编号:</div>
                </template>
                {{ props.row.reportNo }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>校验码</div>
                </template>
                {{ props.row.checkCode }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>委托日期</div>
                </template>
                {{ props.row.entrustmentDate }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>检测类型</div>
                </template>
                {{ props.row.detectionType }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>委托单位</div>
                </template>
                {{ props.row.client }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>店铺名称</div>
                </template>
                {{ props.row.shopName }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>设施编号</div>
                </template>
                {{ props.row.facilityNo }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>设施地点</div>
                </template>
                {{ props.row.detailedAddress }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>设施样式</div>
                </template>
                {{ props.row.facilityCategory }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>设计单位</div>
                </template>
                {{ props.row.designCompany }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>监理单位</div>
                </template>
                {{ props.row.supervisionCompany }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>牌面底标高(m)</div>
                </template>
                {{ props.row.height }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>检测面积(m2)</div>
                </template>
                {{ props.row.area }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>检测开始时间</div>
                </template>
                {{ props.row.detectionStartTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>检测结束时间</div>
                </template>
                {{ props.row.detectionEndTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>创建时间</div>
                </template>
                {{ props.row.insertTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>创建用户</div>
                </template>
                {{ props.row.creator }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>最后一次修改时间</div>
                </template>
                {{ props.row.updateTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>最后一次修改用户</div>
                </template>
                {{ props.row.modifier }}
              </el-descriptions-item>

              <el-descriptions-item align="center" span="1">
                <template #label>
                  <div>综合等级</div>
                </template>
                {{ props.row.comprehensiveGrade }}
              </el-descriptions-item>

              <el-descriptions-item align="center" span="3">
                <template #label>
                  <div>检测结果</div>
                </template>
                {{ props.row.detectionResult }}
              </el-descriptions-item>
            </el-descriptions>

            <el-descriptions class="margin-top" :column="4" border>
              <el-descriptions-item align="center" span="4">
                <template #label>
                  <div>检测方法</div>
                </template>
                {{ props.row.testMethods }}
              </el-descriptions-item>

              <el-descriptions-item align="center" span="4">
                <template #label>
                  <div>检测项目</div>
                </template>
                {{ props.row.testMethods }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="设施类型" prop="eqpType" align="center" style="font-weight:bold"/>
      <el-table-column label="设施名称" prop="eqpName" align="center" />
      <el-table-column label="施工单位" prop="Og" align="center" />
      <el-table-column label="行政区域" prop="district_area" align="center" />
      <el-table-column label="检测结果" prop="result" align="center">
        <el-button class="testRsltBtn" @click="testResult()">检测结果</el-button>
      </el-table-column>

      <el-table-column label="操作" align="center" #default="props">
        <el-button class="resetBtn" @click="approval(props)">批准</el-button>
        <el-button class="resetBtn" @click="testResult()">操作</el-button>
      </el-table-column>

      <el-table-column label="完工" align="center" #default="props" >
        <el-checkbox v-model="props.row.checked"  @change="handleChange($event, props)"></el-checkbox>
      </el-table-column>
      
      
    </el-table> 
    
     <el-button class="editBtn" type="primary" @click="testResult()">编辑</el-button>
    <el-button class="cancelBtn" @click="testResult()">取消</el-button>
    <el-button class="approveBtn" @click="approval(props)">批准</el-button>
    
    -->