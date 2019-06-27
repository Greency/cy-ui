import Popup from './src/popup';

Popup.install = function (Vue) {
    Vue.component('cy-popup', Popup);
}

export default Popup;