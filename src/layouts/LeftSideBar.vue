<script setup>
// vue setup
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { generalMemberSBOpts } from './utils/sideBarLinks'
// primevue components
import Menu from 'primevue/menu'
import { Listbox } from 'primevue'
// component props
const { name, path } = useRoute()
const router = useRouter()
const { rootClass } = defineProps({
    rootClass: {
        type: String,
        default: '',
    },
})

// redirect to selected route
const changeRoute = () => router.push({ path: selectedPage.value.route })

const dashboardPages = ref([...generalMemberSBOpts])
const selectedPage = ref({ label: name, route: path })
</script>
<template>
    <aside class="left-side-var__container" :class="rootClass">
        <Listbox
            v-model="selectedPage"
            :options="dashboardPages"
            option-label="label"
            @change="changeRoute()"
        />
    </aside>
</template>
<style scoped lang="sass"></style>
