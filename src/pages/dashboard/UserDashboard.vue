<script setup>
import { RouterView } from 'vue-router'
import LeftSideVar from '@/layouts/LeftSideVar.vue'
</script>
<template>
    <div class="grid grid-cols-24 gap-8 w-screen h-screen">
        <LeftSideVar rootClass="p-8 col-span-4 w-full bg-[#f3f3f3]" />
        <main class="col-span-20 w-full">
            <RouterView />
        </main>
    </div>
</template>
