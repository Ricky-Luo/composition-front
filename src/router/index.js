import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import writtingTasks from '../components/writting/WrittingTasks'
import writting from '../components/writting/Writting'
import writtingHistory from '../components/writting/WrittingHistory'
import compositionsForMark from '../components/mark/CompositionsForMark'
import marking from '../components/mark/Marking'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'WrittingTask',
    component: writtingTasks
  },
  {
    path: '/Writting',
    name: 'Writting',
    component: writting
  },
  {
    path: '/WrittingHistory',
    name: 'WrittingHistory',
    component: writtingHistory
  },
  {
    path: '/CompositionsForMark',
    name: 'CompositionsForMark',
    component: compositionsForMark
  },{
    path: '/Marking',
    name: 'Marking',
    component: marking
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
