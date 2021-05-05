<template>
  <div class="container">
    <container>
      <h1 :class="{'main-title': !savedBtn}">
        Поиск видео
      </h1>
      <input-btn
        :savedBtn="savedBtn"
        @click-save="clickSave"
        @click-del="clickDel"
        @submit-input="submitInput"
      >
      </input-btn>
      <filter-panel
        @select-group="selectGroup"
      >
      </filter-panel>
      <list-group v-if="group === 'list'">
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
      group: 'list',
    };
  },

  computed: {
    savedBtn() {
      if (this.$store.getters.getRequstText) {
        return true;
      }
      return false;
    },
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
    async saveForm(form) {
      const save = {
        name: form.requestName,
        requestBody: {
          req: form.request,
          maxRes: form.maxRequest,
          sort: form.sort,
        },
      };
      this.$store.commit('changeLoading', true);
      try {
        await this.$store.dispatch('saveRequest', save);
        this.dialogFormVisible = false;
      } catch (e) {
        console.error(e);
      }
      this.$store.commit('changeLoading', false);
    },
    async submitInput(val) {
      this.$store.commit('changeLoading', true);
      await this.$store.dispatch('readVideo', { req: val, maxRes: 12 });
      this.$store.commit('changeLoading', false);
    },
    selectGroup(val) {
      this.group = val;
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
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
  }

  .main-title {
    text-align: center;
    font-size: 36px;
    line-height: 52px;
    margin: 0 0 40px;
  }

</style>
