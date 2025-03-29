<script setup>
import Card from 'primevue/card'
</script>
<template>
    <Card
        class="ticket-card grid grid-flow-col grid-cols-3"
        :pt="{
            body: {
                class: 'p-0 col-span-2',
            },
        }"
    >
        <template #header>
            <img class="col-span-1" alt="ticket_image" src="/login/login_background.jpg" />
        </template>
        <template #content>
            <div class="event">
                <h3 class="event-title">
                    Don Toliver
                </h3>
                <p class="event-description">
                    Sacramento - California
                </p>
            </div>
        </template>
    </Card>
</template>
<style scoped lang="sass">
@use '../assets/presets/_fonts' as *

$ticket-height: 196px

.ticket-card
    height: $ticket-height
    padding: 0px
    overflow: hidden
    .event
        padding: 24px
        &-title
            font-size: 40px
            line-height: 2rem
            @include secondary-font
        &-description
            font-size: 14px
            color: gray
    img
        width: 100%
        height: $ticket-height
        object-fit: fit
</style>
