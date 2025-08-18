<script setup>
import { RouterView } from 'vue-router'
import LeftSideBar from '@/layouts/LeftSideBar.vue'
</script>
<template>
    <div class="px-6 py-6 grid grid-cols-24 h-screen gap-6">
        <left-side-bar :root-class="'col-span-4'" />
        <router-view class="col-span-20" />
    </div>
</template>
