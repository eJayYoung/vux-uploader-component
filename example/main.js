import Vue from 'vue'
import App from './App.vue'
import VConsole from 'vconsole';

if (process.env.NODE_ENV === 'development') {
  window.VConsole = new VConsole();
}

new Vue({
  el: '#app',
  render: h => h(App)
})
