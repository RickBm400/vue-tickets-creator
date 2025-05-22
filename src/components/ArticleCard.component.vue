<script setup>
import { ref } from 'vue'
import { Card } from 'primevue'
// const props = defineProps({})
const contentTestList = ref([
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
    },
])
</script>
<template>
    <Card
        v-for="({ title, description }, index) in contentTestList"
        :key="index"
        class="media-card solid-border"
        :pt="{
            body: { class: 'p-0 h-[115px]' },
            content: {
                class: 'p-0 flex p-[10px] space-x-[18px] h-[115px]',
            },
        }"
    >
        <template #content>
            <img
                src="https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg"
                alt="syre"
                class="rounded-[8px] w-[94px] h-[94px]"
            />
            <div class="basis-1 grow flex flex-col justify-center object-cover">
                <h4 class="media-card-header">
                    {{ title }}
                </h4>
                <p class="media-card-content">
                    {{ description }}
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
