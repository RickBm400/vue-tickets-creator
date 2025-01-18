<template>
    <main class="vue-app__container">
        <RouterView />
    </main>
</template>
<script setup>
import { RouterView } from 'vue-router';
</script>
<style scoped lang="sass">
.vue-app__container
    width: 100vw
    height: 100vh
</style>