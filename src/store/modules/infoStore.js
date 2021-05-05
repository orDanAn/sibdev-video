import axios from 'axios';
import Vue from 'vue';
import API_YOUTUBE from '../../basUrl';

const API_KEY = 'AIzaSyAVSMbi0XD8TzxPXqAEpGO6-VhcxjPJkdg';

export default {
  state: {
    allVideos: [],
    totalResults: 0,
    requstText: '',
  },

  actions: {
    async readVideo({ commit }, { req, maxRes = 12, sort = 'relevance' }) {
      try {
        const res = await axios.get(`${API_YOUTUBE}/search?part=snippet&order=${sort}&q=${req}&type=video&videoLicense=creativeCommon&maxResults=${maxRes}&key=${API_KEY}`);
        console.log(res);
        const { data } = res;
        const idVideos = data.items.map((item) => item.id.videoId);
        const videos = data.items;
        idVideos.forEach(async (item, idx) => {
          // получаем статистику по видео
          const resStat = await axios.get(`${API_YOUTUBE}/videos?part=statistics&id=${item}&key=${API_KEY}`);
          const { statistics } = resStat.data.items[0];
          console.log(statistics);
          videos.find((v) => v.id.videoId === item).statistics = statistics;
          if (idVideos.length - 1 === idx) {
            commit('changeAllVideos', videos);
          }
        });
        commit('changeRequstText', req);
        commit('changeTotalResults', data.pageInfo.totalResults);
        console.log(data);
      } catch (e) {
        console.error(e);
        Vue.prototype.$message.error(e.message);
      }
    },

  },

  mutations: {
    changeAllVideos(state, videos) {
      state.allVideos = videos;
    },
    changeTotalResults(state, result) {
      state.totalResults = result;
    },
    changeRequstText(state, text) {
      state.requstText = text;
    },
  },

  getters: {
    getAllVideos(state) {
      return state.allVideos;
    },
    getTotalResults(state) {
      return state.totalResults;
    },
    getRequstText(state) {
      return state.requstText;
    },
  },
};
