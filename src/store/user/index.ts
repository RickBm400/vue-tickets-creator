import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userStore = defineStore('user', () => {
    const user = ref({
        value: {},
        jwt: '',
    })

    function saveUserToken(token: any) {
        localStorage.setItem('user_token', token)
        user.value.jwt = token
    }

    return { user, saveUserToken }
})
