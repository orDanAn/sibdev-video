<template>
  <div class="input-container">
    <el-input
      placeholder="Что хотите посмотреть?"
      v-model="inputValue"
      @focus="focusInput($event)"
      @blur="changeInput($event)"
    >
    </el-input>
    <el-button
      type="primary"
      class="btn-input"
      @click="submitInput"
      :disabled="inputValue === ''"
    >
      Найти
    </el-button>
    <div v-if="savedBtn" class="icon-saved">
      <el-popover
        placement="bottom"
        title=""
        width="220"
        trigger="hover"
        v-show="iconSaved"
      >
        <p>
          Поиск сохранён в разделе <br/>
          «Избранное»
        </p>
        <router-link to="/favorites" style="color: #1390E5; text-decoration: none;">
          Перейти в избранное
        </router-link>
        <img
          slot="reference"
          :src="iconHeartFull"
          alt="иконка избранное"
          @click="$emit('click-del')"
        >
      </el-popover>
      <div v-show="!iconSaved">
        <img
          :src="iconHeart"
          alt="иконка избранное"
          @click="clickSave"
        >
      </div>
    </div>

  </div>
</template>

<script>
import iconHeart from '@/assets/images/heart.svg';
import iconHeartFull from '@/assets/images/heart-full.svg';

export default {
  props: {
    savedBtn: {
      type: Boolean,
    },
  },
  data() {
    return {
      inputValue: '',
      iconHeart,
      iconHeartFull,
    };
  },
  computed: {
    iconSaved() {
      // логика иконки, понять сохраненный запрос или нет
      const saveReq = this.$store.getters.getSaveRequestVideo;
      if (saveReq.length) {
        return !!saveReq.filter((item) => item.requestBody.req === this.inputValue).length;
      }
      return false;
    },
  },
  methods: {
    focusInput(e) {
      e.target.style = 'background: rgba(197, 228, 249, 0.3);';
    },
    changeInput(e) {
      e.target.style = '';
    },
    submitInput() {
      this.$emit('submit-input', this.inputValue);
    },
    clickSave() {
      this.$emit('click-save', this.inputValue);
    },
  },
  async mounted() {
    this.inputValue = this.$store.getters.getRequstText;
    this.$store.commit('changeLoading', true);
    await this.$store.dispatch('fetchSaveRequest');
    this.$store.commit('changeLoading', false);
  },
};
</script>

<style>
  .qwe {
    background: rgba(197, 228, 249, 0.3);
  }

  .input-container {
    min-width: 658px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .btn-input {
    border-radius: 0 3px 3px 0;
    margin: 0 0 0 -2px;
    z-index: 10;
  }

  .icon-saved {
    position: absolute;
    right: 95px;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 695px) {
    .input-container {
      min-width: 400px;
    }
  }
   @media screen and (max-width: 500px) {
    .input-container {
      min-width: auto;
    }
  }

</style>
