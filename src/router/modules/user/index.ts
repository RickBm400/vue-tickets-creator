export const userRoutes = [
    {
        path: '/user',
        component: () => import('@/views/dashboard/UserDashboard.vue'),
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/Events/index.vue'),
                meta: { requiresAuth: true },
                name: 'Tickets',
            },
            {
                path: 'events-calendar',
                component: () => import('@/views/dashboard/Events/index.vue'),
                meta: { requiresAuth: true },
                name: 'Calendario',
            },
            {
                path: 'pathMatch(.*)*',
                name: 'NotFound',
                component: () => import('@/views/NotFound.vue'),
            },
        ],
    },
]
