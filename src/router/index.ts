import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginVue from '../views/Login.vue'
import Home from '../views/Home.vue'
import Evaluation from '../views/Evaluation.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginVue
  },
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/createTrust',
    children: [
      { 
        path: '/home/createTrust', 
        component: () => import('../views/CreateTrust.vue')  
      },
      {
        path: '/home/searchTrust', 
        component: () => import('../views/SearchTrust.vue') ,
      },
      {
        path: '/home/searchTrust/result',
        component: () => import('../views/Results.vue') ,
      }
    ]
  },
  {
    path: '/evaluation',
    name: 'evaluation',
    component: Evaluation
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
