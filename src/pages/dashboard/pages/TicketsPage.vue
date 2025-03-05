<script setup>
import { ref } from 'vue'
import Ticket from '@/components/Ticket.vue'

const cardsInfo = ref({
    ticketBackground: '/saint_frank.png',
    name: 'Grand Turismo',
    description: "Live a life you'll remember",
})
</script>

<template>
    <div class="w-full h-full py-12 space-y-6">
        <Ticket v-bind="cardsInfo" />
    </div>
</template>
