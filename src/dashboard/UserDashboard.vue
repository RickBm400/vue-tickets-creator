<template>
    <LeftSideVar />
    <div style="background-color: blue;">
    <main>
        <RouterView />
    </main>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import LeftSideVar from '../components/layout/LeftSideVar.vue';
</script>