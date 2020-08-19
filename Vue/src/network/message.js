import {request} from "@/network/request";

export function getNoticeNum(userId) {
  return request({
    url: '/user/notice/number',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function getNotice(userId) {
  return request({
    url: '/user/notice',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function getTeamNotice(userId) {
  return request({
    url: '/user/teamNotice',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}