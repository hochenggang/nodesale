import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nodes',
      name: 'nodes',
      component: () => import('../views/NodesView.vue'),
      children: [
        {
          path: ':id',
          component: () => import('../views/NodeView.vue'),
        },
      ],
    },
    {
      path: '/instances',
      name: 'instances',
      component: () => import('../views/InstancesView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

export default router
