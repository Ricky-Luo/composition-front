import Vue from 'vue'
import VueRouter from 'vue-router'
import writting from '../components/writting/Writting'
import writtingResult from '../components/writting/WrittingResult'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Writting',
    component: writting
  },{
    path: '/Writting',
    name: 'Writting',
    component: writting
  },{
    path: '/writtingResult',
    name: 'WrittingResult',
    component: writtingResult
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
