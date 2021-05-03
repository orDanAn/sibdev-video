<template>
  <div class="container">
    <h1 class="main-title">
      Поиск видео
    </h1>
    <input-btn
      @submit-input="submitInputs"
    />
  </div>
</template>

<script>
import InputBtn from '../components/ui/InputBtn.vue';

export default {
  data() {
    return {
      videoName: '',
    };
  },

  methods: {
    submitInputs(value) {
      console.log('val input', value);
    },
  },
  components: {
    InputBtn,
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
  }

  .main-title {
    text-align: center;
    font-size: 36px;
    line-height: 52px;
    margin: 0 0 40px;
  }

</style>
