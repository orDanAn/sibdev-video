<template>
  <div>
    <el-dialog
      title="Просмотр"
      :visible="showVideo"
      @close="$emit('close-modal')"
      width="612px"
      center
    >
      <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + activeVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    activeVideo: {
      type: String,
      required: true,
    },
    showVideo: {
      type: Boolean,
      required: true,
    },
  },

};
</script>

<style>

</style>
