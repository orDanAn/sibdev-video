<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayot.vue';
import EmpatyLayout from './layouts/EmpatyLayout.vue';

export default {
  data() {
    return {

    };
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'main'}-layout`;
    },
  },
  components: {
    MainLayout,
    EmpatyLayout,
  },
};

</script>
<style>
  body {
    margin: 0;
  }
</style>
