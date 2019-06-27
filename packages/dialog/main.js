import Vue from 'vue';
import Main from './main.vue';

let DialogConstructor = Vue.extend(Main),
    dialog = null;

function ShowDialog(type, options){
    options = {
        type,
        options
    };
    dialog = new DialogConstructor({ data: options });
    document.body.appendChild(dialog.$mount().$el);
}


function ShowAlert(options){
    ShowDialog('Alert', options);
}

function ShowConfirm(options){
    ShowDialog('Confirm', options);
}

export {
    ShowAlert,
    ShowConfirm
}