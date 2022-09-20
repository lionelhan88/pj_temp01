<template>
  <div>
    <el-container class="home_container">
      <!--头部区域-->
      <el-header>
        <div>
          <span class="title">欢迎使用户外广告和招牌设施安全检测管理系统</span>
        </div>
      </el-header>

      <!--侧边区域-->
      <el-container class="container">
        <el-aside>
          <el-menu active-text-color="#8B4726" background-color="#87CEFA">
            <el-menu-item index="2">
              <span>项目详情</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!--主页区域-->
        <el-main>
          <el-descriptions class="margin-top" :column="4" border>
            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">委托编号</div>
              </template>
              {{ this.tableData[0].entrustNum }}
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">报告编号</div>
              </template>
              
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">校验码</div>
              </template>
              
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">委托日期</div>
              </template>
              2022-08-22
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">检测类型</div>
              </template>
              商户自主
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">委托单位</div>
              </template>
              中建二局
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">店铺名称</div>
              </template>
              上海肯德基有限公司
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">设施名称</div>
              </template>
              肯德基logo1
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">设施编号</div>
              </template>
              B20220105320
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">设施地点</div>
              </template>
              浦东新区高桥镇高桥西街202号
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">设施类型</div>
              </template>
              户外招牌
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">设施样式</div>
              </template>
              电子显示屏（墙面）
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">设计单位</div>
              </template>
              上海建科设计院
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">施工单位</div>
              </template>
              中国建筑二分公司
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">监理单位</div>
              </template>
              上海同济咨询公司
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">行政区域</div>
              </template>
              浦东新区
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">检测开始时间</div>
              </template>
              2022-05-18
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">检测结束时间</div>
              </template>
              2022-08-05
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">创建时间</div>
              </template>
              2005-09-09
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">创建用户</div>
              </template>
              lch
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">修改时间</div>
              </template>
              2011-09-01
            </el-descriptions-item>

            <el-descriptions-item align="center">
              <template #label>
                <div class="cell-item">修改用户</div>
              </template>
              lch
            </el-descriptions-item>

            <el-descriptions-item align="center" span="2">
              <template #label>
                <div class="cell-item">完工</div>
              </template>
              是
            </el-descriptions-item>

            <el-descriptions-item align="center" span="4">
              <template #label>
                <div class="cell-item">检测方法</div>
              </template>
              浦东新区
            </el-descriptions-item>

            <el-descriptions-item align="center" span="4">
              <template #label>
                <div class="cell-item">检测项目</div>
              </template>
              浦东新区
            </el-descriptions-item>

            <el-descriptions-item align="center" span="4">
              <template #label>
                <div class="cell-item">综合等级</div>
              </template>
              A
            </el-descriptions-item>

            <el-descriptions-item align="center" span="4">
              <template #label>
                <div class="cell-item">检测结果</div>
              </template>
              {{this.tableData[0].inspectResult}}
            </el-descriptions-item>
          </el-descriptions>

          <el-button class="editBtn" type="primary" @click="testResult()"
            >编辑</el-button
          >
          <el-button class="cancelBtn" @click="testResult()">取消</el-button>
          <el-button class="approveBtn" @click="testResult()">批准</el-button>
          <el-button class="reportBtn" @click="testResult()">报告</el-button>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
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
</script>

<style scoped lang="scss">
.home_container {
  height: 100%;
}

.el-header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  background-color: rgb(70 130 180);
}

.title {
  justify-content: space-between;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.el-aside {
  background-color: rgb(135 206 250);
  width: 180px;
  height: 100%;
}

.container {
  height: 90vh;
}

.el-menu-item {
  font-size: 16px;
  font-weight: bold;
}

.el-main {
  background-color: rgb(240 255 240);
}

.editBtn {
  margin-top: 50px;
  position: relative;
  left: 16%;
}

.cancelBtn {
  margin-top: 50px;
  position: relative;
  left: 32%;
}

.approveBtn {
  margin-top: 50px;
  position: relative;
  left: 48%;
}

.reportBtn {
  margin-top: 50px;
  position: relative;
  left: 64%;
}
</style>
