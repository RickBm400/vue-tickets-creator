<template>
    <aside class="left-side-var__container p-8" :class="class">
        Holamundo
    </aside>
</template>
<script setup>
const {  } = defineProps({
    class: {
        type: String,
        default: ''
    }
})
</script>
<style scoped lang="sass">

</style>