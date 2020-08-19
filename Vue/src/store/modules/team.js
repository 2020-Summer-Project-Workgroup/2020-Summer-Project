export default {
  state: {
    showInvite: true,
    showManageMember: false,
    showPrivSetting: false,
    showCreateTeam: false
  },
  mutations: {
    openManageMember(state) {
      state.showManageMember = true
    },
    closeManageMember(state) {
      state.showManageMember = false
    },
    openPrivSetting(state) {
      state.showPrivSetting = true
    },
    closePrivSetting(state) {
      state.showPrivSetting = false
    },
    openCreateTeam(state) {
      state.showCreateTeam = true
    },
    closeCreateTeam(state) {
      state.showCreateTeam = false
    },
    closeInvite(state) {
      state.showInvite = false
    },
    changeInviteToMember(state) {
      state.showInvite = false
      state.showManageMember = true
    },
    changeMemberToInvite(state) {
      state.showManageMember = false
      state.showInvite = true
    }
  },
  getters: {
    showInvite(state) {
      return state.showInvite
    },
    showManageMember(state) {
      return state.showManageMember
    },
    showPrivSetting(state) {
      return state.showPrivSetting
    },
    showCreateTeam(state) {
      return state.showCreateTeam
    }
  }
}