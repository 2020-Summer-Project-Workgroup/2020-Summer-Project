import Vuex from 'vuex';
import Vue from 'vue';
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import desktop from "@/store/modules/desktop";
import team from "@/store/modules/team";
import message from "@/store/modules/message";
import files from "@/store/modules/files";
import favorites from "@/store/modules/favorites";

Vue.use(Vuex)

const state = {
  userId: '',
  username: '',
  tel: '',
  email: '',
  password: '',
  currentGroup: '',
  currentFile: {}
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    desktop,
    team,
    message,
    files,
    favorites
  }
})

export default store