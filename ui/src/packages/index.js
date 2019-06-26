import Toast from './toast/index';
import Loading from './loading/index';
import Dialog from './dialog/index';
import Mask from './mask/index';

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
    { name: 'toast', component: Toast },
    { name: 'loading', component: Loading },
    { name: 'dialog', component: Dialog },
    { name: 'mask', component: Mask },

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

/*add the "install" method to each component.*/
COMPONENTS_LIST.forEach((item)=>{
    item.component.install = function(Vue){
        Vue.component(`cy-${item.name}`, item.component);
    }
});


function install(Vue) {
    COMPONENTS_LIST.forEach((item) => {
        Vue.use(item.component);
    });
}

let CyUI = {
    install
}

export {
    Toast,
    Loading,
    Dialog,
    Mask,

    Button,
    Popup,
    Switch,
    Modal,
    SwipeCellGroup,
    SwipeCell,
    Picker,
    PickerColumn,
    RadioGroup,
    Radio,
    CheckboxGroup,
    Checkbox
};

export default CyUI;