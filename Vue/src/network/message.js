import {request} from "@/network/request";

export function getNoticeNum(userId) {
  return request({
    url: '/api/user/notice/number',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function getNotice(userId) {
  return request({
    url: '/api/user/notice',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function getTeamNotice(userId) {
  return request({
    url: '/api/user/teamNotice',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function readNotice(userId, noticeId) {
  return request({
    url: '/api/user/notice/read',
    method: 'PUT',
    params: {
      userId: userId,
      noticeId: noticeId
    }
  })
}

export function readTeamNotice(userId, noticeId) {
  return request({
    url: '/api/user/teamNotice/read',
    method: 'PUT',
    params: {
      userId: userId,
      noticeId: noticeId
    }
  })
}

export function updateTeamNoticeStatus(noticeId, type) {
  return request({
    url: '/api/notice/team',
    method: 'PUT',
    params: {
      noticeId: noticeId,
      type: type
    }
  })
}