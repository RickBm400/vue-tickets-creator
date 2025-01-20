<template>
    <div class="grid grid-cols-12 gap-4 bg-black">
        <LeftSideVar />
        <main class="col-span-9">
            <RouterView />
        </main>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import LeftSideVar from '../components/layout/LeftSideVar.vue';
</script>