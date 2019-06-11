import Vue from 'vue';
import Toast from '../packages/toast/main';
import { ShowLoading, HideLoading } from '../packages/loading/main';

export default function () {
    Vue.prototype.$showToast = Toast;
    Vue.prototype.$showLoading = ShowLoading;
    Vue.prototype.$hideLoading = HideLoading;
}