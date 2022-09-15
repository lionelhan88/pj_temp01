<template>
  <div :key="item" v-for="item in tableData">
    this sasda {{item}}
  </div>
</template>

<script lang="ts" setup>

const tableData=[
  结构复核,
  电气照明及防雷装置,
  结构及防腐,
  面板及维护,
  构架连接,
  结构构件,
  基础或被依附体状况
]
  
</script>

<style>

</style>
<!-- <style scoped lang="scss">
.home_container {
  height: 100vh;
}

.el-header {
  background-color: rgb(70 130 180);
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
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
  height: 100vh;
  width: 180px;
}

.el-menu-item {
  font-size: 16px;
  font-weight: bold;
}

.el-main {
  background-color: rgb(240 255 240);
}
</style> -->


<!-- <div class="home_container">
    <el-container>
      
      <el-header>
        <div>
          <span class="title">欢迎使用户外广告和招牌设施安全检测管理系统</span>
        </div>
      </el-header>

   
      <el-container>
        <el-aside width="150px">
       
          <el-menu active-text-color="#8B4726" background-color="#87CEFA">
            <el-menu-item index="2">
              <i class="el-icon-tickets"></i>
              <span>分项评定</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

      
        <el-main>
          <span
            >I sit at my window this morning where the world like a passer-by
            stops for a moment, nods to me and goes.</span
          >
          <div v-for="item in tableData" :key="item">
            {{item}}
          </div>
          <el-divider />
        </el-main>
      </el-container>
    </el-container>
  </div> -->