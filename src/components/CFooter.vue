<script>

export default  {
  name: 'CFooter',
  data() {
    return {
      listItem: [
        { name: 'Accueil', link: '/' },
        { name: 'À Propos', link: '/about' },
        { name: 'Blog', link: '/blog' ,},
        { name: 'Nos Services', link: '#'},
        { name: 'Contact', link: '#' }
      ]
    }
  },
}

</script>

<template>
  <!-- Footer Start  -->
  <footer class="section footer-section">

    <!-- Footer Widget Section Start -->
    <div class="footer-widget-section">

      <img class="shape-1 animation-down" src="../assets/images/shape/shape-21.png" alt="Shape">

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 order-md-1 order-lg-1">

            <!-- Footer Widget Start -->
            <div class="footer-widget">
              <div class="widget-logo">
                <a href="#"><img src="https://ondefoc.dz/wp-content/uploads/2023/10/Capture_d_ecran_2023-10-18_003858-removebg-preview-1-768x188.png" width="160" alt="Logo"></a>
              </div>

              <p class="my-5 text-light">{{$t("footer.description")}}</p>

            </div>
            <!-- Footer Widget End -->

          </div>
          <div class="col-lg-6 order-md-3 order-lg-2">

            <!-- Footer Widget Link Start -->
            <div class="footer-widget-link">

              <!-- Footer Widget Start -->
              <div class="footer-widget">
                <h4 class="footer-widget-title">Menu</h4>

                <ul class="widget-link">

                  <li v-for="item in listItem"><router-link :to="item.link" >{{ item.name }}</router-link></li>


                </ul>

              </div>
              <!-- Footer Widget End -->

              <!-- Footer Widget Start -->
              <div class="footer-widget">
                <h4 class="footer-widget-title">Contacts</h4>

                <ul class="widget-info">

                  <li>
                    <p> <i class="flaticon-coding me-3"></i> Dim – Jeu : 08:30 AM - 16:00 PM</p>
                  </li>

                  <li>
                    <p><i class="flaticon-pin"></i> <a href="">Route n°1 MEDRAR Hacène – Rouiba</a></p>
                  </li>


                  <li>
                    <p> <i class="flaticon-email"></i> <a href="mailto:dg@ondefoc.dz" class="me-2">dg@ondefoc.dz</a> - <a href="mailto:dcm@ondefoc.dz">dcm@ondefoc.dz</a></p>
                  </li>

                  <li>
                    <p> <i class="flaticon-phone-call"></i> <a href="tel:+21323862783" class="me-2">023 86 27 83</a> - <a href="tel:+213660733915">06 60 73 39 15</a> </p>
                  </li>

                </ul>

              </div>
              <!-- Footer Widget End -->

            </div>
            <!-- Footer Widget Link End -->

          </div>
        </div>
      </div>

      <img class="shape-2 animation-left" src="../assets/images/shape/shape-22.png" alt="Shape">

    </div>
    <!-- Footer Widget Section End -->

    <!-- Footer Copyright Start -->
    <div class="footer-copyright">
      <div class="container">

        <!-- Footer Copyright Start -->
        <div class="copyright-wrapper align-items-center">

          <div class="copyright-text mb-0">
            <p>&copy; 2025 ONDEFOC</p>
          </div>

          <ul class="widget-social hstack gap-3 align-items-center justify-content-center text-light">
            <li><a href="#"><i class="flaticon-facebook"></i></a></li>
            <li><a href="#"><i class="flaticon-linkedin"></i></a></li>
            <li><a href="#"><i class="flaticon-twitter"></i></a></li>
            <li><a href="#"><i class="flaticon-instagram"></i></a></li>
          </ul>

        </div>
        <!-- Footer Copyright End -->

      </div>
    </div>
    <!-- Footer Copyright End -->

  </footer>
  <!-- Footer End -->
</template>

<style scoped>

</style>