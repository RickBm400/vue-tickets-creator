<script setup>
import { RouterView } from 'vue-router';
import LeftSideVar from '../components/layout/LeftSideVar.vue';
</script>
<template>
    <div class="grid grid-cols-24 gap-8 w-screen h-screen">
        <LeftSideVar class="col-span-4 w-full bg-red-400" />
        <main class="col-span-auto">
            <RouterView />
        </main>
    </div>
</template>