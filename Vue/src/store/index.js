import Vuex from 'vuex';
import Vue from 'vue';
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex)

const state = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store