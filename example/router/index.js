import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Test from '../pages/test/index';
import Index from '../pages/index';
import Button from '../pages/button/index';
import Toast from '../pages/toast/index';

export default new Router({
    routes: [
        {
            name: 'test',
            path: '/test',
            component: Test
        },
        {
            name: 'index',
            path: '/index',
            component: Index
        },
        {
            name: 'button',
            path: '/button',
            component: Button
        },
        {
            name: 'toast',
            path: '/toast',
            component: Toast
        }
    ]
});