<template>
    <div class="ticket__container gap-4 flex flex-row">
        <div class="ticket__container-user--section basis-2/3 p-4">
            Esta es la parte de la imagen
        </div>
        <div class="basis-1/3 bg-green-50 p-4 bebas">
      <span class="">{{ userName }}</span> 
        </div>
    </div>
</template>
<script setup>
import { Button } from 'primevue'
import { ref } from 'vue'

const userName = ref('Ricardo Bm')
</script>
<style scoped lang="sass">
.bebas
  @include bebas-neue(2)

.ticket__container
  width: 900px
  height: 300px
  border-radius: 12px
  overflow: hidden
  &-user--section
    background: url("../../public/saint_frank.png")
    background-size: cover
    background-repeat: no-repeat
    backgroun-position: center
  &-left--card
      position: relative
      background-color: #578E7E
      height: 100%
      width: 70%
      border-radius: 8px
      padding: 16px
      font-size: 2rem
</style>
