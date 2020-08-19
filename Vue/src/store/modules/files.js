export default {
  state: {
    files: []
  },
  mutations: {
    setFiles(state, files) {
      state.files = files
    }
  },
  actions: {

  },
  getters: {
    files(state) {
      return state.files
    }
  }
}