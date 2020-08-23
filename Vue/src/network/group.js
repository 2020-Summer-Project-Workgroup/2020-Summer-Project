import {request} from "@/network/request";

export function addGroup(userId, groupName) {
  return request({
    url: '/api/group',
    method: 'POST',
    params: {
      userId: userId,
      groupName: groupName
    }
  })
}

export function addMember(groupId, memberId) {
  return request({
    url: '/api/group/members',
    method: 'PUT',
    params: {
      groupId: groupId,
      memberId: memberId
    }
  })
}

export function addFile(groupId, ownerId) {
  return request({
    url: '/api/group/files/plain',
    method: 'POST',
    params: {
      groupId: groupId,
      ownerId: ownerId
    }
  })
}

export function makeFilePublic(groupId, fileId) {
  return request({
    url: '/api/group/files/outer',
    method: 'PUT',
    params: {
      groupId: groupId,
      fileId: fileId
    }
  })
}

export function updateFileRights(groupId, fileId, viewMembers, editMembers) {
  return request({
    url: '/api/group/files/inner',
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
    url: '/api/group/files',
    method: 'GET',
    params: {
      groupId: groupId
    }
  })
}

export function getMembers(groupId) {
  return request({
    url: '/api/group/members',
    method: 'GET',
    params: {
      groupId: groupId
    }
  })
}

export function getFileRights(groupId, fileId) {
  return request({
    url: '/api/group/rights',
    method: 'GET',
    params: {
      groupId: groupId,
      fileId: fileId
    }
  })
}

export function getUserGroups(userId) {
  return request({
    url: '/api/user/groups',
    method: 'GET',
    params: {
      userId: userId
    }
  })
}