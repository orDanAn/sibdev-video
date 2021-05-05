<template>
  <div style="display: flex; justify-content: center;">
    <el-card class="box-card"
      :body-style="bodyStyle"
    >
      <el-image
        style="width: 100px; height: 100px"
        :src="logo"
        fit="contain"
      >
      </el-image>
      <div style="display: flex; align-items: center">
        <h3 class="login__title">
          {{loginCheck ? "Вход" : "Регистрация"}}
        </h3>
        <el-switch v-model="loginCheck">
        </el-switch>
      </div>
      <el-form
        :model="form"
        label-position='top'
        style="display: flex; flex-direction: column; align-items: center;">
        <el-form-item
          label="Почта"
        >
          <el-input
            v-model="form.email"
            autocomplete="off"
            class="input-login"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Пароль"
        >
          <el-input
            class="input-login"
            v-model="form.password"
            show-password
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-button
          v-if="loginCheck"
          class="btn-login"
          type="primary"
          :disabled="validationLogin"
          @click="submitForm(form)"
        >
          Войти
        </el-button>
        <el-button
          v-else
          class="btn-login"
          type="primary"
          @click="regitration(form)"
          :disabled="validationLogin"
        >
          Регистрация
        </el-button>
      </el-form>

    </el-card>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
import logo from '../assets/images/sibdev-logo.svg';

export default {
  data() {
    return {
      logo,
      loginCheck: true,
      form: {
        email: '',
        password: '',
      },
      bodyStyle: {
        display: 'flex',
        'flex-direction': 'column',
        ' justify-content': 'center',
        'align-items': 'center',
        'align-content': 'center',
      },
    };
  },
  computed: {
    validationLogin() {
      return !this.form.email || !this.form.password;
    },
  },
  methods: {
    async submitForm(form) {
      this.$store.commit('changeLoading', true);
      try {
        await this.$store.dispatch('login', form);
        this.$router.push('/');
      } catch (e) {
        console.error(e);
        this.$message('Произошла ошибка');
      }
      this.$store.commit('changeLoading', false);
    },
    async regitration(form) {
      this.$store.commit('changeLoading', true);
      try {
        await this.$store.dispatch('register', form);
        this.$router.push('/');
      } catch (e) {
        console.error(e);
        this.$message('Произошла ошибка');
      }
      this.$store.commit('changeLoading', false);
    },
  },
  mounted() {
    const labels = document.querySelectorAll('.el-form-item__label');
    // eslint-disable-next-line no-return-assign
    labels.forEach((item) => item.style = 'color: rgba(23, 23, 25, 0.3); margin: 0; padding: 0');
  },
};
</script>

<style scoped>
  .box-card {
    width: 510px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .input-login {
    width: 335px;
  }

  .btn-login {
    width: 176px;
    text-align: center;
  }

  .login__title {
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    margin: 0 10px 0 0;
  }

</style>
