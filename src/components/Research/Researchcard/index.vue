<script setup lang="ts">

</script>

<template>
  <div class="body">
    <h3>
      <slot name="title"></slot>
    </h3>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.body {
  margin: 20px 0 !important;
}
</style>