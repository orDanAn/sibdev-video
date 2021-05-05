<template>
  <div>
    <el-dialog
      :title="titleForm"
      :visible="dialogFormVisible"
      :show-close="false"
      :requestShow="requestShow"
      :allForm="allForm"
      width="33%"
      center
    >
    <el-form :model="form" label-position='top' >
      <el-form-item
        label="Запрос"
      >
        <el-input
          v-model="form.request"
          autocomplete="off"
          :disabled="requestShow ? requestShow.disabled : false"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="Название"
        :rules="[
          { required: true, message: 'Обязательное поле'},
        ]"
      >
        <el-input
          v-model="form.requestName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Сортировать по">
        <el-select v-model="form.sort" placeholder="">
          <el-option label="по релевантности" value="relevance"></el-option>
          <el-option label="по дате создания" value="date"></el-option>
          <el-option label="по алфавиту" value="title"></el-option>
          <el-option label="по рейтенгу" value="rating"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Максимальное количество">
        <el-slider
          v-model="form.maxRequest"
          show-input
          :min='1'
          :max="50"
        >
        </el-slider>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('cancel-form')">{{textCancel}}</el-button>
      <el-button
        type="primary"
        @click="$emit('save-form', form)"
        :disabled="Boolean(!form.request || !form.requestName)"
      >
        {{textConfirm}}
      </el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogFormVisible: {
      type: Boolean,
      required: true,
    },
    textCancel: {
      type: String,
      required: true,
    },
    textConfirm: {
      type: String,
      required: true,
    },
    titleForm: {
      type: String,
      required: true,
    },
    requestShow: {
      type: Object,
    },
    allForm: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        request: '',
        requestName: '',
        sort: 'relevance',
        maxRequest: 12,
      },
    };
  },
  watch: {
    requestShow(newVal) {
      this.form.request = newVal.value;
    },
    allForm(newVal) {
      this.form.request = newVal.request;
      this.form.requestName = newVal.requestName;
      this.form.sort = newVal.sort;
      this.form.maxRequest = newVal.maxRequest;
    },
  },
};
</script>

<style>

</style>
