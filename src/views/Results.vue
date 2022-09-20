<template>
  <div>
    <h4 class="header1">查询列表</h4>

    <el-table :data="tableData" :border="parentBorder" style="width: 100%" @expand-change="expandChange">
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
                {{ this.tableData[0].entrustNum }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>报告编号:</div>
                </template>
                {{ this.tableData[0].reportNum }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>校验码</div>
                </template>
                {{ this.tableData[0].code }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>委托日期</div>
                </template>
                {{ this.tableData[0].date }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>检测类型</div>
                </template>
                {{ this.tableData[0].detectionType }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>委托单位</div>
                </template>
                {{ this.tableData[0].client }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>店铺名称</div>
                </template>
                {{ this.tableData[0].shopName }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>设施编号</div>
                </template>
                {{ this.tableData[0].facilityNo }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>设施地点</div>
                </template>
                {{ this.tableData[0].detailedAddress }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>设施样式</div>
                </template>
                {{ this.tableData[0].facilityCategory }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>设计单位</div>
                </template>
                {{ this.tableData[0].designCompany }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>监理单位</div>
                </template>
                {{ this.tableData[0].supervisionCompany }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>牌面底标高(m)</div>
                </template>
                {{ this.tableData[0].height }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>检测面积(m2)</div>
                </template>
                {{ this.tableData[0].area }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>检测开始时间</div>
                </template>
                {{ this.tableData[0].detectionStartTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>检测结束时间</div>
                </template>
                {{ this.tableData[0].detectionEndTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>创建时间</div>
                </template>
                {{ this.tableData[0].detectionEndTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>创建用户</div>
                </template>
                {{ this.tableData[0].createTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>最后一次修改时间</div>
                </template>
                {{ this.tableData[0].lastEditTime }}
              </el-descriptions-item>

              <el-descriptions-item align="center">
                <template #label>
                  <div>最后一次修改用户</div>
                </template>
                {{ this.tableData[0].lastEditUser }}
              </el-descriptions-item>

              <el-descriptions-item align="center" span="1">
                <template #label>
                  <div>综合等级</div>
                </template>
                {{ this.tableData[0].comprehensiveGrade }}
              </el-descriptions-item>

              <el-descriptions-item align="center" span="3">
                <template #label>
                  <div>检测结果</div>
                </template>
                {{ this.tableData[0].detectionResult }}
              </el-descriptions-item>
            </el-descriptions>

            <el-descriptions class="margin-top" :column="4" border>
              <el-descriptions-item align="center" span="4">
                <template #label>
                  <div>检测方法</div>
                </template>
                {{ this.tableData[0].family }}
              </el-descriptions-item>

              <el-descriptions-item align="center" span="4">
                <template #label>
                  <div>检测项目</div>
                </template>
                {{ this.tableData[0].family }}
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

      <el-table-column label="操作" align="center">
        <el-button class="resetBtn" @click="approval()">批准</el-button>
        <el-button class="resetBtn" @click="testResult()">操作</el-button>
      </el-table-column>

      <el-table-column label="完工" align="center">
        <el-checkbox v-model="checked1" ></el-checkbox>
      </el-table-column>
    </el-table>

    <el-button class="editBtn" type="primary" @click="testResult()">编辑</el-button>
    <el-button class="cancelBtn" @click="testResult()">取消</el-button>
    <el-button class="approveBtn" @click="testResult()">批准</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";


const expandChange = (row,expandedRows) =>{
    if(expandedRows.length>1){
        expandedRows.shift()
      }
}

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
    eqpName: "肯德基losssssssssssssssssssssssssgo",
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
];

const router = useRouter();
const testResult = () => {
  router.push({ path: "/evaluation" });
};

const approval = () => {
  router.push({ path: "/approval"});
}


</script>

<style scoped lang="scss">
.header1 {
  display: flex;
  justify-content: center;
  align-items: center;
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
