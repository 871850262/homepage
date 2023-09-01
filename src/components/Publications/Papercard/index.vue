<script setup lang="ts">
const props = defineProps(['paperImgUrl', 'PDFurl'])
function openPDF(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="paperCard-container">
    <h3 @click="openPDF(PDFurl)">
      <slot name="title"></slot>
    </h3>
    <p class="authors">
      <slot name="authors"></slot>
    </p>
    <em class="journal">
      <slot name="journal"></slot>
    </em> <span class="volume">
      <slot name="volume"></slot>
    </span>
    <img :src="props.paperImgUrl" alt="" class="paperimg">
  </div>
</template>

<style lang="less" scoped>
.paperCard-container {
  margin: 10px 0;

  h3 {
    &:hover {
      cursor: pointer;
      color: var(--el-menu-active-color);
    }
  }

  .paperimg {
    display: block;
    height: 160px;
    margin: 10px auto;
    margin-bottom: 20px;
  }
}
</style>