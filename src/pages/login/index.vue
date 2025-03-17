<script setup>
import { Form } from '@primevue/forms'
import { reactive, inject } from 'vue'
import { InputText, Button, IconField, InputIcon } from 'primevue'
import { logIn, signUp } from '@/services/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

let passwordToggle = ref(true)
let formSwitch = ref(true)

const router = useRouter()

// forms initial state
let formDataInitialState = {
    email: '',
    password: '',
}
let SUFormDataInitialState = {
    user_name: '',
    nick_name: '',
    email: '',
    confirmEmail: '',
    password: '',
}

// log in form data object
let formData = ref({ ...formDataInitialState })

// sign up form data object
let SUFormData = ref({ ...SUFormDataInitialState })

function switchForms() {
    return (formSwitch.value = !formSwitch.value)
}

function handlePasswordEye() {
    return (passwordToggle.value = !passwordToggle.value)
}

function passord_typeAndIcon() {
    const pSwitch = passwordToggle.value
    return {
        type: pSwitch ? 'password' : 'text',
        icon: pSwitch ? 'pi-eye-slash' : 'pi-eye',
    }
}

const $_loginUser = async ({ valid, values }) => {
    try {
        if (!valid) throw new Error('Incorrect Password')
        const response = await logIn(values)
        if (response) {
            router.go('/')
        }
    } catch (error) {
        console.log(error)
    }
}

const $_registUser = async ({ valid, values }) => {
    try {
        const response = await signUp(values)
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
            <Form
                v-if="formSwitch"
                class="w-full px-4 flex flex-col space-y-4"
                :initial-values="formData"
                @submit="$_loginUser"
            >
                <InputText name="email" type="text" placeholder="email" />
                <IconField>
                    <InputText
                        name="password"
                        :type="passord_typeAndIcon().type"
                        placeholder="password"
                    />
                    <InputIcon
                        class="pi"
                        :class="passord_typeAndIcon().icon"
                        @click="handlePasswordEye"
                    />
                </IconField>
                <span class="text-end reset-password-link"> Forgot password? </span>
                <Button type="submit" label="login" />
                <p class="regist-link">
                    Not account yet? <span class="form-switch" @click="switchForms">Register</span>
                </p>
            </Form>
            <Form
                v-else
                class="w-full px-4 flex flex-col space-y-4"
                :initial-values="SUFormData"
                @submit="$_registUser"
            >
                <InputText name="user_name" placeholder="Name" />
                <InputText name="nick_name" placeholder="User name" />
                <InputText name="email" placeholder="Email" />
                <IconField>
                    <InputText
                        name="password"
                        :type="passord_typeAndIcon().type"
                        placeholder="password"
                    />
                    <InputIcon
                        class="pi"
                        :class="passord_typeAndIcon().icon"
                        @click="handlePasswordEye"
                    />
                </IconField>
                <Button type="submit" label="Sign Up" />
                <p class="regist-link">
                    Already have an account?
                    <span class="form-switch" @click="switchForms">Login</span>
                </p>
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
        cursor: pointer
        color: #1f1f1f80
        font-weight: 500
        &:hover
            color: var(--primary-color)
</style>
