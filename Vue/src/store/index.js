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
import group from "@/store/modules/group";

Vue.use(Vuex)

const state = {
  userId: '',
  username: '',
  tel: '',
  email: '',
  password: '',
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
    favorites,
    group
  }
})

export default store