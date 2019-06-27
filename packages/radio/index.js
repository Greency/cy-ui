import RadioGroup from './src/radioGroup';
import Radio from './src/radio';

RadioGroup.install = function (Vue) {
    Vue.component('cy-radio-group', RadioGroup);
}

Radio.install = function (Vue) {
    Vue.component('cy-radio', Radio);
}

export {
    RadioGroup,
    Radio
};