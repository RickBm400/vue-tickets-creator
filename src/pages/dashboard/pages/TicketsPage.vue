<script setup>
import Ticket from '@/components/Ticket.vue'
</script>

<template>
    <div class="w-full h-full py-12 space-y-6">
        <Ticket
            :ticketBackground="'../../public/saint_frank.png'"
            :name="'Grand Turismo'"
            :description="' Live a great experience running in the streets of San Francisco'"
        />
        <Ticket
            :ticketBackground="'../../public/saint_frank.png'"
            :name="'Grand Turismo'"
            :description="' Live a great experience running in the streets of San Francisco'"
        />
    </div>
</template>
