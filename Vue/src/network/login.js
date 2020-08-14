import {request} from "@/network/request";

export function loginByTel(tel, password) {
  return request({
    url: '/session/tel',
    method: 'GET',
    params: {
      tel: tel,
      password: password
    }
  })
}

export function loginByEmail(email, password) {
  return request({
    url: '/session/email',
    method: 'GET',
    params: {
      email: email,
      password: password
    }
  })
}