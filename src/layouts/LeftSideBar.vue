<script setup>
// vue setup
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { generalMemberSBOpts } from './utils/sideBarLinks'
// primevue components
import Menu from 'primevue/menu'
import { Listbox, Button } from 'primevue'
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

// redirect to selected route
const changeRoute = () => router.push({ path: selectedPage.value.route })

const dashboardPages = ref([...generalMemberSBOpts])
const selectedPage = ref({ label: name, route: path })
</script>
<template>
    <aside class="left-side-bar__container" :class="rootClass">
        <Listbox
            v-model="selectedPage"
            :options="dashboardPages"
            option-label="label"
            @change="changeRoute()"
        />
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
            background-color: var(--primary-color)
            color: var(--white-text)
</style>
