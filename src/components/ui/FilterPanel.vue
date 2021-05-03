<template>
  <div class="container-filter-panel d-flex _spase-between">
    <p class="container-filter-panel__text">
      Видео по запросу <strong>«{{requstText}}»</strong>
      <span class="panel__text_gray">{{requestCount}}</span>
    </p>
    <div class="d-flex">
      <img class="container-filter-panel__icon" :src="listIcon" alt="вид списком">
      <img class="container-filter-panel__icon" :src="gridIcon" alt="табличный вид">
    </div>
  </div>
</template>

<script>
import grid from '@/assets/images/grid.svg';
import list from '@/assets/images/list.svg';

export default {
  data() {
    return {
      requstText: 'чкм кормить кота',
      requestCount: '7654',
      gridIcon: grid,
      listIcon: list,
    };
  },
};
</script>

<style scoped>
  .container-filter-panel {
    margin: 40px 0 20px;
  }

  .container-filter-panel__text {
    font-size: 16px;
    line-height: 24px;
  }

  .panel__text_gray {
    margin-left: 15px;
    color: rgba(23, 23, 25, 0.3);
  }
  .container-filter-panel__icon {
    cursor: pointer;
  }
  .container-filter-panel__icon:hover {
    transform: scale(1.3);
  }
  .d-flex {
    display: flex;
    align-items: center;
  }

  ._spase-between {
    justify-content: space-between;
  }
</style>
