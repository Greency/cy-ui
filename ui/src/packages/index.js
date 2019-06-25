import './bindPrototype';
import Button from './button';
import Popup from './popup';
import Switch from './switch';
import Modal from './modal';
import SwipeCellGroup from './swipeCell/swipeCellGroup';
import SwipeCell from './swipeCell/swipeCell';
import Picker from './picker/picker';
import PickerColumn from './picker/pickerColumn';
import RadioGroup from './radio/radioGroup';
import Radio from './radio/radio';
import CheckboxGroup from './checkbox/checkboxGroup';
import Checkbox from './checkbox/checkbox';

const COMPONENTS_LIST = [
    { name: 'button', component: Button },
    { name: 'popup', component: Popup },
    { name: 'switch', component: Switch },
    { name: 'modal', component: Modal },
    { name: 'swipe-cell-group', component: SwipeCellGroup },
    { name: 'swipe-cell', component: SwipeCell },
    { name: 'picker', component: Picker },
    { name: 'picker-column', component: PickerColumn },
    { name: 'radio-group', component: RadioGroup },
    { name: 'radio', component: Radio },
    { name: 'checkbox-group', component: CheckboxGroup },
    { name: 'checkbox', component: Checkbox }
];

function install(Vue) {
    COMPONENTS_LIST.forEach((item)=>{
        Vue.component(`cy-${item.name}`, item.component);
    });
}

let CyUI = {
    install
}
export default CyUI;