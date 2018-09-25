import axios from 'axios';
import { Message } from 'element-ui';
import router from "../router/index"
const baseUrl = '/api/admin'
const instance = axios.create({
  baseUrl,
  timeout: 10000,
})
const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(baseUrl + url, { params: data }, config).then(res => {
              // console.log(res)
           if (res.data.code == 401) {
             Message.error("请重新登录，正在跳转")
             router.push("/")
           }
                resolve(res.data);
              
      }).catch(err=>{
        reject(err)
      })
    })
  },
  post(url, data, config,method='post') {
    return new Promise((resolve, reject) => {
      instance[method](baseUrl + url, data, config).then(res => {
        if(res.data.code==401) {
         Message.error("请重新登录，正在跳转")
          router.push("/")
        }
        resolve(res.data)
        }).catch(err => {
          reject(err)
      })
    })
  },
  put(url,data,config){
    return this.post(url,data,config,'put')
  },
  delete(url,data,config){
    return this.post(url,data,config,'delete')
  }
}
export const $axios = xhr
