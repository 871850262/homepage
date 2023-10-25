<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { reqGetPublicationsList, reqGetPublicationsYearIndex } from '@/api/index'
import Papercard from './Papercard/index.vue'


let publicationsYearIndex = ref([{
  id: 0,
  year: 0
}])
let publicationsList = ref([{
  id: 0,
  title: "",
  year: 0,
  authors: "",
  journal: "",
  volume: "",
  paperImgUrl: '',
  PDFurl: ''
}])
let currentYear = ref(0)

//请求年份列表
const getPublicationsYearIndex = async () => {
  const res = await reqGetPublicationsYearIndex()
  publicationsYearIndex.value = res.data
  getPublicationsList(res.data[0].year)
}

//点击年份时请求对应年份的文章列表
const getPublicationsList = async (year: number) => {
  if (year !== currentYear.value) {
    currentYear.value = year
    const res = await reqGetPublicationsList(year)
    if (res.status === 200) {
      publicationsList.value = res.data
    } else {
      publicationsList.value = [{
        id: 0,
        year: 0,
        title: "",
        authors: "",
        journal: "",
        volume: "",
        paperImgUrl: '',
        PDFurl: ''
      }]
    }
  }
}

onMounted(() => {
  getPublicationsYearIndex()
})
</script>

<template>
  <div class="publications-container">
    <ul class="yearbox">
      <li v-for="item in publicationsYearIndex" :key="item.id">
        <a href="#" class="yeartab" @click="getPublicationsList(item.year)">{{ item.year }}</a>
      </li>
    </ul>
    <div class="currentYear">{{ currentYear }}</div>
    <Papercard v-for="item in publicationsList" :key="item.id" :paperImgUrl="item.paperImgUrl" :PDFurl="item.PDFurl">
      <template #title>{{ item.title }}</template>
      <template #authors>{{ item.authors }}</template>
      <template #journal>{{ item.journal }}</template>
      <template #volume>{{ item.volume }}</template>
    </Papercard>
  </div>
</template>

<style lang="less" scoped>
.publications-container {
  width: 1000px;
  margin: 0 auto;

  .yearbox {
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 20px;

      .yeartab {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 18px;
      }
    }
  }

  .currentYear {
    text-align: center;
    font-size: 32px;
    height: 60px;
    width: 800px;
    margin: 0 auto 20px;
    border-bottom: 1px solid #cccccc;
  }
}
</style>