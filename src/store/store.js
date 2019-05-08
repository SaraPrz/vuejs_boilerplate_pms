import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

 export const store = new Vuex.Store({
  // the global state
  state : {
     cats: ['economics', 'sports', 'religion', 'culture', 'politic']
  },

})

