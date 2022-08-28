import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import hfRequest from './service'

const app = createApp(App)

app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

// hfRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hfRequest
  .get<DataType>({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log('请求成功')
    console.log(res)
  })
  .catch((err) => {
    console.log('请求失败')
    console.log(err)
  })
