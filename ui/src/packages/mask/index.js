import { ShowMask, HideMask } from './main';

export default function(Vue){
    Vue.prototype.$showMask = ShowMask;
    Vue.prototype.$hideMask = HideMask;
}