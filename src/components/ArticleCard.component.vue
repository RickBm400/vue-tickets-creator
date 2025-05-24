<script setup>
import { ref } from 'vue'
import { Card } from 'primevue'
const props = defineProps({
    title: String,
    description: String,
    image: String,
    image_alt: String,
})
</script>
<template>
    <Card
        class="media-card"
        :pt="{
            body: { class: 'p-0 h-[115px]' },
            content: {
                class: 'p-0 flex p-[10px] space-x-[18px] h-[115px]',
            },
        }"
    >
        <template #content>
            <img
                :src="props.image"
                :alt="props.image_alt"
                class="rounded-[8px] w-[94px] h-[94px]"
            />
            <div class="basis-1 grow flex flex-col justify-center object-cover">
                <h4 class="media-card-header">
                    {{ props.title }}
                </h4>
                <p class="media-card-content">
                    {{ props.description }}
                </p>
            </div>
        </template>
    </Card>
</template>
<style scoped lang="sass">
@forward "../assets/presets/_fonts.sass"
@use "../assets/presets/_fonts" as *

.media-card
    height: 115px
    &-header
        @include secondary-font(24px)
        line-height: 24px
        width: 180px
    &-content
        font-size: .8rem
        line-height: 1rem
        white-space: break-spaces
        overflow: hidden
        word-break: break-word
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
        text-overflow: ellips
</style>
