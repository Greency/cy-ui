import { ShowAlert, ShowConfirm } from './src/main';

export default function (Vue) {
    Vue.prototype.$dialog = {
        alert: ShowAlert,
        confirm: ShowConfirm
    };
};