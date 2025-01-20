<template>
    <div class="ticket__container">
        <div class="ticket__container-left--card">
            <div></div>
            <div>
                Ticket Template
            </div>
        </div>
    </div>
</template>
<script setup>
import { Button } from 'primevue';
</script>
<style scoped lang="sass">
.ticket__container
    background-color: #FFFAEC
    width: 900px
    height: 300px
    border-radius: 20px
    padding: 16px
    &-left--card
        position: relative
        background-color: #578E7E
        height: 100%
        width: 70%
        border-radius: 8px
        padding: 16px
        font-size: 2rem
        @include bebas-neue
</style>