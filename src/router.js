import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pages',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'Lock',
          path: 'lock',
          component: () => import('@/views/pages/Lock'),
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/pages/Authentication/Login'),
        },

        {
          name: 'Register',
          path: 'register',
          component: () => import('@/views/pages/Register'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/views/container/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/container/Dashboard'),
        },
        // Users
        {
          name: 'Users',
          path: 'users/users',
          component: () => import('@/views/container/Users/Users'),
        },
        {
          name: 'UsersFrom',
          path: 'users/form',
          component: () => import('@/views/container/Users/UsersFrom'),
        },
        // Kitchen
        {
          name: 'Kitchens',
          path: 'kitchens/kitchens',
          component: () => import('@/views/container/Kitchens/Kitchens'),

        },
        {
          name: 'KitchensForm',
          path: 'kitchens/form',
          component: () => import('@/views/container/Kitchens/KitchenForm'),

        },
        {
          name: 'Kitchens-Show',
          path: 'kitchens/kitchens-show',
          component: () => import('@/views/container/Kitchens/KitchenForm'),
        },
        {
          name: 'Vendors',
          path: 'vendors/vendors',
          component: () => import('@/views/container/Vendors/Vendors'),
        },        // Users Roles
        {
          name: 'UsersRoles',
          path: 'usersroles/usersroles',
          component: () => import('@/views/container/UsersRoles/UsersRoles'),

        },
      ],
    },
    {
      path: '*',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: '404 Error',
          path: '',
          component: () => import('@/views/pages/Error'),
        },
      ],
    },
  ],
})
