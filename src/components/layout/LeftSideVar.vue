<template>
    <aside class="left-side-var__container" :class="rootClass">
        <Menu :model="dashboardOptions" class="flex flex-col space-y-12" :pt="{
            list: {
                class: 'flex flex-col space-y-2'
            },
        }">
            <template #item="{ item, props }">
                <RouterLink custom :to="item.route" v-slot="{ href, navigate }">
                    <a v-ripple :href="href" class="menu " v-bind="props.action" @click="navigate"> {{ item.label }} </a>
                </RouterLink>
            </template>
        </Menu>
        <div>
            <Button label="Holamundo"></Button>
        </div>
    </aside>
</template>
<script setup>
// vue setup
import { ref } from "vue"
import { RouterLink } from "vue-router";
import { generalMemberSBOptions } from "./utils/sideBarLinks"
// primevue components
import Menu from "primevue/menu";
// component props
const { rootClass } = defineProps(['rootClass'])

const dashboardOptions = ref([...generalMemberSBOptions])
</script>
<style scoped lang="sass">
.menu
    @include outfit
    margin-bottom: 8px
    cursor: pointer
</style>