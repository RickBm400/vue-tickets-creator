<script setup>
import TicketComponent from '@/components/Ticket.component.vue'
import SearchBarComponent from '@/components/SearchBar.component.vue'
import ArticleCardComponent from '@/components/ArticleCard.component.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { DatePicker } from 'primevue'
import Card from 'primevue/card'

const { t, locale } = useI18n({
    useScope: 'global',
})
const contentTestList = ref([
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
        image: 'https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg',
        image_alt: 'syre',
    },
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
        image: 'https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg',
        image_alt: 'syre',
    },
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
        image: 'https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg',
        image_alt: 'syre',
    },
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
        image: 'https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg',
        image_alt: 'syre',
    },
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
        image: 'https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg',
        image_alt: 'syre',
    },
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
        image: 'https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg',
        image_alt: 'syre',
    },
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
        image: 'https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg',
        image_alt: 'syre',
    },
    {
        title: 'Jaden Smith in loola palooza',
        description:
            'Jaden is bringing hos unique vibe to light up the stage with his biggest hitscsdjnckjsnkdcsnjkdcnsckjdsncksnjdjkcnskdncksdnkcsndkcnskncksdncksndkcsnd',
        image: 'https://i.pinimg.com/736x/fb/9a/8b/fb9a8bc768fb5be8607889d292ee3d75.jpg',
        image_alt: 'syre',
    },
])
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
            <div>
                <SearchBarComponent />
            </div>
            <div class="tickets-list space-y-4 overflow-y-scroll basis-1 grow">
                <TicketComponent v-for="i = 0 in 8" :key="i" />
            </div>
        </div>
        <div class="hidden right-actions-bar">
            <div>
                <h3 class="content-header-h3">Calendar</h3>
                <DatePicker inline showWeek class="w-full" />
            </div>
            <div class="basis-1 grow flex flex-col">
                <h3 class="content-header-h3">Community</h3>
                <div class="basis-1 grow overflow-y-scroll space-y-4">
                    <ArticleCardComponent
                        v-for="(item, index) in contentTestList"
                        :key="index"
                        :title="item.title"
                        :description="item.description"
                        :image="item.image"
                        :image_alt="item.image_alt"
                    />
                </div>
            </div>
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

@media (width >= 80rem)
    .right-actions-bar
        @apply col-span-6 flex flex-col basis-1 grow
</style>
