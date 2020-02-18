import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import LandingPage from './components/content/landing.vue'
import DashboardPage from './components/dashboard/dashboard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/api/home',
    component: LandingPage
  },
  {
    path: '/api/dashboard',
    component: DashboardPage,
  }
]

export default new VueRouter({mode: 'history', routes})