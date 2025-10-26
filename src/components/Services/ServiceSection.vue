<script>

import SectionTitle from "@/components/SectionTitle.vue";
import ServiceCard from "@/components/Services/ServiceCard.vue";

export default {
  name: "ServiceSection",
  components: {ServiceCard, SectionTitle},
  data() {
    return {
      "services": [
        {
          "name": "Formation Continue",
          "description": ""
        },
        {
          "name": "Formation Statutaire",
          "description": ""
        },
        {
          "name": "Brevet Professionnel De Conduite",
          "description": ""
        },
        {
          "name": "Brevet Professionnel De Conduite",
          "description": ""
        },
        {
          "name": "VCAE",
          "description": "validation-des-competences-acquises-par-lexperience"
        },
        {
          "name": "Les Etudes L'assistance Le Conseil Les Seminaires",
          "description": "validation-des-competences-acquises-par-lexperience"
        }
      ]
    }
  }
}
</script>

<template>


  <div class="section-padding-02 mt-n6">
    <div class="container">

      <section-title main-title="Services" sub-title="Développez vos compétences" />

  <div class="about-items-wrapper">
    <div class="row">

      <div class="col-lg-4" v-for="(service,index) in services">
        <service-card
          :title="service.name"
          :description = "service.description"
          :icon="index + 1"
        />
      </div>

    </div>

  </div>
    </div>

  </div>


</template>

<style scoped>

</style>