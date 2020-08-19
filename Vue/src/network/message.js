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

export function readNotice(userId, noticeId) {
  return request({
    url: '/user/notice/read',
    method: 'PUT',
    params: {
      userId: userId,
      noticeId: noticeId
    }
  })
}

export function readTeamNotice(userId, noticeId) {
  return request({
    url: '/user/teamNotice/read',
    method: 'PUT',
    params: {
      userId: userId,
      noticeId: noticeId
    }
  })
}

export function updateTeamNoticeStatus(noticeId, type) {
  return request({
    url: '/notice/team',
    method: 'PUT',
    params: {
      noticeId: noticeId,
      type: type
    }
  })
}