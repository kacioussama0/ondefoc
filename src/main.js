import {createApp, watch} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'

import i18n from './i18n'
import AnimatedCounter from "vue-animated-counter"
import {createHead} from "@vueuse/head";

const app = createApp(App)
const head = createHead()
app.use(router)
app.use(head)

app.component("AnimatedCounter",AnimatedCounter)

watch(
    () => i18n.global.locale.value,
    (locale) => {
        document.documentElement.setAttribute('lang', locale)
        document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')
    },
    { immediate: true }
)


app.use(i18n)


app.mount('#app')
