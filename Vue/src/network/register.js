import {request} from "@/network/request";

export function addUserByTel(tel, password) {
  return request({
    url: '/user/tel',
    method: 'POST',
    params: {
      tel: tel,
      password: password
    }
  })
}

export function addUserByEmail(email, password) {
  return request({
    url: '/user/email',
    method: 'POST',
    params: {
      email: email,
      password: password
    }
  })
}

export function sendCodeToTel(tel) {
  return request({
    url: '/code/tel',
    method: 'POST',
    params: {
      tel: tel
    }
  })
}

export function sendCodeToEmail(email) {
  return request({
    url: '/code/email',
    method: 'POST',
    params: {
      email: email
    }
  })
}