import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
import SideDrawer from './components/SideDrawer'
Vue.component('SideDrawer', SideDrawer)

new Vue({

  router,

  store,

}).$start();
