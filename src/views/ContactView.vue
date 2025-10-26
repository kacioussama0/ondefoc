<script>
import axios from 'axios'
import Banner from '@/components/Banner.vue'

export default {
  name: 'ContactView',
  components: { Banner },
}



</script>

<template>

  <banner title="Contact"/>

  <!-- Contact Map Start -->
  <div class="section section-padding-02">
    <div class="container">

      <!-- Contact Map Wrapper Start -->
      <div class="contact-map-wrapper">
        <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.470117020985!2d3.2874570700935792!3d36.73852621105375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e45329063fdbb%3A0x20d2b115e85ea7de!2sONDEFOC%20Office%20National%20de%20D%C3%A9veloppement%20et%20de%20Promotion%20de%20la%20Formation%20Continue!5e1!3m2!1sfr!2sdz!4v1761487834154!5m2!1sfr!2sdz"></iframe>
      </div>
      <!-- Contact Map Wrapper End -->

    </div>
  </div>
  <!-- Contact Map End -->

  <!-- Contact Start -->
  <div class="section section-padding">
    <div class="container">

      <!-- Contact Wrapper Start -->
      <div class="contact-wrapper">
        <div class="row align-items-center">
          <div class="col-lg-6">

            <!-- Contact Info Start -->
            <div class="contact-info">

              <img class="shape animation-round" src="../assets/images/shape/shape-12.png" alt="Shape">

              <!-- Single Contact Info Start -->
              <div class="single-contact-info">
                <div class="info-icon">
                  <i class="flaticon-phone-call"></i>
                </div>
                <div class="info-content">
                  <h6 class="title">Phone No.</h6>
                  <p><a href="tel:+213660733915">06 60 73 39 15</a></p>
                </div>
              </div>
              <!-- Single Contact Info End -->
              <!-- Single Contact Info Start -->
              <div class="single-contact-info">
                <div class="info-icon">
                  <i class="flaticon-email"></i>
                </div>
                <div class="info-content">
                  <h6 class="title">Email Address.</h6>
                  <p><a href="mailto:dg@ondefoc.dz">dg@ondefoc.dz</a></p>
                </div>
              </div>
              <!-- Single Contact Info End -->
              <!-- Single Contact Info Start -->
              <div class="single-contact-info">
                <div class="info-icon">
                  <i class="flaticon-pin"></i>
                </div>
                <div class="info-content">
                  <h6 class="title">Office Address.</h6>
                  <p>Route n°1 MEDRAR Hacène – Rouiba</p>
                </div>
              </div>
              <!-- Single Contact Info End -->
            </div>
            <!-- Contact Info End -->

          </div>
          <div class="col-lg-6">

            <!-- Contact Form Start -->
            <div class="contact-form">
              <h3 class="title">Get in Touch <span>With Us</span></h3>

              <div class="form-wrapper">
                <form id="contact-form" action="https://htmlmail.hasthemes.com/humayun/edule-contact.php" method="POST">
                  <!-- Single Form Start -->
                  <div class="single-form">
                    <input type="text" name="name" placeholder="Name">
                  </div>
                  <!-- Single Form End -->
                  <!-- Single Form Start -->
                  <div class="single-form">
                    <input type="email" name="email" placeholder="Email">
                  </div>
                  <!-- Single Form End -->
                  <!-- Single Form Start -->
                  <div class="single-form">
                    <input type="text" name="subject" placeholder="Subject">
                  </div>
                  <!-- Single Form End -->
                  <!-- Single Form Start -->
                  <div class="single-form">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <!-- Single Form End -->
                  <p class="form-message"></p>
                  <!-- Single Form Start -->
                  <div class="single-form">
                    <button class="btn btn-primary btn-hover-dark w-100">Send Message <i class="flaticon-right"></i></button>
                  </div>
                  <!-- Single Form End -->
                </form>
              </div>
            </div>
            <!-- Contact Form End -->

          </div>
        </div>
      </div>
      <!-- Contact Wrapper End -->

    </div>
  </div>
  <!-- Contact End -->


</template>

<style scoped>

</style>