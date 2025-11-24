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
  <div class="section-title  text-center">

    <h5 class="sub-title mb-3">{{subTitle}}</h5>

    <h2 class="main-title fw-bold mb-5 d-inline-block">
      <span>{{mainTitle}}</span>
    </h2>



  </div>
  <!-- Section Title End -->
</template>

<style scoped>

.main-title {
  position: relative;

}

.main-title::before {
  content: "";
  width: 80px;
  height: 40px;
  background-image: url("../assets/images/shape/shape-arrow.svg");
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.main-title::before {

  left: -40px;

}




</style>