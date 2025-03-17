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
                meta: { requiresAuth: true },
            },
            {
                path: '/events',
                component: () => import('@/pages/dashboard/pages/UserEvents.vue'),
                meta: { requiresAuth: true },
            },
            {
                path: '/available-events',
                component: () => import('@/pages/dashboard/pages/Events.vue'),
                meta: { requiresAuth: true },
            },
        ],
    },
    {
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
    },
]
