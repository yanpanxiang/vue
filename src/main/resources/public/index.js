import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import App from './app/components/App'
import router from './app/router/index'
import store from './app/vuex/store'

Vue.use(VueRouter)
Vue.prototype.$http = axios


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
