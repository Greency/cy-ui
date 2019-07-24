import Vue from 'vue';
import Main from './main.vue';

let NoticeConstructor = Vue.extend(Main),
    notice = null;

export default function(options){
    if (notice && notice.show)
        return;

    console.log(options);
    if (typeof options === 'string') {
        options = {
            content: options
        };
    }

    notice = new NoticeConstructor({ data: options });
    document.body.appendChild(notice.$mount().$el);
}