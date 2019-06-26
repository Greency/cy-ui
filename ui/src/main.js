import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
//import CyUI from './packages/index';
//import install from './packages/install';

import { Button, Toast } from './packages/index';

Vue.use(Button);
Vue.use(Toast);
console.log(Button);
console.log(Toast);

//Vue.use(CyUI);
Vue.config.productionTip = false

//install();


new Vue({
  render: h => h(App),
  router
}).$mount('#app');