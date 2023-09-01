<script setup lang="ts">
import { menuActiveIndexStore } from '@/store/menuActiveIndex'
const indexStore = menuActiveIndexStore()
</script>

<template>
  <el-header>
    <div class="header-container">
      <!-- logo -->
      <a class="logo"><img src="@/assets/logo1.png" alt=""><img src="@/assets/logo2.png" alt=""></a>
      <!-- 导航栏 -->
      <el-menu router :default-active="indexStore.menuAactiveIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="home">
          Home
        </el-menu-item>
        <el-menu-item index="research">
          Research
        </el-menu-item>
        <el-menu-item index="publications">
          Publications
        </el-menu-item>
        <el-menu-item index="people">
          People
        </el-menu-item>
        <el-menu-item index="news">
          News
        </el-menu-item>
        <el-menu-item index="contact">
          Contact
        </el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>

<style scoped lang="less">
header {
  width: 100%;
  // height: 60px;
  border-bottom: 1px solid var(--el-menu-border-color);

  .header-container {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 60px;
      padding: 0 20px;

      img {
        height: 80%;
      }
    }

    .el-menu-demo {
      height: 60px;
      width: 700px;
      justify-content: flex-end;

      .el-menu-item {
        font-size: 16px;
      }
    }

  }

}
</style>
