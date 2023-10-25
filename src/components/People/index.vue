<script setup lang="ts">
import Peoplecard from './Peoplecard/index.vue'
import { reqGetPeopleList } from '@/api/index'
import { onMounted, ref } from "vue";


let professors = ref([] as any[])
let masters = ref([] as any[])
let doctors = ref([] as any[])
let undergraduates = ref([] as any[])

//获取人员信息列表
const getPeopleList = async () => {
  const res = await reqGetPeopleList()
  if (res.status === 200) {
    res.data.forEach((element: any) => {
      switch (element.type) {
        case '教授':
          professors.value.push(element)
          break;
        case '博士研究生':
          doctors.value.push(element)
          break;
        case '硕士研究生':
          masters.value.push(element)
          break;
        case '本科生':
          undergraduates.value.push(element)
          break;
        default:
          break;
      }
    });
  }
}

onMounted(() => {
  getPeopleList()
})
</script>

<template>
  <div class="peoplebody">
    <div class="peopleType" v-if="professors.length > 0">
      <h3>教授</h3>
      <div class="peopleList">
        <Peoplecard v-for="item in professors" :name="item.name" :type="item.type" />
      </div>
    </div>
    <div class="peopleType" v-if="doctors.length > 0">
      <h3>博士研究生</h3>
      <div class="peopleList">
        <Peoplecard v-for="item in doctors" :name="item.name" :type="item.type" />
      </div>

    </div>
    <div class="peopleType" v-if="masters.length > 0">
      <h3>硕士研究生</h3>
      <div class="peopleList">
        <Peoplecard v-for="item in masters" :name="item.name" :type="item.type" />
      </div>

    </div>
    <div class="peopleType" v-if="undergraduates.length > 0">
      <h3>本科生</h3>
      <div class="peopleList">
        <Peoplecard v-for="item in undergraduates" :name="item.name" :type="item.type" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.peoplebody {
  width: 1000px;
  margin: 0 auto;

  h3 {
    font-size: 21px;
    margin-bottom: 10px;
  }

  .peopleType {
    margin-bottom: 20px;

    .peopleList {
      display: flex;
    }
  }
}
</style>