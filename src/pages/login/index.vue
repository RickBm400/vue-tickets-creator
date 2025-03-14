<script setup>
import { Form } from '@primevue/forms'
import { reactive } from 'vue'
import { InputText, Button } from 'primevue'
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
                <h2 class="welcome-title">Welcome <br> Back!</h2>
                <p>
                    Log in with your account or create a new one in seconds.
                </p>
            </div>
        </div>
        <div class="col-span-4 flex items-center">
            <Form class="w-full px-4">
                <div class="flex flex-col space-y-4">
                    <InputText type="text" placeholder="email" />
                    <InputText type="text" placeholder="password" />
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
