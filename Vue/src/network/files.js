import {request} from "@/network/request";

export function getUserFiles(userId) {
  return request({
    url: '/file/user/all',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function getUserFavoriteFiles(userId) {
  return request({
    url: '/file/user/favorite/all',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}

export function getUserRecycleBin(userId) {
  return request({
    url: '/file/user/recycle/all',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}