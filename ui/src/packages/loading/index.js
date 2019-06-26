import { ShowLoading, HideLoading } from './main';

export default function(Vue){
    Vue.prototype.$showLoading = ShowLoading;
    Vue.prototype.$hideLoading = HideLoading;
}