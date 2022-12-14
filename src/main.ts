import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { globalRegister } from './global/index'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 全局注册一些东西
app.use(globalRegister)

app.use(store)
setupStore()
// path: /user => user
app.use(router)

app.mount('#app')
