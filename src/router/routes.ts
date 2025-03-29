// @ts-ignore
// @ts-nocheck
export const routes = [
    {
        path: '/',
        component: () => import('@/views/dashboard/UserDashboard.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/dashboard/Events/index.vue'),
                meta: { requiresAuth: true },
            },
        ],
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },
]
