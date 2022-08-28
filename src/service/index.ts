// service 统一出口
import HFRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hfRequest = new HFRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('111')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('222')
      return err
    },
    responseInterceptor: (res) => {
      console.log('333')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('444')
      return err
    }
  }
})
export default hfRequest
