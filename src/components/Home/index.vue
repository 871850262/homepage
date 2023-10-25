<script setup lang="ts">
// 引入swiper组件
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// 引入swiper样式（按需导入）
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { onMounted, ref } from 'vue';
import { reqGetBannerList } from '@/api'

import RecentWork from '@/components/Home/RecentWork/index.vue'
import News from '@/components/Home/News/index.vue'



let bannerList = ref([{
  id: 0,
  imgUrl: ''
}])

const getBannerList = async () => {
  let res = await reqGetBannerList()
  bannerList.value = res.data
}


//生命周期钩子
onMounted(() => {
  getBannerList()
})
</script>

<template>
  <!-- Swiper -->

  <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{ delay: 4000, disableOnInteraction: false, }"
    :pagination="{ clickable: true, }" :navigation="true" :modules="[Autoplay, Navigation, Pagination]" class="mySwiper">
    <swiper-slide v-for="item in bannerList" :key="item.id"><img :src="item.imgUrl"></swiper-slide>
  </swiper>

  <div class="content">
    <RecentWork></RecentWork>
    <News></News>
  </div>
</template>

<style lang="less" scoped>
// 轮播图
.swiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  height: 100%;
  object-fit: cover;
}

.content {
  display: flex;
  width: 1200px;
  margin: 30px auto;

  justify-content: space-between;
}
</style>