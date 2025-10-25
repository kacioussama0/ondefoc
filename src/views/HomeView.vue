<script>

import BlogSection from '@/components/Blog/BlogSection.vue'


export default {
  name: 'HomeView',
  components: {
    BlogSection
  },
  data() {}
}





</script>

<template>


  <!-- Overlay Start -->
  <div class="overlay"></div>
  <!-- Overlay End -->

  <!-- Slider Start -->
  <div class="section slider-section my-5">

    <!-- Slider Shape Start -->
    <div class="slider-shape">
      <img class="shape-1 animation-round" src="../assets/images/shape/shape-8.png" alt="Shape">
    </div>
    <!-- Slider Shape End -->

    <div class="container">

      <!-- Slider Content Start -->
      <div class="slider-content">

        <h4 class="sub-title">L’ONDEFOC</h4>
        <h2 class="main-title">Organisme d’appui à la <span>formation continue.</span></h2>
        <p>un établissement public à caractère industriel et commercial (EPIC) qui relève du Ministère de la Formation et de l’Enseignement Professionnels.</p>
        <a class="btn btn-primary btn-hover-dark" href="#">Télécharger Catalogue</a>
      </div>
      <!-- Slider Content End -->

    </div>

    <!-- Slider Images Start -->
    <div class="slider-images">
      <div class="images">
        <img src="../assets/images/slider/slider-1.png" alt="Slider">
      </div>
    </div>
    <!-- Slider Images End -->

    <!-- Slider Video Start -->
    <div class="slider-video">
      <img class="shape-1" src="../assets/images/shape/shape-9.png" alt="Shape">

      <div class="video-play">
        <img src="../assets/images/shape/shape-10.png" alt="Shape">
        <a href="https://www.youtube.com/watch?v=BRvyWfuxGuU" class="play video-popup"><i class="flaticon-play"></i></a>
      </div>
    </div>
    <!-- Slider Video End -->

  </div>
  <!-- Slider End -->



  <blog-section/>





</template>
