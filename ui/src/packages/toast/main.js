import Vue from 'vue';
import Main from './main.vue';

let ToastConstructor = Vue.extend(Main),
    toast = null;

export default function (options) {
    if (toast && !toast._isDestroyed)
        return;

    if (typeof options === 'string') {
        options = {
            content: options
        };
    }

    toast = new ToastConstructor({ data: options });
    document.body.appendChild(toast.$mount().$el);
}