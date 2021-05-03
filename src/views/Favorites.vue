<template>
  <div style="display: flex; justify-content: center;">
    <container>
      <h2 class="favorites-title">
        Избранное
      </h2>
      <ul class="favorites">
        <li class="favorites__item" v-for="item in 15" :key="item">
          <span>
            видео
          </span>
          <div class="container-control">
            <a href="#" class="control-item _update" @click.prevent="updateRequest">Изменить</a>
            <a href="#" class="control-item _delite">Удалить</a>
          </div>
        </li>
      </ul>
    </container>
    <modal-form
      :dialogFormVisible="dialogFormVisible"
      textCancel="Не изменять"
      textConfirm="Изменить"
      titleForm="Изменить запрос"
      :allForm="allForm"
      @cancel-form="dialogFormVisible = false"
      @save-form="updateForm"
    >
    </modal-form>
  </div>
</template>

<script>
import ModalForm from '../components/ModalForm.vue';

export default {
  components: { ModalForm },
  data() {
    return {
      dialogFormVisible: false,
      allForm: {},
    };
  },

  methods: {
    updateRequest() {
      this.dialogFormVisible = true;
      this.allForm = {
        request: 'test',
        requestName: 'NAME',
        sort: 'relevance',
        maxRequest: 43,
      };
    },
    updateForm() {
      console.log('обновили форму');
    },
  },
};
</script>

<style scoped>
  .favorites-title {
    font-size: 28px;
    line-height: 40px;
    margin: 40 0;
  }
  .favorites {
    padding: 0;
  }
  .favorites__item {
    list-style-type: none;
    background: #fff;
    padding: 13px 20px;
    margin: 0 0 1px 0;
    font-size: 16px;
    line-height: 20px;
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .favorites__item:hover {
    background: #F1F1F1;
  }
  .container-control {
    display: none;
  }

  .favorites__item:hover .container-control {
    display: block;
  }

  .control-item {
    margin: 0 0 0 30px;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
  }

  ._update {
    color: #1390E5;
  }

  ._delite {
    color: #FF0000;
  }
</style>
