import {request} from "@/network/request";

export async function retrieveUserByTel(tel) {
  return request({
    url: '/user/tel',
    method: 'GET',
    params: {
      tel: tel
    }
  })
}

export async function retrieveUserByEmail(email) {
  return request({
    url: '/user/email',
    method: 'GET',
    params: {
      email: email
    }
  })
}

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

export function updateTelByEmail(email, tel) {
  return request({
    url: '/user/email/tel',
    method: 'PUT',
    params: {
      email: email,
      tel: tel
    }
  })
}

export function updateEmailByTel(tel, email) {
  return request({
    url: '/user/tel/email',
    method: 'PUT',
    params: {
      tel: tel,
      email: email
    }
  })
}