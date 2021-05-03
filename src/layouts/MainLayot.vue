<template>
  <div class="main-container">
    <el-header class="header">
      <el-menu
        default-active="1"
        mode="horizontal"
        text-color='#1390E5'
        active-text-color="#1390E5"
      >
        <el-menu-item index="4" style="margin-left: 50px">
          <a href="https://sibdev.pro/">
            <img :src="logo" alt="логотип">
          </a>
        </el-menu-item>
        <el-menu-item index="1" style="margin-left: 50px">
          <router-link class="menu-item__link" to="/">
            Поиск
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link class="menu-item__link" to="/favorites">
            Избранное
          </router-link>
        </el-menu-item>
        <el-menu-item index="3" class="menu-item__btn-exe">Выйти</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
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

  .menu-item__link {
    text-decoration: none;
  }

</style>
