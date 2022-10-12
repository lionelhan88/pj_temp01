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
              <i class="el-icon-tickets"></i>
              <span>分项评定</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!--主页区域-->
        <el-main>
          <ul v-infinite-scroll="load" class="infinite-list" overflow="true" :data="data"
            :infinite-scroll-disabled="disabled">
            <el-descriptions v-for="i in data" :key="j" class="infinite-list-item"  :row="3" >
              <!-- <el-option v-for="i in List" :key="i.value" :label="i.label" :value="i.value"> </el-option> -->
              
              
              <el-descriptions-item label="检测项目" span="1" style="width: 100px">
              </el-descriptions-item>
              <el-descriptions-item span="2">{{ i.label }}</el-descriptions-item>

              <el-descriptions-item label="评定等级" span="1"></el-descriptions-item>
              <el-descriptions-item span="2" style="width: 100px">
                <el-radio-group v-model="i.lable">
                  <el-radio :label="3"> A</el-radio>
                  <el-radio :label="6"> B</el-radio>
                  <el-radio :label="9"> C</el-radio>
                </el-radio-group>
              </el-descriptions-item>

              <el-descriptions-item label="备注(缺陷部位说明)" span="1" style="width: 100px">
              </el-descriptions-item>
              <el-descriptions-item span="2" style="width: 600px">
                <el-input v-model="input" placeholder="Please input" style="width: 700px" />
              </el-descriptions-item>

              <el-divider />
            </el-descriptions>
            <el-button class="editBtn" type="primary" @click="testResult()">编辑</el-button>
            <el-button class="cancelBtn" @click="testResult()">取消</el-button>
            <el-button class="approveBtn" @click="testResult()">批准</el-button>
          </ul>


        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
const ARR = [1, 2, 3, 4, 5];

import { ref } from "vue";

const radio = ref();

const input = ref("");
const j = ref();

const List = ref([
  {
    value: 1,
    label: "正常"
  },
  {
    value: 2,
    label: "锁定"
  },
  {
    value: 4,
    label: "正常"
  },
  {
    value: 5,
    label: "锁定"
  },
  {
    value: 6,
    label: "正常"
  },
  {
    value: 7,
    label: "锁定"
  },
  {
    value: 8,
    label: "正常"
  },
  {
    value: 9,
    label: "锁定"
  }
  ]);
const tableData = [
  {
    value: 1,
    label: "正常"
  },
  {
    value: 2,
    label: "锁定"
  },
  {
    value: 4,
    label: "正常"
  },
  {
    value: 5,
    label: "锁定"
  },
  {
    value: 6,
    label: "正常"
  },
  {
    value: 7,
    label: "锁定"
  },
  {
    value: 8,
    label: "正常"
  },
  {
    value: 9,
    label: "锁定"
  }
  ];
const maxSize = tableData.length;
const disabled = ref(false);
const page = ref(2);
const total = ref(1);
const data = ref([]);
const count = ref(0);
const load = () => {
  data.value = data.value.concat(tableData);
  if (page.value >= total.value) {
    disabled.value = true;
  }
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
  width: "150px";
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

.infinite-list {
  height: 100px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  align-items: left;
  justify-content: left;
  margin: 10px;
  width: 95%;
}
</style>