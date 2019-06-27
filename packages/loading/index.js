import { ShowLoading, HideLoading } from './src/main';

export default function (Vue) {
    Vue.prototype.$showLoading = ShowLoading;
    Vue.prototype.$hideLoading = HideLoading;
};