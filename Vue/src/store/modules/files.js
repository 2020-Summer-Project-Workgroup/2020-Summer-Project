import {addComment, newFile, updateFile} from "@/network/edit";
import {getUserFavoriteFiles, getUserFiles, getUserRecycleBin} from "@/network/files";

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
    recycleBin: [],
    favorites: []
  },
  mutations: {
    setUserFiles(state, files) {
      state.files = files
    },
    setUserFavoriteFiles(state, files) {
      state.favorites = files
    },
    setRecycleBin(state, files) {
      state.recycleBin = files
    },
    moveToTrash(state, index) {
      state.recycleBin.splice(0, 0, state.files[index])
      state.files.splice(index, 1)
    },
    recovery(state, index) {
      state.files.splice(0, 0, state.trash[index])
      state.recycleBin.splice(index, 1)
    },
    createFile(state, file) {
      state.files.splice(0, 0, file)
    },
    updateFile(state, file) {
      for (let i = 0; i < state.files.length; i++) {
        if (state.files[i].id === file.id) {
          state.files[i] = file
          break
        }
      }
    }
  },
  actions: {
    setUserFiles(context) {
      getUserFiles(context.getters.userId).then(res => {
        context.commit('setUserFiles', res)
      }).catch(err => {
        console.log(err)
      })
    },
    setUserFavoriteFiles(context) {
      getUserFavoriteFiles(context.getters.userId).then(res => {
        context.commit('setUserFavoriteFiles', res)
      }).catch(err => {
        console.log(err)
      })
    },
    setRecycleBin(context) {
      getUserRecycleBin(context.getters.userId).then(res => {
        context.commit('setRecycleBin', res)
      }).catch(err => {
        console.log(err)
      })
    },
    createFile(context, payload) {
      newFile(context.getters.userId, payload.title, payload.content).then(res => {
        context.commit('createFile', res)
        context.commit('setCurrentFile', res)
      }).catch(err => {
        console.log(err)
      })
    },
    updateFile(context, payload) {
      updateFile(context.getters.userId,
        context.getters.currentFile.id,
        payload.title, payload.content).then(res => {
          context.commit('updateFile', res)
          context.commit('setCurrentFile', res)
      }).catch(err => {
        console.log(err)
      })
    },
    addComment(context, payload) {
      addComment(context.getters.currentFile.id,
        context.getters.userId,
        payload.comment).then(res => {
          context.commit('updateFile', res)
          context.commit('setCurrentFile', res)
      }).catch(err => {
        console.log(err)
      })
    }
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