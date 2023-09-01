import App from './App.vue'
import { createApp, } from 'vue'
import './style.css'
import router from './router'
import './mock/mockServe'
import 'amfe-flexible'
import { createPinia } from 'pinia'



const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
