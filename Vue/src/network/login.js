import {request} from "@/network/request";

export function checkInformation(username, password) {
  return request({
    url: '/user',
    method: 'GET',
    params: {
      username: username,
      password: password
    }
  })
}