import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import './scss/global.scss';
import Routes from './routes.js';
import axios from 'axios'
import { store } from './store/store.js';

Vue.use(VueRouter);
Vue.prototype.$http = axios;

const router = new VueRouter({
  routes: Routes,
  /* doing this for destroying # symbol */
   mode: 'history'

})

// FILTER
Vue.filter('',function(value){})

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#root',
  components: { App },
  template: '<App/>',
  router:router,


});
