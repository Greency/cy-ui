import Picker from './src/picker';

Picker.install = function (Vue) {
    Vue.component('cy-picker', Picker);
}

export default Picker;