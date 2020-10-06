import { createRouter, createWebHistory } from 'vue-router'/* enrutador de vue */
import Home from '../views/Home.vue'
import index from  '../views/index.vue' /* '../views/index.vue' */

const routes = [
  {
    path: '/',
    name: 'index', /* CAMBIO DE RUTAS PARA ABRIR EN EL NAVEGADOR */
    component: index
  },

  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
