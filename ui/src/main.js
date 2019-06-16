import Vue from 'vue'
import App from './App.vue'

import install from './packages/install';

Vue.config.productionTip = false

install();
new Vue({
  render: h => h(App),
}).$mount('#app');