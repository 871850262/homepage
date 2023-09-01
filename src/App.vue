<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>

<template>
  <Header />
  <el-main>
    <RouterView></RouterView>
  </el-main>
  <Footer></Footer>
</template>

<style scoped lang='less'>
main {
  padding-bottom: 100px;
}
</style>
