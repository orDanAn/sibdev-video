import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Search',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Favorites.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empaty' },
    component: () => import('../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requireAuth = to.matched.some((record) => record.meta.auth);

  if (requireAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
