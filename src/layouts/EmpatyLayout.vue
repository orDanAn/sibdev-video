<template>
  <div class="main-container">
    <el-main
      v-loading="loading"
    >
      <slot>
      </slot>
    </el-main>
  </div>
</template>
<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.getLoading;
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
</style>
