import Button from './button'

function install(Vue) {
    Vue.component('cy-button', Button);
}

let CyUI = {
    install
}
export default CyUI;