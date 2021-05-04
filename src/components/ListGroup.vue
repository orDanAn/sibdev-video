<template>
  <div class="container-card_list">
    <div class="card" v-for="card in getAllVideos" :key="card.id.videoId">
      <a href="#"
        @click="startVideo(card.id.videoId)"
      >
        <img :src="card.snippet.thumbnails.default.url" alt="кадр из видео" class="card__img">
      </a>
      <div class='card__text-container'>
        <p class="card__text">
          {{card.snippet.title}}
        </p>
        <p class="card__text _gray">
          {{card.snippet.description}}
        </p>
        <p class="card__text _gray">
          {{card.statistics.viewCount}} просмотров
        </p>
      </div>
    </div>
    <modal-video
      :showVideo="showVideo"
      :activeVideo="activeVideo"
      @close-modal="closeModalVideo"
    >
    </modal-video>
  </div>
</template>

<script>
import videoImg from '@/assets/images/Video.png';
import { mapGetters } from 'vuex';
import ModalVideo from './ModalVideo.vue';

export default {
  components: { ModalVideo },
  data() {
    return {
      videoImg,
      showVideo: false,
      activeVideo: '',
    };
  },
  computed: {
    ...mapGetters(['getAllVideos']),
  },
  methods: {
    startVideo(idVideo) {
      this.showVideo = true;
      this.activeVideo = idVideo;
    },
    closeModalVideo() {
      this.showVideo = false;
    },
  },
};
</script>

<style scoped>
  .card {
    display: flex;
    width: 687px;
    margin-bottom: 32px;
  }
  .card__img {
    width: 157px;
  }
  .card__text-container {
    margin: 0 0 0 20px;
  }
  .card__text {
    font-size: 16px;
    line-height: 20px;
  }

  ._gray {
    color: rgba(23, 23, 25, 0.3);
  }

</style>
