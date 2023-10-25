<script setup lang="ts">
// import { defineProps } from "vue";
const props = defineProps({ title: String, content: String })
</script>

<template>
  <div class="body">
    <h3>
      {{ props.title }}
    </h3>
    <p>
      {{ props.content }}
    </p>
  </div>
</template>

<style lang="less" scoped>
.body {
  margin-top: 20px !important;

  h3 {
    font-size: 21px;
  }

  p {
    font-size: 18px;
  }
}
</style>