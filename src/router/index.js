import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/login', name: 'Login', component: Login},
    {path: '/register', name: 'Register', component: Register}
  ]
})
