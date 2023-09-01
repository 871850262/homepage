/// <reference types="vite/client" />
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
declare module 'mockjs'
declare module 'nprogress'