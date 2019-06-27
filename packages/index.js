import Vue from 'vue';

import Toast from './toast/index';
import Loading from './loading/index';
import Dialog from './dialog/index';
import Mask from './mask/index';

import Button from './button';
import Popup from './popup';
import Switch from './switch';
import Modal from './modal';
import { SwipeCellGroup, SwipeCell} from './swipeCell';
import { Picker, PickerColumn } from './picker';
import { RadioGroup, Radio } from './radio';
import { CheckboxGroup, Checkbox } from './checkbox';

const COMPONENTS_LIST = [
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
    Checkbox,
];

function install(Vue) {
    COMPONENTS_LIST.forEach((component) => {
        Vue.use(component);
    });
};

let CyUI = {
    install
};

/* export each component */
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

/* export entire components */
export default CyUI;