<template>
  <div class="container-card_grid">
    <div class="card_grid" v-for="card in 15" :key="card">
      <a href="">
        <img class="card__img_gtid" :src="videoImg" alt="заставка видео">
      </a>
      <div class='card__text-container_grid'>
        <p class="card__text_grid">
          Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и
          советы по составлению рациона
        </p>
        <p class="card__text_grid _gray">
          Ветеринария и Кормление собак и кошек
        </p>
        <p class="card__text_grid _gray">
          788 тыс. просмотров
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import videoImg from '@/assets/images/Video.png';

export default {
  data() {
    return {
      videoImg,
    };
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
