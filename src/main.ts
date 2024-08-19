import 'normalize.css/normalize.css'
import 'virtual:uno.css'
import '@/assets/styles/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { setupDirectives } from './directives'

const app = createApp(App)

// 安装自定义指令
setupDirectives(app)

app.mount('#app')
