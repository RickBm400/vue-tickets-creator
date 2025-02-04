<script setup>
import { Button } from 'primevue'
import { ref, defineProps } from 'vue'

const { ticketBackground } = defineProps({
    ticketBackground: {
        type: String,
        default: undefined,
    },
    name: String,
    description: String,
    date: String,
})

const userName = ref('Ricardo Bm')
const cardBackground = ref(ticketBackground)
</script>

<template>
    <div class="ticket__container flex flex-row">
        <div class="ticket__container-event-info basis-2/3">
            <div
                class="h-2/3 p-4"
                :style="{
                    background: `url(${ticketBackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }"
            ></div>
            <div class="h-1/3 bg-red-50 p-4 flex">
                <section class="w-3/4 pr-2">
                    <h4 class="name">
                        {{ name }}
                    </h4>
                    <p class="description">
                        {{ description }}
                    </p>
                </section>
                <div id="divider"></div>
                <div class="w-1/4 px-2">This is for time</div>
            </div>
        </div>
        <div class="basis-1/3 bg-black p-4">
            <span class="ticket__container-user-info">{{ userName }}</span>
        </div>
    </div>
</template>

<style scoped lang="sass">
#divider
  border: 2px solid gray
  heigh: 100%

.ticket__container
  width: 900px
  height: 300px
  border-radius: 8px
  overflow: hidden
  &-event-info
    @include bebas-neue(1rem)
    .name
      font-size: 2rem
    .description
      @include outfit
      font-size: 12px
  &-user-info
    @include bebas-neue(2rem)
    color: white
</style>
