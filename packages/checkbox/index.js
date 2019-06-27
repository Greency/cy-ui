import CheckboxGroup from './src/checkboxGroup';
import Checkbox from './src/checkbox';

CheckboxGroup.install = function (Vue) {
    Vue.component('cy-checkbox-group', CheckboxGroup);
}

Checkbox.install = function (Vue) {
    Vue.component('cy-checkbox', Checkbox);
}

export {
    CheckboxGroup,
    Checkbox
};