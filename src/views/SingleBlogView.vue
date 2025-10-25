<script>
import axios from 'axios'
import Banner from '@/components/Banner.vue'

export default {
  name: 'SingleBlogView',
  components: { Banner },

  async created() {

    this.article = await this.fetchArticle(this.$route.params.id);

    if (this.article['featured_media']) {
      this.image = await this.fetchThumbnail(this.article['featured_media']);
    }


  },

  data(){
    return {
      article: {},
      image: ""
    }
  },
  methods: {
    async fetchArticle(id) {
      try {
        const response = await axios.get(`https://ondefoc.dz/wp-json/wp/v2/posts/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching article:', error);
        return null;
      }
    },

    async fetchThumbnail(mediaId) {
      try {

        const response = await axios.get(`https://ondefoc.dz/wp-json/wp/v2/media/${mediaId}`);
        const data = await response.data;

        return data['media_details']['sizes']['full']['source_url'];

      } catch (error) {
        console.error('Error fetching thumbnail:', error);
        return null;
      }
    }
  }
}



</script>

<template>

  <banner :title="article.title['rendered']"/>

  <!-- Blog Details Start -->
  <section class="section section-padding mt-n10">
    <div class="container">

      <div class="row gx-10">
        <div class="col-lg-8">

          <!-- Blog Details Wrapper Start -->
          <article class="blog-details-wrapper">
            <div class="blog-details-admin-meta">
              <div class="author">
                <div class="author-thumb">
                  <a href="#"><img src="../assets/images/author/author-01.jpg" alt="Author"></a>
                </div>
                <div class="author-name">
                  <a class="name" href="#">Jason Williams</a>
                </div>
              </div>
              <div class="blog-meta">
                <span> <i class="icofont-calendar"></i> 21 March, 2021</span>
                <span> <i class="icofont-heart"></i> 2,568+ </span>
                <span class="tag"><a href="#">Science</a></span>
              </div>
            </div>


            <img :src="image" alt="Post" class="w-100 rounded-4 my-5">

            <div class="blog-details-description" v-html="article.content['rendered']">
            </div>

            <div class="blog-details-label">
              <h4 class="label">Tags:</h4>
              <ul class="tag-list">
                <li><a href="#">Design</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Design</a></li>
              </ul>
            </div>

            <div class="blog-details-label">
              <h4 class="label">Share:</h4>
              <ul class="social">
                <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                <li><a href="#"><i class="flaticon-linkedin"></i></a></li>
                <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                <li><a href="#"><i class="flaticon-skype"></i></a></li>
                <li><a href="#"><i class="flaticon-instagram"></i></a></li>
              </ul>
            </div>

          </article>
          <!-- Blog Details Wrapper End -->

        </div>
        <div class="col-lg-4">

          <!-- Blog Sidebar Start -->
          <div class="sidebar">

            <!-- Sidebar Widget Search Start -->
            <div class="sidebar-widget widget-search">
              <form action="#">
                <input type="text" placeholder="Search here">
                <button><i class="icofont-search-1"></i></button>
              </form>
            </div>
            <!-- Sidebar Widget Search End -->

            <!-- Sidebar Widget Category Start -->
            <div class="sidebar-widget">
              <h4 class="widget-title">Post Category</h4>

              <div class="widget-category">
                <ul class="category-list">
                  <li><a href="#">UI/UX Design <span>(16)</span></a></li>
                  <li><a href="#">Creative Writing <span>(03)</span></a></li>
                  <li><a href="#">Graphic Design <span>(08)</span></a></li>
                  <li><a href="#">Fine Arts <span>(18)</span></a></li>
                  <li><a href="#">Business Analytics <span>(02)</span></a></li>
                  <li><a href="#">Marketing <span>(14)</span></a></li>
                </ul>
              </div>
            </div>
            <!-- Sidebar Widget Category End -->

            <!-- Sidebar Widget Post Start -->
            <div class="sidebar-widget">
              <h4 class="widget-title">Recent Post</h4>

              <div class="widget-post">
                <ul class="post-items">
                  <li>
                    <!-- Sidebar Widget Post Start -->
                    <div class="single-post">
                      <div class="post-thumb">
                        <a href="blog-details-left-sidebar.html"><img src="../assets/images/blog/blog-01.jpg" alt="Post"></a>
                      </div>
                      <div class="post-content">
                        <h5 class="title"><a href="blog-details-left-sidebar.html">Create Amazing Color Schemes Design</a></h5>
                        <span class="date"><i class="icofont-calendar"></i> 21 March, 2021</span>
                      </div>
                    </div>
                    <!-- Sidebar Widget Post End -->
                  </li>
                  <li>
                    <!-- Sidebar Widget Post Start -->
                    <div class="single-post">
                      <div class="post-thumb">
                        <a href="blog-details-left-sidebar.html"><img src="../assets/images/blog/blog-02.jpg" alt="Post"></a>
                      </div>
                      <div class="post-content">
                        <h5 class="title"><a href="blog-details-left-sidebar.html">Data Science Machine Learning with Python</a></h5>
                        <span class="date"><i class="icofont-calendar"></i> 21 March, 2021</span>
                      </div>
                    </div>
                    <!-- Sidebar Widget Post End -->
                  </li>
                  <li>
                    <!-- Sidebar Widget Post Start -->
                    <div class="single-post">
                      <div class="post-thumb">
                        <a href="blog-details-left-sidebar.html"><img src="../assets/images/blog/blog-03.jpg" alt="Post"></a>
                      </div>
                      <div class="post-content">
                        <h5 class="title"><a href="blog-details-left-sidebar.html">Leadership: Strategies for Business</a></h5>
                        <span class="date"><i class="icofont-calendar"></i> 21 March, 2021</span>
                      </div>
                    </div>
                    <!-- Sidebar Widget Post End -->
                  </li>
                  <li>
                    <!-- Sidebar Widget Post Start -->
                    <div class="single-post">
                      <div class="post-thumb">
                        <a href="blog-details-left-sidebar.html"><img src="../assets/images/blog/blog-04.jpg" alt="Post"></a>
                      </div>
                      <div class="post-content">
                        <h5 class="title"><a href="blog-details-left-sidebar.html">Illustrating Badges & Geometric Shapes</a></h5>
                        <span class="date"><i class="icofont-calendar"></i> 21 March, 2021</span>
                      </div>
                    </div>
                    <!-- Sidebar Widget Post End -->
                  </li>
                </ul>
              </div>
            </div>
            <!-- Sidebar Widget Post End -->

            <!-- Sidebar Widget Tags Start -->
            <div class="sidebar-widget">
              <h4 class="widget-title">Popular Tags</h4>

              <div class="widget-tags">
                <ul class="tags-list">
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Design</a></li>
                </ul>
              </div>
            </div>
            <!-- Sidebar Widget Tags End -->

            <!-- Sidebar Widget Share Start -->
            <div class="sidebar-widget">
              <h4 class="widget-title">Share Course:</h4>

              <ul class="social">
                <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                <li><a href="#"><i class="flaticon-linkedin"></i></a></li>
                <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                <li><a href="#"><i class="flaticon-skype"></i></a></li>
                <li><a href="#"><i class="flaticon-instagram"></i></a></li>
              </ul>
            </div>
            <!-- Sidebar Widget Share End -->

          </div>
          <!-- Blog Sidebar End -->

        </div>
      </div>

    </div>
  </section>
  <!-- Blog Details End -->
</template>

<style scoped>

</style>