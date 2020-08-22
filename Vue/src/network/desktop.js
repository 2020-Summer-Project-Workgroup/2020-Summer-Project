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

export function updatePassword(id, oldPassword, newPassword) {
  return request({
    url: '/user/password',
    method: 'PUT',
    params: {
      id: id,
      oldPassword: oldPassword,
      newPassword: newPassword
    }
  })
}

export function updateUserInfo(id, field, type) {
  return request({
    url: '/user/info',
    method: 'PUT',
    params: {
      id: id,
      field: field,
      type: type
    }
  })
}

export function loginMessage(username) {
  const msg = '用户 ' + username + ' 使用了轻松文档CasualDoc'
  return request({
    baseURL: '/api',
    method: 'POST',
    params: {
      key: '1416c2a3-5906-4a1e-a6f8-41fa10633995',
      msgtype: "text",
      text: {
        "content": msg
      }
    }
  })
}
