import CySwitch from './src/switch.vue';

CySwitch.install = function (Vue) {
    Vue.component('cy-switch', CySwitch);
};

export default CySwitch;