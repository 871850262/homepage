import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests = axios.create({
  baseURL: '/mock',
  //请求超时时间
  timeout: 5000,
})

//请求拦截器requests.interceptors.request
requests.interceptors.request.use((config) => {
  nprogress.start()
  //config：配置对象，对象里有请求头header属性
  return config
})

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data
  },
  () => {
    //终止promis链
    return Promise.reject(new Error('faile'))
  }
)

export default requests
