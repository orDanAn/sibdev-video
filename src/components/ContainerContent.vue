<template>
  <div class="conteiner-content">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .conteiner-content {
    width: 1040px;
  }

  @media screen and (max-width: 1021px) {
    .conteiner-content {
      width: auto;
    }
  }
</style>
