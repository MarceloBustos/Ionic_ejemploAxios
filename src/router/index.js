import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/telefonos'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: 'telefonos',
        component: () => import('@/views/TelefonoList.vue')
      },
      {
        path: 'nuevo',
        component: () => import('@/views/NuevoTelefono.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
