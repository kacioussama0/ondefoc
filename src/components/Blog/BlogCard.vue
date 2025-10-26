<script>

export default {
  props: {
    image: {
      type: String,
      default: 'https://ondefoc.dz/wp-content/uploads/2023/10/LOGO-ONDEFOC-1-1.png.webp'
    },
    author: {
      type: Object,
    },

    category: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    likes: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: 'blog-details-left-sidebar.html'
    }

  }
}



</script>

<template>
  <!-- Single Blog Start -->
  <article class="single-blog">
    <div class="blog-image" v-if="image">
      <a :href="url"><img :src="image" alt="Blog"></a>
    </div>
    <div class="blog-content">
      <div class="blog-author" v-if="author">
        <div class="author">
          <div class="author-thumb">
            <a href="#"><img :src="author.img" alt="Author"></a>
          </div>
          <div class="author-name">
            <a class="name" href="#">{{author.name}}</a>
          </div>
        </div>
        <div class="tag">
          <a href="#">{{category}}</a>
        </div>
      </div>

      <h4 class="title"><a :href="url">{{title}}</a></h4>

      <div class="blog-meta">
        <span> <i class="icofont-calendar"></i> {{date}}</span>
        <span v-if="likes"> <i class="icofont-heart"></i> {{likes}} </span>
      </div>

      <router-link :to="url" class="btn btn-secondary btn-hover-primary">{{$t("common.read_more")}}</router-link>
    </div>
  </article>
  <!-- Single Blog End -->
</template>

<style scoped>

</style>