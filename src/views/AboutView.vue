<script>

import SectionTitle from '@/components/SectionTitle.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'AboutView',
  components: { Banner, SectionTitle }

}





</script>

<template>


  <banner :title="$t('about.banner_title')"/>

  <!-- About Start -->
  <div class="section">

    <div class="section-padding-02 mt-n10">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">

            <!-- About Images Start -->
            <div class="about-images">
              <div class="images">
                <img src="https://ondefoc.dz/wp-content/uploads/2024/01/MG_6693.png" alt="About">
              </div>


            </div>
            <!-- About Images End -->

          </div>
          <div class="col-lg-6">

            <!-- About Content Start -->
            <div class="about-content ">
              <h5 class="sub-title">{{$t('about.about_content.sub_title')}}</h5>
              <h2 class="main-title">{{$t('about.about_content.main_title')}}</h2>
              <div v-html="$t('about.about_content.description')"></div>
            </div>
            <!-- About Content End -->


          </div>
        </div>
      </div>
    </div>

    <div class="section-padding-02 mt-n6">
      <div class="container">

        <!-- About Items Wrapper Start -->
        <div class="about-items-wrapper">
          <div class="row">
            <div class="col-lg-4">
              <!-- About Item Start -->
              <div class="about-item">
                <div class="item-icon-title">
                  <div class="item-icon">
                    <i class="flaticon-badge"></i>
                  </div>
                  <div class="item-title">
                    <h3 class="title">Création</h3>
                  </div>
                </div>
                <p>
                  C’est en 2012 que le décret exécutif N°12-80 du 12 février 2012 crée l’ONDEFOC ou l’office national de développement et de promotion de la formation continue, au lieu et à la place de l’INDEFOC.
                  L’ONDEFOC hérite des moyens matériels et des infrastructures utilisés par les deux établissements dissous.
                </p>
              </div>
              <!-- About Item End -->
            </div>
            <div class="col-lg-4">
              <!-- About Item Start -->
              <div class="about-item">
                <div class="item-icon-title">
                  <div class="item-icon">
                    <i class="flaticon-transparency"></i>
                  </div>
                  <div class="item-title">
                    <h3 class="title">Statuts</h3>
                  </div>
                </div>
                <p>
                  L’ONDEFOC est doté d’un statut d’Epic, établissement public à caractère industriel et commercial.
                </p>
              </div>
              <!-- About Item End -->
            </div>
            <div class="col-lg-4">
              <!-- About Item Start -->
              <div class="about-item">
                <div class="item-icon-title">
                  <div class="item-icon">
                    <i class="flaticon-increase"></i>
                  </div>
                  <div class="item-title">
                    <h3 class="title">Les missions</h3>
                  </div>
                </div>
                <p>
                  Telles qu’elles résultent  de l’article 05 du décret sus cité, les missions de l’ONDEFOC sont : la fourniture d’une assistance pédagogique et technique aux entreprises, structures, organismes et personnes concernés en vue de promouvoir et de développer la formation continue.
                </p>
              </div>
              <!-- About Item End -->
            </div>
          </div>
        </div>
        <!-- About Items Wrapper End -->

      </div>
    </div>

  </div>
  <!-- About End -->

  <!-- Call to Action Start -->
  <div class="section section-padding-02">
    <div class="container">

      <!-- Call to Action Wrapper Start -->
      <div class="call-to-action-wrapper">

        <img class="cat-shape-01 animation-round" src="../assets/images/shape/shape-12.png" alt="Shape">
        <img class="cat-shape-02" src="../assets/images/shape/shape-13.svg" alt="Shape">
        <img class="cat-shape-03 animation-round" src="../assets/images/shape/shape-12.png" alt="Shape">

        <div class="row align-items-center">
          <div class="col-md-6">

            <!-- Section Title Start -->
            <div class="section-title shape-02">
              <h5 class="sub-title">Become A Instructor</h5>
              <h2 class="main-title">You can join with Edule as <span>a instructor?</span></h2>
            </div>
            <!-- Section Title End -->

          </div>
          <div class="col-md-6">
            <div class="call-to-action-btn">
              <a class="btn btn-primary btn-hover-dark" href="contact.html">Drop Information</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Call to Action Wrapper End -->

    </div>
  </div>
  <!-- Call to Action End -->

  <!-- Team Member's Start -->
  <div class="section section-padding mt-n1">
    <div class="container">

      <!-- Section Title Start -->
      <div class="section-title shape-03 text-center">
        <h5 class="sub-title">Team Member’s</h5>
        <h2 class="main-title">Edule Skilled <span> Instructor</span></h2>
      </div>
      <!-- Section Title End -->

      <!-- Team Wrapper Start -->
      <div class="team-wrapper">
        <div class="row row-cols-lg-5 row-cols-sm-3 row-cols-2 ">
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-01.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Margarita James</h4>
                <span class="designation">MSC, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-02.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Mitchell Colon</h4>
                <span class="designation">BBA, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-03.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Sonya Gordon</h4>
                <span class="designation">MBA, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-04.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Archie Neal</h4>
                <span class="designation">BBS, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-05.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Randal Ramsey</h4>
                <span class="designation">MBBS, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-06.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Rochelle Thomas</h4>
                <span class="designation">MSC, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-07.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Della Salazar</h4>
                <span class="designation">BBA, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-08.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Ricardo Patrick</h4>
                <span class="designation">MBA, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-09.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Kurt Stewart</h4>
                <span class="designation">BBS, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
          <div class="col">

            <!-- Single Team Start -->
            <div class="single-team">
              <div class="team-thumb">
                <img src="../assets/images/author/author-10.jpg" alt="Author">
              </div>
              <div class="team-content">
                <div class="rating">
                  <span class="count">4.9</span>
                  <i class="icofont-star"></i>
                  <span class="text">(rating)</span>
                </div>
                <h4 class="name">Rodney Terry</h4>
                <span class="designation">MBBS, Instructor</span>
              </div>
            </div>
            <!-- Single Team End -->

          </div>
        </div>
      </div>
      <!-- Team Wrapper End -->

    </div>
  </div>
  <!-- Team Member's End -->

  <!-- Download App Start -->
  <div class="section section-padding download-section">

    <div class="app-shape-1"></div>
    <div class="app-shape-2"></div>
    <div class="app-shape-3"></div>
    <div class="app-shape-4"></div>

    <div class="container">

      <!-- Download App Wrapper Start -->
      <div class="download-app-wrapper mt-n6">

        <!-- Section Title Start -->
        <div class="section-title section-title-white">
          <h5 class="sub-title">Ready to start?</h5>
          <h2 class="main-title">Download our mobile app. for easy to start your course.</h2>
        </div>
        <!-- Section Title End -->

        <img class="shape-1 animation-right" src="../assets/images/shape/shape-14.png" alt="Shape">

        <!-- Download App Button End -->
        <div class="download-app-btn">
          <ul class="app-btn">
            <li><a href="#"><img src="../assets/images/google-play.png" alt="Google Play"></a></li>
            <li><a href="#"><img src="../assets/images/app-store.png" alt="App Store"></a></li>
          </ul>
        </div>
        <!-- Download App Button End -->

      </div>
      <!-- Download App Wrapper End -->

    </div>
  </div>
  <!-- Download App End -->

  <!-- Testimonial End -->
  <div class="section section-padding-02 mt-n1">
    <div class="container">

      <!-- Section Title Start -->
      <div class="section-title shape-03 text-center">
        <h5 class="sub-title">Student Testimonial</h5>
        <h2 class="main-title">Feedback From <span> Student</span></h2>
      </div>
      <!-- Section Title End -->

      <!-- Testimonial Wrapper End -->
      <div class="testimonial-wrapper testimonial-active">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!-- Single Testimonial Start -->
            <div class="single-testimonial swiper-slide">
              <div class="testimonial-author">
                <div class="author-thumb">
                  <img src="../assets/images/author/author-06.jpg" alt="Author">

                  <i class="icofont-quote-left"></i>
                </div>

                <span class="rating-star">
											<span class="rating-bar" style="width: 80%;"></span>
                                    </span>
              </div>
              <div class="testimonial-content">
                <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                <h4 class="name">Sara Alexander</h4>
                <span class="designation">Product Designer, USA</span>
              </div>
            </div>
            <!-- Single Testimonial End -->

            <!-- Single Testimonial Start -->
            <div class="single-testimonial swiper-slide">
              <div class="testimonial-author">
                <div class="author-thumb">
                  <img src="../assets/images/author/author-07.jpg" alt="Author">

                  <i class="icofont-quote-left"></i>
                </div>

                <span class="rating-star">
											<span class="rating-bar" style="width: 80%;"></span>
                                    </span>
              </div>
              <div class="testimonial-content">
                <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                <h4 class="name">Melissa Roberts</h4>
                <span class="designation">Product Designer, USA</span>
              </div>
            </div>
            <!-- Single Testimonial End -->

            <!-- Single Testimonial Start -->
            <div class="single-testimonial swiper-slide">
              <div class="testimonial-author">
                <div class="author-thumb">
                  <img src="../assets/images/author/author-03.jpg" alt="Author">

                  <i class="icofont-quote-left"></i>
                </div>

                <span class="rating-star">
											<span class="rating-bar" style="width: 80%;"></span>
                                    </span>
              </div>
              <div class="testimonial-content">
                <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not five centuries but also the leap into electronic.</p>
                <h4 class="name">Sara Alexander</h4>
                <span class="designation">Product Designer, USA</span>
              </div>
            </div>
            <!-- Single Testimonial End -->
          </div>

          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- Testimonial Wrapper End -->

    </div>
  </div>
  <!-- Testimonial End -->

  <!-- Brand Logo Start -->
  <div class="section section-padding">
    <div class="container">

      <!-- Brand Logo Wrapper Start -->
      <div class="brand-logo-wrapper">

        <img class="shape-1" src="../assets/images/shape/shape-19.png" alt="Shape">

        <img class="shape-2 animation-round" src="../assets/images/shape/shape-20.png" alt="Shape">

        <!-- Section Title Start -->
        <div class="section-title shape-03">
          <h2 class="main-title">Best Supporter of <span> Edule.</span></h2>
        </div>
        <!-- Section Title End -->

        <!-- Brand Logo Start -->
        <div class="brand-logo brand-active">
          <div class="swiper-container">
            <div class="swiper-wrapper">

              <!-- Single Brand Start -->
              <div class="single-brand swiper-slide">
                <img src="../assets/images/brand/brand-01.png" alt="Brand">
              </div>
              <!-- Single Brand End -->

              <!-- Single Brand Start -->
              <div class="single-brand swiper-slide">
                <img src="../assets/images/brand/brand-02.png" alt="Brand">
              </div>
              <!-- Single Brand End -->

              <!-- Single Brand Start -->
              <div class="single-brand swiper-slide">
                <img src="../assets/images/brand/brand-03.png" alt="Brand">
              </div>
              <!-- Single Brand End -->

              <!-- Single Brand Start -->
              <div class="single-brand swiper-slide">
                <img src="../assets/images/brand/brand-04.png" alt="Brand">
              </div>
              <!-- Single Brand End -->

              <!-- Single Brand Start -->
              <div class="single-brand swiper-slide">
                <img src="../assets/images/brand/brand-05.png" alt="Brand">
              </div>
              <!-- Single Brand End -->

              <!-- Single Brand Start -->
              <div class="single-brand swiper-slide">
                <img src="../assets/images/brand/brand-06.png" alt="Brand">
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
