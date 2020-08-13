export default {
  state: {
    showUserSpace: false,
    showChangePassword: true
  },
  mutations: {
    changePasswordToUserSpace(state) {
      state.showUserSpace = true
      state.showChangePassword = false
    },
    userSpaceToChangePassword(state) {
      state.showUserSpace = false
      state.showChangePassword = true
    },
    closeUserSpace(state) {
      state.showUserSpace = false
    },
    closeChangePassword(state) {
      state.showChangePassword = false
    },
    openUserSpace(state) {
      state.showUserSpace = true
    }
  },
  getters: {
    showUserSpace(state) {
      return state.showUserSpace
    },
    showChangePassword(state) {
      return state.showChangePassword
    }
  }
}