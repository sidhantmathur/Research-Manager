import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import NewParticipant from '@/components/newParticipant'
import ViewParticipant from '@/components/viewParticipant'
import EditParticipant from '@/components/editParticipant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-participant',
      component: NewParticipant
    },
    {
      path: '/edit/:id',
      name: 'edit-participant',
      component: EditParticipant
    },
    {
      path: '/:id',
      name: 'view-participant',
      component: ViewParticipant
    },
  ]
})
