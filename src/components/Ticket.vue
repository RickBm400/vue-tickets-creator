<script setup>
import Card from 'primevue/card'

const mediaImgs = [
    'https://media.revistagq.com/photos/60e2d1ba27e8735e0f6e91c2/16:9/w_2560%2Cc_limit/GettyImages-1196636627.jpg',
    'https://media.wonderlandmagazine.com/uploads/2023/08/BLK_ODYSSY_-132-scaled.jpg',
    'https://25gramos.com/wp-content/uploads/2019/10/25-Gramos-Astroworld-Festival.jpg',
]

const imageDialog = Math.round(2 * Math.random())
</script>
<template>
    <Card
        class="ticket-card grid grid-flow-col bg-[#FBF9F9] grid-cols-3"
        :pt="{
            body: {
                class: 'p-0 col-span-2 grow',
            },
            content: {
                class: 'event flex h-full px-8 py-6 items-center',
            },
        }"
    >
        <template #header>
            <img class="col-span-1" alt="ticket_image" :src="mediaImgs[imageDialog]" />
        </template>
        <template #content>
            <div class="flex flex-col h-full">
                <div class="event-header flex flex-col">
                    <h3 class="event-title">Don Toliver</h3>
                    <p class="event-description">
                        Sacramento <br />
                        California
                    </p>
                </div>
                <div class="event-info flex items-center gap-6 mt-auto">
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
            <div class="ml-auto">
                <p class="text-center time-info">
                    <span>06</span><br />
                    <span>Apr</span><br />
                    <span>19:40PM</span>
                </p>
            </div>
        </template>
    </Card>
</template>
<style scoped lang="sass">
@forward '../assets/presets/_fonts.sass'
@use '../assets/presets/_fonts' as *

$ticket-height: 196px
$black-variant-local: #353535
$local-gray: #928888

.ticket-card
    height: $ticket-height
    padding: 0px
    overflow: hidden
    .event
        padding-inline: 24px
        height: 100%
        flex-grow: 1
        &-title
            @include secondary-font(48px)
            color: $black-variant-local
            line-height: 2.4rem
        &-description
            @include secondary-font(14px)
            padding-top: 4px
            color: $local-gray
            line-height: 1rem
        .event-info
            div
                h4
                    @include secondary-font(18px)
                    color: $black-variant-local
                p
                    @include secondary-font(14px)
                    color: var(--background-gray-variant)
        .time-info *
            @include secondary-font()
        .time-info
            span:nth-child(1)
                color: $black-variant-local
                font-size: 3rem
                line-height: 3rem
            span:nth-child(3)
                color: $local-gray
                font-size: 3rem
                line-height: 3rem
            span:nth-child(5)
                color: $black-variant-local



    img
        width: 100%
        height: $ticket-height
        object-fit: cover
        object-position: 100%
</style>
