import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './App.vue';
import router from './router';
import store from './store';
import ContainerContent from './components/ContainerContent.vue';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.component('container', ContainerContent);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
