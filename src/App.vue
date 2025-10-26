<script >
import { RouterLink, RouterView } from 'vue-router'
import CHeader from '@/components/CHeader.vue'
import CFooter from '@/components/CFooter.vue'
import {useHead} from "@vueuse/head";





export default  {
  components: {CHeader,CFooter},

}


</script>

<template>

  <div class="main-wrapper">

  <c-header />

  <router-view />

  <c-footer />

  </div>

</template>

<style scoped>

</style>
