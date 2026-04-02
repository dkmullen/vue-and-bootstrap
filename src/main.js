import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './scss/styles.scss'
import GlobalComponents from './globals'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(GlobalComponents)

app.mount('#app')
