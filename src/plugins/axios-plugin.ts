// @ts-nocheck
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const axiosInstance = instance

export default {
    install(app, options) {
        app.config.globalProperties.$axios = instance
        app.provide('axios', instance)
    },
}
