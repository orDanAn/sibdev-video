import axios from 'axios';

export default {
  state: {
    allVideos: [],
  },

  actions: {
    async readVideo({ commit }) {
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=тут запрос&maxResults=2&key=AIzaSyAVSMbi0XD8TzxPXqAEpGO6-VhcxjPJkdg');
        console.log(res);
        const { data } = res;
        const videos = data.items.map((item) => item.snippet);
        commit('changeAllVideos', videos);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    },
  },

  mutations: {
    changeAllVideos(state, videos) {
      state.allVideos = videos;
    },
  },

  getters: {
    getAllVideos(state) {
      return state.allVideos;
    },
  },
};
