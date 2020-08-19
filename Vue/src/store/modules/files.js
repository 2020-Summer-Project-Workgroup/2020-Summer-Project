export default {
  state: {
    files: [
      {
        id: "5f3d23777086051e66f7a1b2",
        title: "LOL",
        content:"Hello World",
        time:"2020-08-19T13:04:55.166+00:00",
        comments:[],
        access:{
          '5f3d23697086051e66f7a1b0': "Owner"
        }
      }
    ]
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