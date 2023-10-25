import App from './App.vue'
import { createApp, } from 'vue'
import './style.css'
import router from './router'
import { createPinia } from 'pinia'
// import 'amfe-flexible'


const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')

