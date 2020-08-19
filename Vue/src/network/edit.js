import {request} from "@/network/request";

export function newFile(userId, title, content) {
  return request({
    url: '/file/user',
    method: 'post',
    params: {
      userId: userId,
      title: title,
      content: content
    }
  })
}

export function updateFile(userId, fileId, title, content) {
  return request({
    url: '/file/user',
    method: 'put',
    params: {
      userId: userId,
      fileId: fileId,
      title: title,
      content: content
    }
  })
}

export function getFile(userId, fileId) {
  return request({
    url: '/file/user',
    method: 'get',
    params: {
      userId: userId,
      fileId: fileId
    }
  })
}

export function recycleFile(fileId) {
  return request({
    url: '/file/user',
    method: 'post',
    params: {
      fileId: fileId
    }
  })
}

export function deleteFile(userId, fileId) {
  return request({
    url: '/file/user',
    method: 'delete',
    params: {
      userId: userId,
      fileId: fileId
    }
  })
}

export function addComment(fileId, reviewerId, content) {
  return request({
    url: '/comment/user',
    method: 'post',
    params: {
      fileId: fileId,
      reviewerId: reviewerId,
      content: content
    }
  })
}

export function deleteComment(fileId, commentId) {
  return request({
    url: '/comment/user',
    method: 'delete',
    params: {
      fileId: fileId,
      commentId: commentId
    }
  })
}
