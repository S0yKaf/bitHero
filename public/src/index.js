import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';

import store from './store.js';

Vue.use(VueRouter);

const routes = [
  {path: '*', redirect: '/'},
  {path: '/', component: Home},
  {path: '/dashboard', component: Dashboard}
];

const router = new VueRouter({routes});

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
