<template>
  <div style="display: flex; justify-content: center;">
    <container>
      <h2>
        Поиск видео
      </h2>
      <input-btn
        :savedBtn="true"
        @click-save="clickSave"
        @click-del="clickDel"
        @submit-input="submitInput"
      >
      </input-btn>
      <filter-panel>
      </filter-panel>
      <list-group v-if="true">
      </list-group>
      <grid-group v-else>
      </grid-group>
    </container>
    <modal-form
      :dialogFormVisible="dialogFormVisible"
      textCancel="Не сохранять"
      textConfirm="Сохранить"
      titleForm="Сохранить запрос"
      :requestShow="requestShow"
      @cancel-form="dialogFormVisible = false"
      @save-form="saveForm"
    >
    </modal-form>
  </div>
</template>

<script>
import GridGroup from '../components/GridGroup.vue';
import ListGroup from '../components/ListGroup.vue';
import ModalForm from '../components/ModalForm.vue';
import FilterPanel from '../components/ui/FilterPanel.vue';
import InputBtn from '../components/ui/InputBtn.vue';

export default {
  data() {
    return {
      dialogFormVisible: false,
      requestShow: {
        value: '',
        disabled: true,
      },
    };
  },

  methods: {
    clickSave(value) {
      console.log('open modal', value);
      this.dialogFormVisible = true;
      this.requestShow = {
        value,
        disabled: true,
      };
    },
    clickDel() {
      console.log('del');
    },
    saveForm() {
      console.log('сохранили форму');
    },
    async submitInput(val) {
      console.log('req', val);
      await this.$store.dispatch('readVideo');
    },
  },
  components: {
    InputBtn,
    FilterPanel,
    ListGroup,
    GridGroup,
    ModalForm,
  },

};
</script>

<style scoped>

</style>
