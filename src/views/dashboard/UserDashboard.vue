<script setup>
import { RouterView } from 'vue-router'
import LeftSideVar from '@/layouts/LeftSideVar.vue'
</script>
<template>
  <div class="grid grid-cols-24 gap-8 w-screen h-screen">
    <LeftSideVar :root-class="'px-4 py-6 col-span-4'" />
    <main class="col-span-20 w-vh h-screen">
      <RouterView />
    </main>
  </div>
</template>
