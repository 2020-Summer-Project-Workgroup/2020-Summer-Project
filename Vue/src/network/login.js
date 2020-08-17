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

export function retrieveUserByTel(tel) {
  return request({
    url: '/user/tel',
    method: 'GET',
    params: {
      tel: tel
    }
  })
}

export function retrieveUserByEmail(email) {
  return request({
    url: '/user/email',
    method: 'GET',
    params: {
      email: email
    }
  })
}