// @ts-ignore
// @ts-nocheck
export const routes = [
  {
    path: '/',
    component: () => import('@/dashboard/UserDashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/Ticket.vue'),
      },
    ],
  },
];
