import Picker from './src/picker';
import PickerColumn from './src/pickerColumn';

Picker.install = function (Vue) {
    Vue.component('cy-picker', Picker);
}

PickerColumn.install = function (Vue) {
    Vue.component('cy-picker-column', PickerColumn);
}

export {
    Picker,
    PickerColumn
};