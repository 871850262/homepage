<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

</script>

<template>
  <div class="peoplecardbody">
    <el-space direction="vertical" alignment="flex-start">
      <el-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
        <template #template>
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
          <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            ">
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
        <template #default>
          <el-card :body-style="{ padding: '0px', marginBottom: '0px' }">
            <img src="../../../assets/img2.png" class="image" />
            <div style="padding: 10px">
              <div>雷宇</div>
              <div>硕士研究生</div>
            </div>
          </el-card>
        </template>
      </el-skeleton>
    </el-space>
  </div>
</template>

<style lang="less" scoped>
.peoplecardbody {
  margin: 0 20px 20px 0;
  text-align: center;
}
</style>