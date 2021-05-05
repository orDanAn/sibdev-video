import Vue from 'vue';
import firebase from 'firebase/app';

export default {
  state: {

  },

  actions: {
    async login(_, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },
    async register({ dispatch }, { email, password }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            name: email,
          });
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },
    // eslint-disable-next-line consistent-return
    async getUid() {
      try {
        const user = await firebase.auth().currentUser;
        return user ? user.uid : null;
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },
    async logout() {
      try {
        await firebase.auth().signOut();
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },
  },
};
