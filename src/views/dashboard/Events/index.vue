<script setup>
import { useI18n } from 'vue-i18n'
import Card from 'primevue/card'
import Ticket from '@/components/Ticket.vue'
import { DatePicker } from 'primevue'
import SearchBarComponent from '@/components/Search-bar.component.vue'

const { t, locale } = useI18n({
    useScope: 'global',
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
                <template #content>
                    <h1 class="welcome--title">
                        {{ t('dashboard.goodMorning') }} <br />
                        {{ _userName }} !
                    </h1>
                    <p>
                        {{ t('dashboard.titleContent') }}
                    </p>
                </template>
            </Card>
            <div>
                <SearchBarComponent />
            </div>
            <div class="tickets-list space-y-4 overflow-y-scroll">
                <Ticket v-for="i = 0 in 8" :key="i" />
            </div>
        </div>
        <div class="h-screen col-span-4 py-6">
            <DatePicker v-model="date" inline showWeek class="w-full sm:w-[30rem]" />
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
    display: flex
    justify-content: center
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
