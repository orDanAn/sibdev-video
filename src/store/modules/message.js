export default {

  state: {
    loading: false,
  },

  mutations: {
    changeLoading(state, value) {
      state.loading = value;
    },
  },

  getters: {
    getLoading(state) {
      return state.loading;
    },
  },
};
