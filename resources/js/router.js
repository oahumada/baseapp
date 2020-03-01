import Vue from 'vue'
import VueRouter from 'vue-router'

//import store from './store'

import LandingPage from './components/pages/landing.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import IngresoPage from './components/pages/ingreso-pacientes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/app/home',
    component: LandingPage
  },
  {
    path: '/app/dashboard',
    component: DashboardPage,
  },
  {
    path: '/app/ingreso',
    component: IngresoPage,
  }
]

export default new VueRouter({mode: 'history', routes})