import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    name: 'Crear',
    component: () => import('../views/Crear.vue')
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: () => import('../views/Buscar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
