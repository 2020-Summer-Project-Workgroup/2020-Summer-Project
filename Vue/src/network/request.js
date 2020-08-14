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
  const instance = axios.create({
    baseURL: 'http://39.97.237.71:8036',
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