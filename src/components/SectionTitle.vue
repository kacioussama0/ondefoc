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
  <div class="section-title shape-03 text-center">
    <h5 class="sub-title">{{subTitle}}</h5>
    <h2 class="main-title">{{mainTitle}}</h2>
  </div>
  <!-- Section Title End -->
</template>

<style scoped>

</style>