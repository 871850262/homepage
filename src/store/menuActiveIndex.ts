import { ref } from "vue";
import { defineStore } from 'pinia'

export const menuActiveIndexStore = defineStore('menuAactiveIndex', () => {
  const menuAactiveIndex = ref('/')
  function changeActiveIndex(toPath: string) {
    return menuAactiveIndex.value = toPath
  }
  return { menuAactiveIndex, changeActiveIndex }
})