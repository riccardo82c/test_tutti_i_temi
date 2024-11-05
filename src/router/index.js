import { createRouter, createWebHistory } from 'vue-router'

import verticalLayout from '@/layouts/verticalLayout.vue'
import loginLayout from '@/layouts/loginLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/web/HomeView.vue'),
      meta: {
        layout: verticalLayout,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/web/AboutView.vue'),
      meta: {
        layout: verticalLayout,
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/web/FaqView.vue'),
      meta: {
        layout: verticalLayout,
      },
    },
    {
      path: '/become_partner',
      name: 'become_partner',
      component: () => import('@/views/web/PartnerView.vue'),
      meta: {
        layout: verticalLayout,
      },
    },
    {
      path: '/advertising_services',
      name: 'advertising_services',
      component: () => import('@/views/web/AdvertisingView.vue'),
      meta: {
        layout: verticalLayout,
      },
    },

    import.meta.env.VITE_ENABLE_TESTPAGE === 'true'
      ? {
          path: '/test',
          component: () => import('@/views/TestView.vue'),
          meta: {
            layout: verticalLayout,
          },
        }
      : {},
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        layout: loginLayout,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 100) // Ritardo di 300ms
    })
  },
})

export default router
