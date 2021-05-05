import Vue from 'vue';
import Vuex from 'vuex';
import infoStore from './modules/infoStore';
import authStore from './modules/authStore';
import saveVideoStore from './modules/saveVideoStore';
import message from './modules/message';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    infoStore,
    authStore,
    saveVideoStore,
    message,
  },
});
