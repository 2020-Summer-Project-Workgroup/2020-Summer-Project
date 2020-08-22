import {addComment, deleteComment, newFile, recycleFile, updateFile} from "@/network/edit";
import {getUserFavoriteFiles, getUserFiles, getUserRecycleBin} from "@/network/files";

export default {
  state: {
    files: [],
    recycleBin: [],
    favorites: [
      {
        "id": "5f414e81d7748a4b469d8f0b",
        "title": "致用户的一封信",
        "content": "<p>感谢您使用&ldquo;轻松文档 CasualDoc&rdquo;在线文档编辑服务，祝您使用愉快！</p>\n",
        "time": "2020-08-22T16:57:37.822+00:00",
        "comments": [

        ],
        "access": {
          "5f3f825884d74407402cf6e7": "Owner"
        },
        "trashed": false
      }
    ]
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
      state.files.splice(0, 0, state.recycleBin[index])
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
    recovery(context, index) {
      recycleFile(context.getters.recycleBin[index].id)
      context.commit('recovery', index)
    },
    moveToTrash(context, index) {
      recycleFile(context.getters.files[index].id)
      context.commit('moveToTrash', index)
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
    },
    deleteComment(context, payload) {
      deleteComment(context.getters.currentFile.id, payload.commentId).then(res => {
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
    recycleBin(state) {
      return state.recycleBin
    },
    favorites(state) {
      return state.favorites
    }
  }
}