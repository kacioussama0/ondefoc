<script >
import CHeader from '@/components/CHeader.vue'
import CFooter from '@/components/CFooter.vue'



export default  {
  components: {CHeader,CFooter},
  mounted: function() {
       AOS.init();
  }

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
