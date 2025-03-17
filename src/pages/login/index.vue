<script setup>
import { Form } from '@primevue/forms'
import { reactive, inject } from 'vue'
import { InputText, Button, IconField, InputIcon } from 'primevue'
import { logIn } from '@/services/auth'
import { ref } from 'vue'

let passwordToggle = ref(true)
let formData = ref({
    email: '',
    password: ''
})

function handlePasswordEye() {
    return passwordToggle.value = !passwordToggle.value
}

function passord_typeAndIcon() {
    const pSwitch = passwordToggle.value
    return {
        type: pSwitch ? 'password' : 'text',
        icon: pSwitch ? 'pi-eye-slash' : 'pi-eye'
    }
}

const $_loginUser = async({ valid, values }) => {
    try {
        if (!valid) throw new Error('Incorrect Password')
        let response = await logIn(values)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
    <div class="grid grid-cols-12 p-6 gap-8 h-full w-full relative">
        <div
            class="col-span-8 rounded-[1rem]"
            :style="{
                background: `url(/login/login_background.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }"
        >
            <div class="welcome">
                <h2 class="welcome-title">
                    Welcome <br />
                    Back!
                </h2>
                <p>Log in with your account or create a new one in seconds.</p>
            </div>
        </div>
        <div class="col-span-4 flex items-center">
            <Form class="w-full px-4" :initial-values="formData" @submit="$_loginUser">
                <div class="flex flex-col space-y-4">
                    <InputText name="email" type="text" placeholder="email" />
                    <IconField>
                        <InputText name="password" :type="passord_typeAndIcon().type" placeholder="password" />
                        <InputIcon class="pi" :class="passord_typeAndIcon().icon" @click="handlePasswordEye"/>
                    </IconField>
                    <span class="text-end reset-password-link"> Forgot password? </span>
                    <Button type="submit" label="login"></Button>
                    <p class="regist-link">Not account yet? <span>Register</span></p>
                </div>
            </Form>
        </div>
    </div>
</template>
<style scoped lang="sass">
@use "../../assets/presets/_fonts" as *

.welcome
    position: absolute
    bottom: 84px
    left: 84px
    &-title
        font-size: 84px
        line-height: 78px
        color: var(--white-text)
        margin-bottom: 16px
    p
        color: var(--white-text)
        font-weight: 200
.reset-password-link
    font-size: 14px
    color: var(--gray-variant)
.regist-link
    font-size: 14px
    color: var(--gray-variant)
    span
        color: var(--primary-color)
        font-weight: 500
</style>
