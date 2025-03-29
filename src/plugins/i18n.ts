import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    locale: 'es',
    legacy: false,
    fallbackLocale: 'en',
    messages: {
        es: {
            message: {
                goodMorning: 'Buenos días',
            },
        },
        en: {
            message: {
                goodMorning: 'Good Morning',
            },
        },
    },
})
