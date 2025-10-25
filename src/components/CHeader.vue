<script setup>

import TopBar from '@/components/TopBar.vue'
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <header class="header-section">
    <top-bar v-if="this.$route.path == '/'"/>
    <main-header/>
  </header>
</template>

<style scoped>

</style>