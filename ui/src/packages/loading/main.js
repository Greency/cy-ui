import Vue from 'vue';
import Main from './main.vue';

let LoadingConstructor = Vue.extend(Main),
    loading = null;

function ShowLoading(options) {
    if (loading && loading.show) {
        return;
    }

    if (typeof options === 'string')
        options = {
            content: options
        };

    loading = new LoadingConstructor({ data: options });
    document.body.appendChild(loading.$mount().$el);
}

function HideLoading() {
    if (!loading || loading._isDestroyed)
        return;

    loading.show = false;
}

export {
    ShowLoading,
    HideLoading
}