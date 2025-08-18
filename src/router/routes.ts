// @ts-ignore

import { userRoutes } from './modules/user'

// @ts-nocheck
export const routes = [
    ...userRoutes,
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },
]
