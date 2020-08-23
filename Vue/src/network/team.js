import {request} from "@/network/request";

export function searchUser(userId) {
  return request({
    url: '/api/user/regex',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function inviteUser(userId, groupId) {
  return request({
    url: '/api/user/notice/team',
    method: 'POST',
    params: {
      userId: userId,
      groupId: groupId
    }
  })
}