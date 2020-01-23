import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Insights from './pages/Insights'
import Recruitment from './pages/Insights/Recruitment'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Dashboard from './pages/Dashboard'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'Profile',
        path: '/profile/:id',
        component: Profile
      },
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        children: [
          {
            name: 'Search',
            path: '/search',
            component: Search
          },
          {
            name: 'Insights',
            path: '/insights',
            component: Insights,
            redirect: '/insights/recruitment',
            children: [
              {
                name: 'Recruitment',
                path: '/insights/recruitment',
                component: Recruitment
              }
            ]
          }
        ]
      },
      {
        name: 'home',
        path: '/',
        component: Home
      }
    ]
  })
}
