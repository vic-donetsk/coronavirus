window._ = require('lodash');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.$ = window.jQuery = require('jquery');

window.Popper = require('popper.js').default;
require('bootstrap');

let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// Vue block

import Vue from "vue";

import VueRouter from "vue-router";
import routes from './routes';

import {store} from './store';

const router = new VueRouter({
    routes,
    mode: 'history'
});

window.EventBus = new Vue();

Vue.use(VueRouter);


const app = new Vue({
    store,
    router,
    el: '#app'
});





