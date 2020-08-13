import Vuex from 'vuex';
import Vue from 'vue';
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import desktop from "@/store/modules/desktop";

Vue.use(Vuex)

const state = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    desktop
  }
})

export default store