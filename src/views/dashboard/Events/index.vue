<script setup>
import { useI18n } from 'vue-i18n'
import Card from 'primevue/card'
import TicketComponent from '@/components/Ticket.component.vue'
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
    <div class="grid grid-flow-col grid-cols-20 gap-6">
        <div class="col-span-20 md:xl:col-span-14 flex flex-col">
            <Card
                class="welcome--card col-span-2"
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
            <div class="">
                <SearchBarComponent />
            </div>
            <div class="tickets-list space-y-4 overflow-y-scroll basis-1 grow">
                <TicketComponent v-for="i = 0 in 8" :key="i" />
            </div>
        </div>
        <div class="hidden md:xl:col-span-6 md:xl:inline-block">
            <h3>Calendar</h3>
            <DatePicker inline showWeek class="w-full" />
            <h3>Community</h3>
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
    height: 256px
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
