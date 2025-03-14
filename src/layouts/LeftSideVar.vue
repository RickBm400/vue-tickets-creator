<script setup>
// vue setup
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { generalMemberSBOpts } from './utils/sideBarLinks'
// primevue components
import Menu from 'primevue/menu'
// component props
const { rootClass } = defineProps({
    rootClass: {
        type: String,
        default: '',
    },
})

const dashboardPages = ref([...generalMemberSBOpts])
</script>
<template>
    <aside class="left-side-var__container" :class="rootClass">
        <Menu
            :model="dashboardPages"
            class="flex flex-col space-y-12"
            :pt="{
                list: {
                    class: 'flex flex-col space-y-2',
                },
            }"
        >
            <template #item="{ item, props }">
                <RouterLink v-slot="{ href, navigate }" :to="item.route" custom>
                    <a
                        v-ripple
                        :href="href"
                        aria-disabled="true"
                        class="menu"
                        v-bind="props.action"
                        @click="navigate"
                    >
                        {{ item.label }}
                    </a>
                </RouterLink>
            </template>
        </Menu>
        <div>
            <Button label="Holamundo"></Button>
        </div>
    </aside>
</template>
<style scoped lang="sass">
.menu
    cursor: pointer
</style>
