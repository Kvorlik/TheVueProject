import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Void from '@/components/Void'
import Test from '@/components/Test/Main'
import Begin from '@/components/Begin'
import Need from '@/components/Need'
import Statistic from '@/components/Statistic'
import Training from '@/components/Training'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/void', name: 'Void', component: Void},
    {path: '/test', name: 'Test', component: Test},
    {path: '/where-to-begin', name: 'Begin', component: Begin},
    {path: '/need-to-know', name: 'Need', component: Need},
    {path: '/statistic', name: 'Statistic', component: Statistic},
    {path: '/training', name: 'Training', component: Training},
    {path: '*', redirect: '/void'}
  ]
})
