/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import Analytics from '@/components/Analytics.vue'
import Books from '@/components/Books.vue'
import Carros from '@/components/Carros.vue'
import Dashboard from '@/components/Dashboard.vue'
import Settings from '@/components/Settings.vue'
import Tienda from '@/components/Tienda.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
    {
      path: '/settings',
      component: Settings,
    },
    {
      path: '/analytics',
      component: Analytics,
    },
    {
      path: '/books',
      component: Books,
    },
    {
      path: '/tienda',
      component: Tienda,
    },
    {
      path: '/carros',
      component: Carros,
    },
  ],
})

export default router
