<template>
  <div style="display: flex; justify-content: center;">
    <container>
      <h2 class="favorites-title">
        Избранное
      </h2>
      <p v-if="saveRequestVideo.length === 0" style="font-size: 43px; color: red;">
        Нет сохраненных запросов
      </p>
      <ul class="favorites" v-else>
        <li class="favorites__item" v-for="request in saveRequestVideo" :key="request.id">
          <span @click="sendRequest(request.requestBody)" class="item__name">
            {{request.name}}
          </span>
          <div class="container-control">
            <a href="#"
              class="control-item _update"
              @click.prevent="updateRequest(request.id, request.requestBody, request.name)"
            >
              Изменить
            </a>
            <a
              href="#"
              class="control-item _delite"
              @click.prevent="delRequest(request.id)"
            >
              Удалить
            </a>
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
      idReq: '',
    };
  },
  computed: {
    saveRequestVideo() {
      return this.$store.getters.getSaveRequestVideo;
    },
  },
  methods: {
    async sendRequest(requestBody) {
      this.$store.commit('changeLoading', true);
      await this.$store.dispatch('readVideo', requestBody);
      this.$store.commit('changeLoading', false);
      this.$router.push('/');
    },
    updateRequest(id, body, name) {
      console.log(body, id);
      this.idReq = id;
      this.dialogFormVisible = true;
      this.allForm = {
        request: body.req,
        requestName: name,
        sort: body.sort,
        maxRequest: body.maxRes,
      };
    },
    async updateForm(form) {
      console.log('обновили форму', form);
      const save = {
        name: form.requestName,
        requestBody: {
          req: form.request,
          maxRes: form.maxRequest,
          sort: form.sort,
        },
      };
      this.$store.commit('changeLoading', true);
      await this.$store.dispatch('updateSaveRequest', { saveReq: save, id: this.idReq });
      await this.$store.dispatch('fetchSaveRequest');
      this.dialogFormVisible = false;
      this.$store.commit('changeLoading', false);
    },
    async delRequest(id) {
      this.$store.commit('changeLoading', true);
      await this.$store.dispatch('deleteSaveRequest', id);
      await this.$store.dispatch('fetchSaveRequest');
      this.$store.commit('changeLoading', false);
    },
  },
  async mounted() {
    this.$store.commit('changeLoading', true);
    await this.$store.dispatch('fetchSaveRequest');
    this.$store.commit('changeLoading', false);
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

  .item__name {
    cursor: pointer;
  }
  .item__name:hover {
    transform: scale(1.1);
  }
</style>
