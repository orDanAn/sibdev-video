<template>
  <div class="main-container">
    <a href="https://sibdev.pro/" class="logo">
      <img :src="logo" alt="логотип">
    </a>
    <el-header class="header">
      <el-menu
        :default-active="$route.path"
        mode="horizontal"
        text-color='#1390E5'
        active-text-color="#1390E5"
        router
      >
        <el-menu-item
          index="/"
          style="margin-left: 150px"
        >
            Поиск
        </el-menu-item>
        <el-menu-item
          index="/favorites"
        >
            Избранное
        </el-menu-item>
        <el-menu-item index="/login" @click="logout" class="menu-item__btn-exe">Выйти</el-menu-item>
      </el-menu>
    </el-header>
    <el-main
      v-loading="loading"
    >
      <slot>
      </slot>
    </el-main>
  </div>
</template>

<script>
import logo from '../assets/images/sibdev-logo.svg';

export default {
  data() {
    return {
      logo,
    };
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    },
  },
  methods: {
    async logout() {
      this.$store.commit('changeLoading', true);
      await this.$store.dispatch('logout');
      this.$store.commit('changeLoading', false);
    },
  },
};
</script>

<style scoped>
  .main-container {
    background: #FAFAFA;;
    min-height: 100vh;
    min-width: 100vh;
  }
  .header {
    padding: 0;
  }

  .menu-item__btn-exe {
    position: absolute;
    right: 50px;
  }

  .logo {
    position: absolute;
    z-index: 200;
    left: 50PX;
    top: 9px;
  }

</style>
