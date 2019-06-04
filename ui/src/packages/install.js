import Vue from 'vue';
import Toast from '../packages/toast/main';

export default function () {
    Vue.prototype.$showToast = Toast;
}