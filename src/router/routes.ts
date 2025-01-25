// @ts-ignore
// @ts-nocheck
export const routes = [
  {
    path: '/',
    component: () => import('@/pages/dashboard/UserDashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/dashboard/pages/TicketsPage.vue'),
      },
      {
        path: '/events',
        component: () => import('@/pages/dashboard/pages/UserEvents.vue'),
      },
      {
        path: '/available-events',
        component: () => import('@/pages/dashboard/pages/Events.vue')
      }
    ],
  },
];
