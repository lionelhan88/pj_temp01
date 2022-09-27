<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <!--侧边栏菜单-->
            <el-menu
              class="el-menu"
              default-active="1"
              background-color="#2F4F4F"
              text-color = "#FFFFF0"
              :router="true"
            >
              <el-menu-item index="1" :route="{path:'/home/createTrust'}">
                  <el-icon><document-add /></el-icon>
                  <span>创建委托信息</span>
              </el-menu-item>
            
              <el-menu-item index="2" :route="{path:'/home/searchTrust'}">
                <el-icon><search /></el-icon>
                <span>查询委托信息</span>
              </el-menu-item>
            </el-menu>
      </el-aside>
      
      
      <el-container> 
        <!--头部区域-->
        <el-header class="header">
          <span class="title">欢迎使用户外广告和招牌设施安全检测管理系统</span></el-header>
        
        <!--主页区域-->

        <el-main>
          <router-view></router-view>
        </el-main>
        
      </el-container>
    </el-container>
  </div>
</template>

<style >
  .common-layout{
    background-color: rgb(240 248 255);
  }
  
  .el-aside{
    background-color: rgb(47 79 79);
    
  }

  .el-menu{
      border-right: none;
      height:100vh;
      font-size: 40px;
    }

  
  .el-main{
    margin:8px;
    background-color: rgb(255 255 240);
    height: 90vh;
  }
  
  .header{
    background-color: rgb(47 79 79);
    
  }
  
  .title{
    position: absolute;
    justify-content: center;
    display: flex;
    left: 32%; 
    font-size: 32px;
    margin-top: 5px;
    color: rgb(255 255 240);
    
  }
  


</style>

<script lang="ts" setup>
import {
  DocumentAdd,
  Search,
} from '@element-plus/icons-vue'


</script>


