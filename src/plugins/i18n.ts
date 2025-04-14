// @ts-nocheck
import { createI18n } from 'vue-i18n'
import { es } from '../locales/es'
import { en } from '../locales/en'

export const i18n = createI18n({
    locale: 'es',
    legacy: false,
    fallbackLocale: 'en',
    messages: { es, en },
})
