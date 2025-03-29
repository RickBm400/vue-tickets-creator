<script setup>
    import { useI18n } from 'vue-i18n'
    const { t, locale } = useI18n({ useScope: 'global' })
    locale.value = 'en'
</script>
<template>
    <section id="container">
        <div class="column-1">
            {{ t('message.goodMorning') + ' Ricardo'}}
        </div>
        <div class="column-2">
        </div>
    </section>
</template>