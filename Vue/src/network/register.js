import {request} from "@/network/request";

export function addUserByTel(tel, password) {
  return request({
    url: '/users/tel',
    method: 'POST',
    params: {
      tel: tel,
      password: password
    }
  })
}