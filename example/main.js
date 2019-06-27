import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import CyUI from '../packages/index';

console.log(CyUI);
Vue.use(CyUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app');