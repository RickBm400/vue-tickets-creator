<script setup>
import { Form } from '@primevue/forms'
import { reactive } from 'vue'
import { InputText, Button } from 'primevue'
</script>
<template>
    <div class="grid grid-cols-12 p-6 gap-8 h-full w-full">
        <div
            class="col-span-8 rounded-[1rem]"
            :style="{
                background: `url(/login/login_background.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }"
        ></div>
        <div class="col-span-4">
            <Form class="w-full">
                <div class="flex flex-col space-y-4">
                    <InputText type="text" placeholder="email" class="inputs"></InputText>
                    <InputText type="text" placeholder="password" class="inputs"></InputText>
                    <Button type="submit" label="login" class="submit-button"></Button>
                </div>
            </Form>
        </div>
    </div>
</template>
<style scoped lang="sass">
.submit-button
    background-color: #18181b
    border: 0px
    color: white
    height: 2rem
    &:hover
        background-color: red
        border: 0px solid transparent
.inputs
  border: 1px solid transparent
  padding-left: 1rem
  height: 2rem
  &:focus
    border: 1px solid red
</style>
