import Vue from 'vue';
import ElementUI from 'element-ui';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import App from './App.vue';
import router from './router';
import store from './store';
import ContainerContent from './components/ContainerContent.vue';

import 'element-ui/lib/theme-chalk/index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyAsTJaRLx94ybZrqhNWQSJP92SnkwOgY3U',
  authDomain: 'video-sibdev.firebaseapp.com',
  databaseURL: 'https://video-sibdev-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'video-sibdev',
  storageBucket: 'video-sibdev.appspot.com',
  messagingSenderId: '208597800251',
  appId: '1:208597800251:web:39889c6e0e78eefaae531e',
};

firebase.initializeApp(firebaseConfig);

Vue.use(ElementUI);
Vue.component('container', ContainerContent);
Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
