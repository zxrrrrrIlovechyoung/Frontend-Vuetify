/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import Analytics from '@/components/Analytics.vue'
import Settings from '@/components/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/settings',
      component: Settings,
    },
    {
      path: '/analytics',
      component: Analytics,
    },
  ],
})

export default router
