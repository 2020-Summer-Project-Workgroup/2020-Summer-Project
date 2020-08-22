import {request} from "@/network/request";

export function addGroup(userId, groupName) {
  return request({
    url: '/group',
    method: 'POST',
    params: {
      userId: userId,
      groupName: groupName
    }
  })
}

export function addMember(groupId, memberId) {
  return request({
    url: '/group/members',
    method: 'PUT',
    params: {
      groupId: groupId,
      memberId: memberId
    }
  })
}

export function addFile(groupId, ownerId) {
  return request({
    url: '/group/files/plain',
    method: 'POST',
    params: {
      groupId: groupId,
      ownerId: ownerId
    }
  })
}

export function makeFilePublic(groupId, fileId) {
  return request({
    url: '/group/files/outer',
    method: 'PUT',
    params: {
      groupId: groupId,
      fileId: fileId
    }
  })
}

export function updateFileRights(groupId, fileId, viewMembers, editMembers) {
  return request({
    url: '/group/files/inner',
    method: 'PUT',
    params: {
      groupId: groupId,
      fileId: fileId,
      viewMembers: viewMembers,
      editMembers: editMembers
    }
  })
}

export function getFiles(groupId) {
  return request({
    url: '/group/files',
    method: 'GET',
    params: {
      groupId: groupId
    }
  })
}

export function getMembers(groupId) {
  return request({
    url: '/group/members',
    method: 'GET',
    params: {
      groupId: groupId
    }
  })
}

export function getFileRights(groupId, fileId) {
  return request({
    url: '/group/rights',
    method: 'GET',
    params: {
      groupId: groupId,
      fileId: fileId
    }
  })
}