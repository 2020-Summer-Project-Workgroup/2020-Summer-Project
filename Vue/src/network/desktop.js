import {request} from "@/network/request";

export function checkPasswordByTel(tel, password) {
  return request({
    url: '/user/tel',
    method: 'GET',
    params: {
      tel: tel,
      password: password
    }
  })
}

export function checkPasswordByEmail(email, password) {
  return request({
    url: '/user/email',
    method: 'GET',
    params: {
      email: email,
      password: password
    }
  })
}

export function updatePasswordByTel(tel, password) {
  return request({
    url: '/user/tel',
    method: 'PUT',
    params: {
      tel: tel,
      password: password
    }
  })
}

export function updatePasswordByEmail(email, password) {
  return request({
    url: '/user/email',
    method: 'PUT',
    params: {
      email: email,
      password: password
    }
  })
}