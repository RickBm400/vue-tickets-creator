<script setup>
import { Button } from 'primevue'
import { ref, defineProps } from 'vue'

const { ticketBackground } = defineProps({
    ticketBackground: {
        type: String,
        default: undefined,
    },
})

const userName = ref('Ricardo Bm')
const cardBackground = ref(ticketBackground)
</script>

<template>
    <div class="ticket__container gap-4 flex flex-row">
        <div class="ticket__container-event-info basis-2/3">
            <div
                class="h-2/3 p-4 ticket-image-format"
                :style="{
                    background: `url(${ticketBackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }"
            >
                ola
            </div>
            <div class="h-1/3 bg-red-50 p-4 flex">
                <section class="w-3/4 px-2">
                    Esto será para el nombre del turismo
                </section>
                <div id="divider"></div>
                <div class="w-1/4 px-2">
                    <span> Hola </span>
                </div>
            </div>
        </div>
        <div class="basis-1/3 bg-red-500 p-4">
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
  &-user-info
    @include bebas-neue(2rem)

// .ticket-image-format
//   background-size: cover
//   background-repeat: no-repeat
//   backgroun-position: center
</style>
