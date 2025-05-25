<script setup>
// vue setup
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { generalMemberSBOpts } from './utils/sideBarLinks'
// primevue components
import Menu from 'primevue/menu'
import { Listbox, Button, Card } from 'primevue'
// component props
const { name, path } = useRoute()
const router = useRouter()
const { rootClass } = defineProps({
    rootClass: {
        type: String,
        default: '',
    },
})

const buttons_pt_property = {
    root: {
        class: 'solid-border',
    },
}

// example data input
const userInfo = ref({
    name: 'AshRyu',
    email: 'xANAx@gmail.com',
})

// redirect to selected route
const changeRoute = () => router.push({ path: selectedPage.value.route })

const dashboardPages = ref([...generalMemberSBOpts])
const selectedPage = ref({ label: name, route: path })
</script>
<template>
    <aside class="left-side-bar__container" :class="rootClass">
        <div class="px-3 space-y-5">
            <Card
            class="user__card "
            :pt="{
                body: { class: 'p-3' },
                content: { class: 'flex items-center gap-4' }
            }">
                <template #content>
                    <img
                        src="https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg"
                        alt="syre"
                        class="rounded-[8px] size-[70px]"
                    />
                    <div class="flex flex-col">
                        <span class="font-bold text-[24px]">
                            {{ userInfo.name }}
                        </span>
                        <span class="text-[12px]" style="color: var(--gray-variant);">
                            {{ userInfo.email }}
                        </span>
                    </div>
                </template>
            </Card>
            <Listbox
                v-model="selectedPage"
                :options="dashboardPages"
                option-label="label"
                @change="changeRoute()"
            />
        </div>
        <div class="flex flex-col space-y-2 mt-auto">
            <Button class="action__button" label="Configuración" :pt="buttons_pt_property" />
            <Button class="action__button" label="Cerrar Sesión" :pt="buttons_pt_property" />
        </div>
    </aside>
</template>
<style scoped lang="sass">
.left-side-bar__container
     @apply flex flex-col
     .action__button
        background-color: var(--background-gray-variant)
        color: var(--gray-text)
        font-size: .9rem
        &:hover
            border: 0px
            background-color: var(--primary-color)
            color: var(--white-text)
.user__card
    background-color: var(--background-gray-variant)
</style>
