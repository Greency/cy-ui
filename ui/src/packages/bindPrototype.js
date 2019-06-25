import Vue from 'vue';
import Toast from './toast/main';
import { ShowLoading, HideLoading } from './loading/main';
import { ShowMask, HideMask } from './mask/main';
import { ShowAlert, ShowConfirm } from './dialog/main';

Vue.prototype.$showToast = Toast;
Vue.prototype.$showLoading = ShowLoading;
Vue.prototype.$hideLoading = HideLoading;
Vue.prototype.$showMask = ShowMask;
Vue.prototype.$hideMask = HideMask;
Vue.prototype.$dialog = {
    alert: ShowAlert,
    confirm: ShowConfirm
};