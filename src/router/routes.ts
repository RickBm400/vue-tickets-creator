// @ts-ignore

import { organizatorRoutes } from './modules/organizator'
import { userRoutes } from './modules/user'

// @ts-nocheck
export const routes = [
    ...userRoutes,
    ...organizatorRoutes,
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
    },
]
