export default {
  state: {
    favorites: []
  },
  mutations: {
    setFavorites(state, favorites) {
      state.favorites = favorites
    }
  },
  actions: {

  },
  getters: {
    favorites(state) {
      return state.favorites
    }
  }
}