<template>
  <div class="container-card_grid">
    <div class="card_grid" v-for="card in cards" :key="card.id.videoId">
      <a href="#"
        @click.prevent="startVideo(card.id.videoId)"
      >
        <img class="card__img_gtid" :src="card.snippet.thumbnails.default.url" alt="заставка видео">
      </a>
      <div class='card__text-container_grid'>
        <p class="card__text_grid">
          {{card.snippet.title}}
        </p>
        <p class="card__text_grid _gray">
          {{card.snippet.description}}
        </p>
        <p class="card__text_grid _gray">
          {{card.statistics ? card.statistics.viewCount : 'нет данных'}} просмотров
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
    cards() {
      return this.$store.getters.getAllVideos;
    },
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
  .container-card_grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  .card_grid {
    width: 245px;
    margin: 7px;
  }

  .card__img_gtid {
    width: 245px;
  }

  .card__text_grid {
    font-size: 14px;
    line-height: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  ._gray {
    color: rgba(23, 23, 25, 0.3);
    -webkit-line-clamp: 1;
  }

</style>
