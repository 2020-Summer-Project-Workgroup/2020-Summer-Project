import { request } from "@/network/request";

export function newFile(userId, title, content) {
  console.log('has run.')
  return request({
    url: '/file/user',
    method: 'POST',
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
    url: '/file/user/all',
    method: 'get',
    params: {
      userId: userId,
      fileId: fileId
    }
  })
}

export function getFavorite(userId) {
  return request({
    url: '/file/user/favorite',
    method: 'get',
    params: {
      userId: userId
    }
  })
}

export function updateFavorite(userId, fileId) {
  return request({
    url: '/file/user/favorite',
    method: 'put',
    params: {
      userId: userId,
      fileId: fileId
    }
  })
}

export function recycleFile(fileId) {
  return request({
    url: '/file/user/recycle',
    method: 'put',
    params: {
      fileId: fileId
    }
  })
}

export function getRecycle(userId) {
  return request({
    url: '/user/recycle',
    method: 'get',
    params: {
      userId: userId
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
    url: '/comment/file',
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
    url: '/comment/file',
    method: 'delete',
    params: {
      fileId: fileId,
      commentId: commentId
    }
  })
}
