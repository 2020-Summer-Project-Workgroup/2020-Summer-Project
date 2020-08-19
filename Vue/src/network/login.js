import {request} from "@/network/request";

export function loginByTel(tel, password) {
  return request({
    url: '/session/tel',
    method: 'POST',
    params: {
      tel: tel,
      password: password
    }
  })
}

export function loginByEmail(email, password) {
  return request({
    url: '/session/email',
    method: 'POST',
    params: {
      email: email,
      password: password
    }
  })
}