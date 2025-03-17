// @ts-nocheck
import {
    createRouter,
    createWebHistory,
    createMemoryHistory,
    RouteLocationNormalized,
} from 'vue-router'
import { routes } from './routes'
import { userStore } from '../store/user'

const token = localStorage.getItem('user_token') || undefined
// createMemoryHistory
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !token && to.path !== '/login') {
        next({
            path: '/login',
        })
    } else if (to.path == '/login' && token) {
        next({
            path: '/',
        })
    } else {
        next()
    }
})

export default router
