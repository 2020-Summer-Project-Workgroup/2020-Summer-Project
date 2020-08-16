import axios from 'axios';

/**
 * when use it in outer module
 * (maybe you can add a layer to manage url)
 * ```javascript
 * import {request} from 'network/request.js'
 * request({
 *   url: 8036
 * }).then(res => {
 *   // deal with response
 * }).catch(err => {
 *   // deal with exception
 * })
 * ```
 * @param config configure object
 * @returns {AxiosPromise}
 */
export function request(config) {
  // axios配置
  axios.defaults.withCredentials = true; // 携带cookie
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // 判断是否为ajax请求
  const instance = axios.create({
    baseURL: 'http://localhost:8036',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })
  return instance(config)
}