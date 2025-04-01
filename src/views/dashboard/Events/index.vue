<script setup>
import { useI18n } from 'vue-i18n'
import { dashboardI18n } from './i18n'
import Card from 'primevue/card'
import Ticket from '@/components/Ticket.vue'

const { t, locale } = useI18n({
    useScope: 'global',
    messages: dashboardI18n,
})
locale.value = 'en'

const _userName = 'Ricardo'
</script>
<template>
    <!-- content grid -->
    <div class="grid grid-flow-col grid-cols-12 gap-8">
        <div class="col-span-8 flex flex-col h-screen py-6">
            <Card
                class="welcome--card flex-shrink-0 col-span-2"
                :pt="{
                    body: {
                        class: 'grid items-center',
                    },
                }"
            >
                <template #title>
                    <h1 class="welcome--title">
                        {{ t('message.goodMorning') }} <br />
                        {{ _userName }} !
                    </h1>
                    <p>
                        {{ t('content.titleContent') }}
                    </p>
                </template>
            </Card>
            <div>
                <span id="filtros">filtros</span>
                <br />
                <span id="">csdc</span>
            </div>
            <div class="tickets-list space-y-4 overflow-y-scroll">
                <Ticket v-for="i = 0 in 8" :key="i" />
            </div>
        </div>
        <div class="h-screen col-span-4 py-6">
            olamundo
        </div>
    </div>
</template>
<style scoped lang="sass">
.welcome--title
    font-size: 3.5rem
    line-height: 3rem
.welcome--card
    color: white
    line-height: 56px
    height: 265px
    padding: 18px
    border-radius: 24px
    background: linear-gradient(to right, #000000, #842C2C)
    p
        font-weight: 200
        font-size: 1rem
.section-title
    font-size: 1.5rem
    font-weight: 500

.tickets-list::-webkit-scrollbar
    display: none
</style>
