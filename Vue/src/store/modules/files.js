export default {
  state: {
    files: [
      {
        id: "1",
        title: "LOL",
        content:"Hello World",
        time:"2020-08-19T13:04:55.166+00:00",
        comments:[],
        access:{
          '5f3d23697086051e66f7a1b0': "Owner"
        }
      },
      {
        id: "2",
        title: "妈妈说学无止境，我不信，你信了吗？",
        content:"HelloADADAUSHFKDSBHAFGIUHGIUAHGIABHIAGHIUABFUIBASUIGFBAIFBUIWBFIUbfi",
        time:"2020-08-19T13:04:55.166+00:00",
        comments:[],
        access:{
          '5f3d23697086051e66f7a1b0': "Owner"
        }
      },
      {
        id: "3",
        title: "兰亭集序",
        content:"永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。",
        time:"2020-08-19T13:04:55.166+00:00",
        comments:[],
        access:{
          '5f3d23697086051e66f7a1b0': "Owner"
        }
      }
    ],
    trash: [],
    favorites: []
  },
  mutations: {
    setFiles(state, files) {
      state.files = files
    },
    moveToTrash(state, index) {
      state.trash.splice(0, 0, state.files[index])
      state.files.splice(index, 1)
    },
    recovery(state, index) {
      state.files.splice(0, 0, state.trash[index])
      state.trash.splice(index, 1)
    }
  },
  actions: {

  },
  getters: {
    files(state) {
      return state.files
    },
    trash(state) {
      return state.trash
    }
  }
}