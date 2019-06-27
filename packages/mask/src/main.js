import Vue from 'vue';
import Main from './main.vue';

let MaskConstructor = Vue.extend(Main),
    mask = null;

function ShowMask() {
    if (mask && mask.show)
        return;

    mask = new MaskConstructor();
    document.body.appendChild(mask.$mount().$el);
}

function HideMask() {
    if (!mask || !mask.show)
        return;

    mask.show = false;
}

export {
    ShowMask,
    HideMask
}