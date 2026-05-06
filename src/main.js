import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: false,
    offset: 0,
})

const app = createApp(App)
app.use(router)
app.mount('#app')