<script>

import BlogSection from '@/components/Blog/BlogSection.vue'
import {useHead} from "@vueuse/head";
import ServiceSection from "@/components/Services/ServiceSection.vue";
import About from '@/components/About.vue'
import Statistics from '@/components/Statistics.vue'
import DataService from "@/services/DataService";
import BrandSection from '@/components/Brand/BrandSection.vue';

export default {
  name: 'HomeView',
  components: {
    Statistics,
    About,
    ServiceSection,
    BlogSection,
    BrandSection
  },
  data() {
    return {

    }
  },

  async created() {
    



  },
  async mounted() {

    

    useHead({
      "title" : this.$t("navbar.home"),
      "titleTemplate": 'ONDEFOC | %s'
    })

  }

}





</script>

<template>


  <!-- Overlay Start -->
  <div class="overlay"></div>
  <!-- Overlay End -->

  <!-- Slider Start -->
  <div class="section slider-section mb-5">

    <!-- Slider Video Bg Start -->
    <video src="../assets/bg.webm" muted loop autoplay class="slider-video-bg"></video>
    <!-- Slider Video Bg End -->

    <div class="container">

      <!-- Slider Content Start -->
      <div class="slider-content text-center  " >

        <h2 class="main-title" v-html="$t('slider.main_title')"></h2>
        <h4 class="sub-title mb-2">{{$t("slider.slogan")}}</h4>

        <a class="btn btn-secondary mx-auto btn-hover-primary position-absolute rounded-circle d-flex fs-6 align-items-center justify-content-center lh-lg" href="#">{{$t("slider.btn")}}</a>
      </div>
      <!-- Slider Content End -->

    </div>


  </div>
  <!-- Slider End -->


  <about/>

  <statistics/>

  <service-section/>


  <brand-section/>

<!--  <service-section/>-->

<!--  <blog-section/>-->








</template>


<style scoped>


.slider-section .btn {
  width: 150px;
  height: 150px;
  background-image: url('../assets/images/shape/technology-pattern.svg');
  background-position: center;
  background-size: 80%;
}



</style>
