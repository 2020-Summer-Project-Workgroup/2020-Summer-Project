export default {
  state: {
    showUserSpace: false,
    showChangePassword: false,
    showAddEmail: false,
    showAddTel: false
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
    addEmailToUserSpace(state) {
      state.showUserSpace = true
      state.showAddEmail = false
    },
    userSpaceToAddEmail(state) {
      state.showUserSpace = false
      state.showAddEmail = true
    },
    addTelToUserSpace(state) {
      state.showUserSpace = true
      state.showAddTel = false
    },
    userSpaceToAddTel(state) {
      state.showUserSpace = false
      state.showAddTel = true
    },
    closeUserSpace(state) {
      state.showUserSpace = false
    },
    closeChangePassword(state) {
      state.showChangePassword = false
    },
    closeAddEmail(state) {
      state.showAddEmail = false
    },
    closeAddTel(state) {
      state.showAddTel = false
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
    },
    showAddEmail(state) {
      return state.showAddEmail
    },
    showAddTel(state) {
      return state.showAddTel
    },
  }
}