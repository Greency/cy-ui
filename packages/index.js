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
    { name: 'toast', component: Toast, needInstall: false },
    { name: 'loading', component: Loading, needInstall: false },
    { name: 'dialog', component: Dialog, needInstall: false },
    { name: 'mask', component: Mask, needInstall: false },

    { name: 'button', component: Button, needInstall: true },
    { name: 'popup', component: Popup, needInstall: true },
    { name: 'switch', component: Switch, needInstall: true },
    { name: 'modal', component: Modal, needInstall: true },
    { name: 'swipe-cell-group', component: SwipeCellGroup, needInstall: true },
    { name: 'swipe-cell', component: SwipeCell, needInstall: true },
    { name: 'picker', component: Picker, needInstall: true },
    { name: 'picker-column', component: PickerColumn, needInstall: true },
    { name: 'radio-group', component: RadioGroup, needInstall: true },
    { name: 'radio', component: Radio, needInstall: true },
    { name: 'checkbox-group', component: CheckboxGroup, needInstall: true },
    { name: 'checkbox', component: Checkbox, needInstall: true }
];

/*add the "install" method to each component.*/
COMPONENTS_LIST.forEach((item) => {
    if (item.needInstall)
        item.component.install = function (Vue) {
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