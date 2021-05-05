/* eslint-disable consistent-return */
import firebase from 'firebase/app';
import Vue from 'vue';

export default {
  state: {
    saveRequestVideo: [],
  },

  actions: {
    async saveRequest({ dispatch }, saveReq) {
      try {
        const uid = await dispatch('getUid');
        const request = await firebase.database()
          .ref(`/users/${uid}/requests`)
          .push(saveReq);
        return { saveReq, id: request.key };
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },

    async fetchSaveRequest({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');
        const request = (
          await firebase
            .database()
            .ref(`/users/${uid}/requests`)
            .once('value')
        ).val() || {};
        commit('changeSaveRequestVideo', Object.keys(request).map((key) => ({
          ...request[key],
          id: key,
        })));
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },

    async updateSaveRequest({ dispatch }, { saveReq, id }) {
      try {
        const uid = await dispatch('getUid');
        await firebase
          .database()
          .ref(`/users/${uid}/requests`)
          .child(id)
          .update(saveReq);
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },

    async deleteSaveRequest({ dispatch }, id) {
      try {
        const uid = await dispatch('getUid');
        await firebase
          .database()
          .ref(`/users/${uid}/requests`)
          .child(id)
          .remove();
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },
  },

  mutations: {
    changeSaveRequestVideo(state, request) {
      state.saveRequestVideo = request;
    },
  },

  getters: {
    getSaveRequestVideo(state) {
      return state.saveRequestVideo;
    },
  },
};
