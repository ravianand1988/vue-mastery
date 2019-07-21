import Vue from 'vue'
import Router from 'vue-router'
import Events from './views/Events.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  caseSensitive: false,
  routes: [
    {
      path: '/',
      name: 'events',
      component: Events
    },
    {
      path: '/event/create',
      name: 'event-create',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/EventCreate')
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: () => import(/* webpackChunkName: "about" */ './views/EventDetail'),
      props: true
    },
    {
      path: '/user/:username',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/User'),
      props: true
    }
  ]
})
