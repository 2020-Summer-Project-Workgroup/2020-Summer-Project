import {request} from "@/network/request";

export function updatePasswordByTel(tel, password) {
  return request({
    url: '/user/tel/password',
    method: 'PUT',
    params: {
      tel: tel,
      password: password
    }
  })
}

export function updatePasswordByEmail(email, password) {
  return request({
    url: '/user/email/password',
    method: 'PUT',
    params: {
      email: email,
      password: password
    }
  })
}

export function updateUsernameByTel(tel, username) {
  return request({
    url: '/user/tel/username',
    method: 'PUT',
    params: {
      tel: tel,
      username: username
    }
  })
}

export function updateUsernameByEmail(email, username) {
  return request({
    url: '/user/email/username',
    method: 'PUT',
    params: {
      email: email,
      username: username
    }
  })
}