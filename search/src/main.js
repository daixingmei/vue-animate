import Vue from 'vue'
import App from './App.vue'
// var vueResource =require('vue-resource')
import VueResource from 'vue-resource'
Vue.use(VueResource)

import './assets/css/animate.css'
new Vue({
  el: '#app',
  render: h => h(App)
})
