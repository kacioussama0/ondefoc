<script>
export default {
  name: "ServiceCard",

  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    }
  }

}
</script>

<template>

  <!-- About Item Start -->
  <div class="about-item">
    <div class="item-icon-title">
      <div class="item-icon">
        <i> {{icon}}</i>
      </div>
      <div class="item-title">
        <h3 class="title">{{title}}</h3>
      </div>
    </div>
    <p>{{description}}</p>
  </div>
  <!-- About Item End -->

</template>

<style scoped>

</style>