'use strict'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//import validator from 'vue-validator'
import routerMap from './routers'

Vue.use(VueResource);
Vue.use(VueRouter);
//Vue.use(validator);

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");