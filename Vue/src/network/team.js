import {request} from "@/network/request";

export function searchUser(userId) {
  return request({
    url: '/user/regex',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function inviteUser(userId, groupId) {
  return request({
    url: '/user/notice/team',
    method: 'POST',
    params: {
      userId: userId,
      groupId: groupId
    }
  })
}