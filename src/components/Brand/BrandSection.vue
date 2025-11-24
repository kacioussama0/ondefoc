<script>
import SectionTitle from '../SectionTitle.vue';
import DataService from '@/services/DataService.js'

export default {

    name: 'Brand Section',
    components: {SectionTitle},
    data() {
      return {
        brands: {}
      }
    },

    async mounted() {

        this.brands = await DataService.getBrands();

        window.addEventListener('load',function() {
          const brandSwiper = new Swiper('.brand-swiper .swiper-container', {
            speed: 600,
            spaceBetween: 30,
            loop: true,
            breakpoints: {
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 45,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 85,
              }
            },
            autoplay: {
              delay: 500,
            },
          });
        });


    }

}
</script>


<template>


        <!-- Brand Logo Start -->
        <div class="section section-padding-02 py-5">
            <div class="container">

                <!-- Brand Logo Wrapper Start -->
                <div class="brand-logo-wrapper">

                    <img class="shape-1" src="../../assets/images/shape/shape-19.png" alt="Shape">

                    <img class="shape-2 animation-round" src="../../assets/images/shape/shape-20.png" alt="Shape">

                    <!-- Section Title Start -->
           
                    <SectionTitle main-title="Notre Partenaire" />

                    <!-- Section Title End -->

                    <!-- Brand Logo Start -->
                    <div class="brand-logo brand-active brand-swiper ">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">

                                <!-- Single Brand Start -->
                                <div class="single-brand swiper-slide" v-for="brand in brands.data" :key="brand.id">
                                    <img :src="`http://localhost:1337${brand.logo.url}`" :alt="brand.name">
                                </div>
                                <!-- Single Brand End -->
                               
                            </div>
                        </div>
                    </div>
                    <!-- Brand Logo End -->

                </div>
                <!-- Brand Logo Wrapper End -->

            </div>
        </div>
        <!-- Brand Logo End -->


</template>


<style scoped>


</style>