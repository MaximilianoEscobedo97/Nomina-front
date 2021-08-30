import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Nominas',
    component: () => import(/* webpackChunkName: "Nominas" */ '../views/Nominas.vue')  
  },
  {
    path: '/nomina/create',
    name: 'Nominas',
    component: () => import(/* webpackChunkName: "CrearNomina" */ '../views/CreateNomina.vue')  
  },
  {
    path: '/nomina/edit/:id',
    name: 'Nominas',
    component: () => import(/* webpackChunkName: "EditarNomina" */ '../views/EditNomina.vue')  
  },
  {
    path: '/nomina/:id',
    name: 'Nominas',
    component: () => import(/* webpackChunkName: "VerNomina" */ '../views/ViewNomina.vue')  
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
