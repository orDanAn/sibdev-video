<template>
  <div id="app">
    <MainLayout>
      <router-view/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayot.vue';

export default {
  data() {
    return {

    };
  },

  components: {
    MainLayout,
  },
};

</script>
<style>
  body {
    margin: 0;
  }
</style>
