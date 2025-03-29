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
    <div id="container" class="h-full grid grid-rows-[64px_1fr] px-8 py-4">
        <nav></nav>
        <div class="dashboard-content grid grid-flow-col grid-cols-10">
            <div class="col-span-7 space-y-4 flex flex-col">
                <Card class="welcome--card flex-none">
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
                <section class="recent--tickets grow flex flex-col h-[400px]">
                    <h2 class="section-title">Recent Events</h2>
                    <div class="tickets-list space-y-4 grow overflow-y-scroll">
                        <Ticket />
                        <Ticket />
                        <Ticket />
                        <Ticket />
                        <Ticket />
                        <Ticket />
                        <Ticket />
                    </div>
                </section>
            </div>
            <div class="dashboard-utils col-span-3"></div>
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
</style>
