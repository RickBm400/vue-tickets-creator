<script setup>
import { RouterView } from 'vue-router'
import LeftSideBar from '@/layouts/LeftSideBar.vue'
</script>
<template>
    <div class="px-8 py-10 grid grid-cols-24 h-screen gap-6">
        <LeftSideBar :root-class="'col-span-4'" />
        <RouterView class="col-span-20" />
        <!-- <main class="col-span-20"></main> -->
    </div>
</template>
