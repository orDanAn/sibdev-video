<template>
  <div class="container-card_list">
    <div class="card" v-for="card in getAllVideos" :key="card.channelId">
      <a href="">
        <img :src="card.thumbnails.default" alt="кадр из видео" class="card__img">
      </a>
      <div class='card__text-container'>
        <p class="card__text">
          {{card.title}}
        </p>
        <p class="card__text _gray">
          {{card.description}}
        </p>
        <p class="card__text _gray">
          НАДО ПОПРАВИТЬ
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import videoImg from '@/assets/images/Video.png';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      videoImg,
    };
  },
  computed: {
    ...mapGetters(['getAllVideos']),
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
