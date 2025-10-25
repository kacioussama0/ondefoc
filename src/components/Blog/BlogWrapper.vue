<script setup>

import BlogCard from '@/components/Blog/BlogCard.vue'

const props = defineProps({
  articles: {
    type: Array,
    default: () => []
  }
})


</script>

<template>
  <!-- Blog Wrapper Start -->
  <section class="blog-wrapper">



    <div class="row">

      <div class="col-lg-4 col-md-6" v-for="article in props.articles">

        <blog-card

          :title="article.title"
          :url="article.link"
          :image="article.image"
          :date="article.modified"

        />

      </div>

    </div>



    <!-- Page Pagination End -->
    <div class="page-pagination">
      <ul class="pagination justify-content-center">
        <li><a href="#"><i class="icofont-rounded-left"></i></a></li>
        <li><a class="active" href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#"><i class="icofont-rounded-right"></i></a></li>
      </ul>
    </div>
    <!-- Page Pagination End -->


  </section>
  <!-- Blog Wrapper End -->
</template>

<style scoped>

</style>