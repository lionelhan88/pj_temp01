<template>
  <div>
    <h4 class="header1">查询列表</h4>

   <el-table :data="tableData" :border="parentBorder" style="width: 100%" #default="props">
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
                {{ props.row.entrustNum }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>报告编号:</div>
                </template>
                {{ props.row.reportNum }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>校验码</div>
                </template>
                {{ props.row.code }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>委托日期</div>
                </template>
                {{ props.row.date }}
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
                {{ props.row.detectionEndTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>创建用户</div>
                </template>
                {{ props.row.createTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>最后一次修改时间</div>
                </template>
                {{ props.row.lastEditTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>最后一次修改用户</div>
                </template>
                {{ props.row.lastEditUser }}
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
                {{ props.row.family }}
              </el-descriptions-item>

              <el-descriptions-item align="center" span="4">
                <template #label>
                  <div>检测项目</div>
                </template>
                {{ props.row.family }}
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
    <el-button class="approveBtn" @click="testResult()">批准</el-button>
    
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const dddd = route.query;
const dialogVisible = ref(false);
const checked1 = ref(false);
const parentBorder = ref(true);


//============================= 包装axios请求 ====================================
const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;
import { finishProject, approvalById } from '@/api/apiRequest.ts'

const handleChange = (event, props) => {
  dialogVisible.value = true;
  if( props.row.status == 0){
    props.row.status = 1;
  }else {
    props.row.status = 0;
  };
  const request = {id: props.row.id, status: props.row.status } ;
  const data = finishProject(request);

}

//============================= 路由跳转 ====================================

const testResult = () => {
  router.push({ name: "evaluation" });
};

const approval = ( props ) => {
  console.log(props.row.id)
  const request = {id: props.row.id};
  const data = approvalById(request);
  console.log(props);
  router.push({ 
    name: "approval",
    query: {props} });
}

//============================= 测试数据 =========================================
const tableData = [
  {
    eqpType: "户外招牌",
    eqpName: "肯德基logo",
    Og: "上海建工集团第三分公司xxx部门xxx城建系统xxxx",
    district_area: "浦东新区xxx街道",
    entrustNum: "11554466778899",
    reportNum: "111155554444",
    code: "111333",
    date: "2022年8月30日",
    detectionType: "商户自主",
    client: "上海委托单位",
    shopName: "随便什么shopname",
    facilityNo: "11111555554444455555",
    detailedAddress: "suibianshenmeaddressdoukeyi",
    facilityCategory: "电子屏墙面帆布",
    designCompany: "zhongguochengjianjituan",
    supervisionCompany: "supervisionCompanyh",
    height: "1",
    area: "21",
    detectionStartTime: "2022年7月31日",
    detectionEndTime: "2022年7月32日",
    comprehensiveGrade: "A",
    detectionResult: "will be vary based on the comprehensiveGrade",
    createTime: "2022年7月33日",
    createClient: "whatever the client is ",
    lastEditTime: "2022年7月34日",
    lastEditUser: "sososoxxxxxxxxxx",
    id:18,
    status:0,
    family: [
      {
        name: "Jerry",

        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
    ],
  },
  {
    eqpType: "户外招牌",
    eqpName: "肯德基losssssssgo",
    Og: "上海建工集团第三分公司xxx部门xxx城建系统xxxx",
    district_area: "浦东新区xxx街道",
    entrustNum: "11554466778899",
    reportNum: "111155554444",
    code: "111333",
    date: "2022年8月30日",
    detectionType: "商户自主",
    client: "上海委托单位",
    shopName: "随便什么shopname",
    facilityNo: "11111555554444455555",
    detailedAddress: "suibianshenmeaddressdoukeyi",
    facilityCategory: "电子屏墙面帆布",
    designCompany: "zhongguochengjianjituan",
    supervisionCompany: "supervisionCompanyh",
    height: "1",
    area: "21",
    detectionStartTime: "2022年7月31日",
    detectionEndTime: "2022年7月32日",
    comprehensiveGrade: "A",
    detectionResult: "will be vary based on the comprehensiveGrade",
    createTime: "2022年7月33日",
    createClient: "whatever the client is ",
    lastEditTime: "2022年7月34日",
    lastEditUser: "sososoxxxxxxxxxx",
    id:222,
    status:0,
    family: [
      {
        name: "Jerry",

        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
    ],
  },{
    eqpType: "户外招牌",
    eqpName: "肯德assssssssgo",
    Og: "上海建工集团第三分公司xxx部门xxx城建系统xxxx",
    district_area: "浦东新区xxx街道",
    entrustNum: "11554466778899",
    reportNum: "111155554444",
    code: "111333",
    date: "2022年8月30日",
    detectionType: "商户自主",
    client: "上海委托单位",
    shopName: "随便什么shopname",
    facilityNo: "11111555554444455555",
    detailedAddress: "suibianshenmeaddressdoukeyi",
    facilityCategory: "电子屏墙面帆布",
    designCompany: "zhongguochengjianjituan",
    supervisionCompany: "supervisionCompanyh",
    height: "1",
    area: "21",
    detectionStartTime: "2022年7月31日",
    detectionEndTime: "2022年7月32日",
    comprehensiveGrade: "A",
    detectionResult: "will be vary based on the comprehensiveGrade",
    createTime: "2022年7月33日",
    createClient: "whatever the client is ",
    lastEditTime: "2022年7月34日",
    lastEditUser: "sososoxxxxxxxxxx",
    id:333,
    status:0,
    family: [
      {
        name: "Jerry",

        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
      },
    ],
  },]



</script>

<style scoped lang="scss">
.header1 {
  display: flex;
  position: relative;
  left: 43%;
  align-items: center;
  font-size: 24px;

}

.header2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}

.editBtn{
    margin-top: 50px;
    position: relative;
    left: 30%;
}

.cancelBtn{
    margin-top: 50px;
    position: relative;
    left: 40%;
}

.approveBtn{
    margin-top: 50px;
    position: relative;
    left: 50%;
}

</style>
