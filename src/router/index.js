import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Void from '@/components/Void'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/void', name: 'Void', component: Void},
    {path: '*', redirect: '/void'}
  ]
})
