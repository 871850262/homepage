<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
import { onMounted } from "vue";
onMounted(() => {
  fetch('http://127.0.0.1:9000/api/log').then(res => res.json()).then(data => console.log(data))
})
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
