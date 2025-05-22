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
        class="ticket-card flex bg-[#F9F9F9]"
        :pt="{
            body: {
                class: 'p-0 flex h-full',
            },
            content: {
                class: 'event flex h-full',
            },
        }"
    >
        <!-- <template #header>
        </template> -->
        <template #content>
            <img class="" alt="ticket_image" :src="mediaImgs[imageDialog]" />
            <div class="px-[42px] py-6 flex grow">
                <div class="flex flex-col">
                    <div class="event-header flex flex-col">
                        <h3 class="event-title">Don Toliver</h3>
                        <p class="event-description">Sacramento - California</p>
                    </div>
                    <div class="event-info flex items-center gap-6 mt-auto">
                        <div>
                            <h4>Cosmopolitan</h4>
                            <p>San Juan</p>
                        </div>
                        <div>
                            <h4>H-405</h4>
                            <p>ANGAR 3</p>
                        </div>
                        <div>
                            <h4>Platino</h4>
                            <p>$1000 COP</p>
                        </div>
                    </div>
                </div>
                <div class="ml-auto">
                    <p class="flex flex-col items-center justify-center h-full time-info">
                        <span>06</span>
                        <span>Apr</span>
                        <span>19:40PM</span>
                    </p>
                </div>
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
    border-radius: 8px
    border: 1px solid #DDDDDD
    .event
        padding-inline: 24px
        &-title
            @include secondary-font(40px)
            color: $black-variant-local
            line-height: 2.4rem
        &-description
            @include secondary-font(16px)
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
                    color: $local-gray
        .time-info *
            @include secondary-font()
        .time-info
            span:nth-child(1)
                color: $black-variant-local
                font-size: 3rem
                line-height: 3rem
            span:nth-child(2)
                color: $local-gray
                font-size: 3rem
                line-height: 3rem
            span:nth-child(3)
                color: $black-variant-local

    img
        width: 359px
        height: 100%
        object-fit: cover
        object-position: 100%
</style>
