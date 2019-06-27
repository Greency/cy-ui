import { ShowAlert, ShowConfirm } from './main';

export default function(Vue){
    Vue.prototype.$dialog = {
        alert: ShowAlert,
        confirm: ShowConfirm
    };
}