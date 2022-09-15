<script setup lang="ts"></script>

<template>
  <div class="home_container">
    <el-container>
      <!--头部区域-->
      <el-header>
        <div>
          <span class="title">欢迎使用户外广告和招牌设施安全检测管理系统</span>
        </div>

        <el-button type="info" @click="logout">退出</el-button>
      </el-header>

      <!--侧边区域-->
      <el-container>
        <el-aside width="150px">
          <!--侧边栏菜单区域-->
          <el-menu
            active-text-color="#8B4726"
            background-color="#87CEFA"
          >
            <el-menu-item index="2">
            <i class = "el-icon-document-add"></i>
              <router-link :to="{path: '/home/createTrust'}">创建委托信息</router-link>
            </el-menu-item>
            <el-menu-item index="4">
            <i class = "el-icon-search"></i>
              <router-link :to="{path: '/home/searchTrust'}">查询委托信息</router-link>
            </el-menu-item>
           
          </el-menu>
        </el-aside>

        <!--主页区域-->
        <el-main>
     
        <!-- 路由占位符-->
        <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
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

.el-button{
    background-color: rgb(240 255 240);
    color:black;
    font-weight: bold;
}

.title{
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
}

.el-aside {
  background-color: rgb(135 206 250);
  height: 100vh;
  width: 180px;
}

.el-menu-item{
  font-size: 16px;
  font-weight: bold;
}

.el-main{
  background-color: rgb(240 255 240);
}
</style>
