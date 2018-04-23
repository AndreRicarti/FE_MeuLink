import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate, { Validator } from 'vee-validate';
import pt_BR from '../node_modules/vee-validate/dist/locale/pt_BR';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Autocomplete from 'v-autocomplete'
import 'v-autocomplete/dist/v-autocomplete.css'

//import './assets/css/teste.css';
//import './assets/js/teste.js';
//let Bootstrap = require('bootstrap')

Vue.use(Autocomplete);

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
 });

 Vue.use(VeeValidate);
 Validator.localize('pt_BR', pt_BR);
 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
