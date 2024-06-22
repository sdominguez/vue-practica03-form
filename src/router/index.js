import Vue from 'vue'
import VueRouter from 'vue-router'
import EnviaParametro from '../views/FormView.vue'
import RecibeParametro from '../views/ResultView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'enviaparametro',
    component: EnviaParametro
  },
  {
    path: '/recibeparametro',
    name: 'recibeparametro',
    component: RecibeParametro,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
