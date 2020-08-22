import {addGroup, getFiles, getUserGroups} from "@/network/group";

export default {
  state: {
    currentGroup: null,
    groups: [],
    groupFiles: []
  },
  mutations: {
    setCurrentGroup(state, group) {
      state.currentGroup = group
    },
    setGroupFiles(state, groupFiles) {
      state.groupFiles = groupFiles
    },
    setGroups(state, groups) {
      state.groups = groups
    },
    addGroup(state, group) {
      state.groups.splice(0, 0, group)
    }
  },
  actions: {
    addGroup(context, payload) {
      addGroup(context.getters.userId, payload.groupName).then(res => {
        context.commit('addGroup', res)
        context.commit('setCurrentGroup', res)
        context.dispatch('updateGroupFiles')
      }).catch(err => {
        console.log(err)
      })
    },
    setGroups(context) {
      getUserGroups(context.getters.userId).then(res => {
        context.commit('setGroups', res)
      }).catch(err => {
        console.log(err)
      })
    },
    updateGroupFiles(context) {
      getFiles(context.getters.currentGroup.id).then(res => {
        context.commit('setGroupFiles', res)
      }).then(err => {
        console.log(err)
      })
    }
  },
  getters: {
    currentGroup(state) {
      return state.currentGroup
    },
    groups(state) {
      return state.groups
    },
    groupFiles(state) {
      return state.groupFiles
    }
  }
}