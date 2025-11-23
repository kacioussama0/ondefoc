<script>

export default  {
  props: {
    subTitle: {
      type: String,
      default: ''
    },

    mainTitle: {
      type: String,
      default: ''
    }
  }
}

</script>

<template>
  <!-- Section Title Start -->
  <div class="section-title shape-03">
    <h5 class="sub-title mb-0">{{subTitle}}</h5>
    <h2 class="main-title fw-bold mb-5">{{mainTitle}}</h2>
  </div>
  <!-- Section Title End -->
</template>

<style scoped>

</style>