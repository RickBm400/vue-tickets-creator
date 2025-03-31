<script setup>
import Card from 'primevue/card'
</script>
<template>
    <Card
        class="ticket-card grid grid-flow-col bg-[#FBF9F9] grid-cols-3"
        :pt="{
            body: {
                class: 'p-0 col-span-2 flex self-center justify-center grow',
            },
        }"
    >
        <template #header>
            <img class="col-span-1" alt="ticket_image" src="/login/login_background.jpg" />
        </template>
        <template #content>
            <div class="event flex">
                <div class="event-header flex flex-col">
                    <h3 class="event-title">Don Toliver</h3>
                    <p class="event-description">
                        Sacramento <br />
                        California
                    </p>
                </div>
                <div class="event-info ml-auto flex items-center gap-6">
                    <div>
                        <h4>March 12</h4>
                        <p>3:30 PM</p>
                    </div>
                    <div>
                        <h4>Cosmopolitan</h4>
                        <p>San Juan</p>
                    </div>
                    <div>
                        <h4>H-405</h4>
                        <p>ANGAR 3</p>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>
<style scoped lang="sass">
@forward '../assets/presets/_fonts.sass'
@use '../assets/presets/_fonts' as *

$ticket-height: 196px
$gray-variant-local: #928888

.ticket-card
    height: $ticket-height
    padding: 0px
    overflow: hidden
    .event
        padding: 24px
        flex-grow: 1
        height: 100%
        &-title
            @include secondary-font(48px)
            color: black
            line-height: 2rem
        &-description
            @include secondary-font(14px)
            padding-top: 4px
            color: $gray-variant-local
            line-height: 1rem
        .event-info
            div
                h4
                    @include secondary-font(18px)
                    color: black
                p
                    @include secondary-font(14px)
                    color: $gray-variant-local


    img
        width: 100%
        height: $ticket-height
        object-fit: fit
</style>
