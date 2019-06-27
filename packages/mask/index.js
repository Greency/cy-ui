import { ShowMask, HideMask } from './src/main';

export default function (Vue) {
    Vue.prototype.$showMask = ShowMask;
    Vue.prototype.$hideMask = HideMask;
};