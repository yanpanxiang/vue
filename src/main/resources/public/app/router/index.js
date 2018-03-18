import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../components/Demo'
import Hello from '../components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
