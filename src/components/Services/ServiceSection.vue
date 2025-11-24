<script>

import SectionTitle from "@/components/SectionTitle.vue";
import ServiceCard from "@/components/Services/ServiceCard.vue";
import DataService from '@/services/DataService.js'

export default {
  name: "ServiceSection",
  components: {ServiceCard, SectionTitle},
  data() {
    return {
      services: {}

    }
  },
  async mounted() {
    this.services =  await DataService.getServices();

  }

}
</script>

<template>


  <section class="services section-padding-02 mt-n6 pb-5">
    <div class="container">

      <section-title main-title="Services"  />

  <div class="about-items-wrapper">
    <div class="row gy-4">

      <div class="col-md-6 col-lg-4" v-for="service in services.data">
        <service-card
          :title="service.title"
          :description = "service.description"
          :image-url="`http://localhost:1337${service.cover.url}`"
        />



      </div>

    </div>

  </div>
    </div>

  </section>


</template>

<style >


</style>