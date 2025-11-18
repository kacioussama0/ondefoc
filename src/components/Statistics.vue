<script>


export default {
  name: 'Statistics',
  data() {
    return {
      statistics: [
        {
          name: "Entreprises",
          icon: 'fa fa-building',
          number: 60
        },
        {
          name: "Stagiaire",
          icon: 'fa fa-user',
          number: 1570
        },
        {
          name: 'Certification qualification',
          icon: 'fa fa-copy',
          number: 7880
        }
      ]
    }
  }

}
</script>

<template>

  <section class="statistics mt-n6 py-5">

    <div class="container">

      <div class="row gy-5">

          <div class="col-md-4 text-center" v-for="item in statistics">

            <i :class="`${item.icon} display-3 mb-3 text-light`"></i>


            <h3 class="fw-bolder display-6 d-flex text-light align-items-center justify-content-center mb-1">
              +
              <AnimatedCounter
                :value="item.number"
                :duration="1000"
                :useVisibility="true"
              />

            </h3>

            <span class="text-light">{{item.name}}</span>

          </div>

      </div>

    </div>


  </section>

</template>

<style scoped>



.statistics {
  background-color: #2b1020;

}

.statistics h3 {
  color: #FFFFFF;
}


</style>
