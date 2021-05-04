import axios from 'axios';

export default {
  state: {
    allVideos: [],
    idVideo: [],
  },

  actions: {
    async readVideo({ commit }) {
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=тут запрос&maxResults=2&key=AIzaSyAVSMbi0XD8TzxPXqAEpGO6-VhcxjPJkdg');
        console.log(res);
        const { data } = res;
        const idVideos = data.items.map((item) => item.id.videoId);
        const videos = data.items;
        idVideos.forEach(async (item) => {
          // получаем статистику по видео
          const resStat = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item}&key=AIzaSyAVSMbi0XD8TzxPXqAEpGO6-VhcxjPJkdg`);
          const { statistics } = resStat.data.items[0];
          console.log(statistics);
          videos.find((v) => v.id.videoId === item).statistics = statistics;
          console.log(videos, 'v');
          commit('changeAllVideos', videos);
        });

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
