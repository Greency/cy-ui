import Modal from './src/modal';

Modal.install = function (Vue) {
    Vue.component('cy-modal', Modal);
}

export default Modal;