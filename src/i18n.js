import { createI18n } from 'vue-i18n'
import fr from './locale/fr.json'
import ar from './locale/ar.json'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    ar,
    fr
  }
});

export default i18n;