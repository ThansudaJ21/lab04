import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Edit.vue'
import EventEdit from '@/views/event/Register.vue'
import EventLayout from '@/views/event/Layout.vue'
import NotFound from '@/views/event/NotFound.vue'
import NetworkError from '@/views/event/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1, perPage: parseInt(route.query.perPage) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    component: EventLayout,
    props: true,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: '/event/:id/register',
        name: 'EventRegister',
        component: EventRegister,
        props: true
      },
      {
        path: '/event/:id/edit',
        name: 'EventEdit',
        component: EventEdit,
        props: true
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
