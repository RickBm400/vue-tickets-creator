<script setup>
// vue setup
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { generalMemberSBOpts } from './utils/sideBarLinks'
// primevue components
import Menu from 'primevue/menu'
import { Listbox } from 'primevue'
// component props
const { rootClass } = defineProps({
    rootClass: {
        type: String,
        default: '',
    },
})

const dashboardPages = ref([...generalMemberSBOpts])
const selectedPage = ref()
</script>
<template>
    <aside class="left-side-var__container" :class="rootClass">
        <Listbox :model="selectedPage" :options="dashboardPages" option-label="label"> </Listbox>
    </aside>
</template>
<style scoped lang="sass"></style>
