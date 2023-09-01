<script setup lang="ts">
import Peoplecard from './Peoplecard/index.vue'
</script>

<template>
  <div class="peoplebody">
    <div class="prof">
      <h3>Professors</h3>
      <div class="prof-container">
        <Peoplecard />
        <Peoplecard />
      </div>
    </div>
    <div class="std">
      <h3>Students</h3>
      <div class="std-container">
        <Peoplecard />
        <Peoplecard />
        <Peoplecard />
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.peoplebody {
  width: 1000px;
  margin: 0 auto;

  h3 {
    margin-bottom: 10px;
  }

  .prof-container,
  .std-container {
    display: flex;

  }
}
</style>