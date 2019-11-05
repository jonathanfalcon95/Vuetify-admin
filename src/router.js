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
          name: 'Pricing',
          path: 'pricing',
          component: () => import('@/views/pages/Pricing'),
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
        // Kitchen
        {
          name: 'Vendors',
          path: 'vendors/vendors',
          component: () => import('@/views/container/Vendors/Vendors'),
        },
        // Pages
        {
          name: 'RTL',
          path: 'pages/rtl',
          component: () => import('@/views/container/pages/Rtl'),
        },
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/container/pages/UserProfile'),
        },
        {
          name: 'Timeline',
          path: 'pages/timeline',
          component: () => import('@/views/container/pages/Timeline'),
        },
        // Components
        {
          name: 'Buttons',
          path: 'components/buttons',
          component: () => import('@/views/container/component/Buttons'),
        },
        {
          name: 'Grid System',
          path: 'components/grid-system',
          component: () => import('@/views/container/component/Grid'),
        },
        {
          name: 'Tabs',
          path: 'components/tabs',
          component: () => import('@/views/container/component/Tabs'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/container/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/container/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/container/component/Typography'),
        },
        // Forms
        {
          name: 'Regular Forms',
          path: 'forms/regular',
          component: () => import('@/views/container/forms/RegularForms'),
        },
        {
          name: 'Extended Forms',
          path: 'forms/extended',
          component: () => import('@/views/container/forms/ExtendedForms'),
        },
        {
          name: 'Validation Forms',
          path: 'forms/validation',
          component: () => import('@/views/container/forms/ValidationForms'),
        },
        {
          name: 'Wizard',
          path: 'forms/wizard',
          component: () => import('@/views/container/forms/Wizard'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/container/tables/RegularTables'),
        },
        {
          name: 'Extended Tables',
          path: 'tables/extended-tables',
          component: () => import('@/views/container/tables/ExtendedTables'),
        },
        {
          name: 'Data Tabels',
          path: 'tables/data-tables',
          component: () => import('@/views/container/tables/DataTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/container/maps/GoogleMaps'),
        },
        {
          name: 'Full Screen Map',
          path: 'maps/full-screen-map',
          component: () => import('@/views/container/maps/FullScreenMap'),
        },
        // Root level
        {
          name: 'Widgets',
          path: 'widgets',
          component: () => import('@/views/container/Widgets'),
        },
        {
          name: 'Charts',
          path: 'charts',
          component: () => import('@/views/container/Charts'),
        },
        {
          name: 'Calendar',
          path: 'calendar',
          component: () => import('@/views/container/Calendar'),
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
