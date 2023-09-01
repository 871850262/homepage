<script setup lang="ts">
import Researchcard from './Researchcard/index.vue'
import { onMounted, ref } from "vue";
import { reqGetResearchList } from '@/api/index'

let researchList = ref([{
  id: '',
  title: '',
  content: ''
}])
const getResearchList = async () => {
  const res = await reqGetResearchList()
  researchList.value = res.data
}

onMounted(() => {
  getResearchList()
})
</script>

<template>
  <div class="body">
    <Researchcard v-for="item in researchList" :key="item.id">
      <template #title>{{ item.title }}</template>
      <template #content>{{ item.content }}</template>
    </Researchcard>

  </div>
</template>

<style lang="less" scoped>
.body {
  width: 1000px;
  margin: 0 auto;
}
</style>