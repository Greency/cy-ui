import Vue from 'vue'
import App from './App'
import router from './router/index';
//import CyUI from '../packages/index';

import { Button, Toast, Notice } from '../packages/index';

Vue.use(Button);
Vue.use(Toast);
Vue.use(Notice);
Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  console.log('to: ', to);
  console.log('from: ', from);
  next();
});

router.afterEach((to, from)=>{
  console.log('after to: ', to);
  console.log('after from: ', from);
});

const page = new Vue({
  render: h => h(App),
  router
}).$mount('#app');
//console.log('page: ', page);
//debugger;