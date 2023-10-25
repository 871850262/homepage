import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import postcsspxtoviewport from 'postcss-px-to-viewport'
// import postCssPxToRem from "postcss-pxtorem"


const plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  )
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ...plugins,
    vue(),
  ],
  css: {
    postcss: {
      plugins: [
        // postCssPxToRem({
        //   viewportWidth: 1920,  // 视窗的宽度，对应的是我们设计稿的宽度.
        //   // viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
        //   unitPrecision: 5, // 保留几位小数，指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        //   remUnit: 192,
        //   selectorBlackList: ['el-menu'], // 指定不需要转换的类
        //   minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位.
        //   mediaQuery: false, // 允许在媒体查询中转换`px`
        //   rootValue: 192, // 1rem的大小
        //   propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        // })
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 2560, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          exclude: [/font-size/],
          landscape: false // 是否处理横屏情况
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
