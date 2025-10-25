<script>

import SectionTitle from '@/components/SectionTitle.vue'
import BlogWrapper from '@/components/Blog/BlogWrapper.vue'
import axios from 'axios'



export default {
  name: 'BlogSection',
  components: { SectionTitle, BlogWrapper },

  async created() {

    const articlesData = await this.fetchArticles();
    this.articles = await Promise.all(articlesData);


  },

  data() {
    return {
      articles: []
    }
  },
  methods: {

    async fetchThumbnail(mediaId) {
      try {

        const response = await axios.get(`https://ondefoc.dz/wp-json/wp/v2/media/${mediaId}`);
        const data = await response.data;

        return data['media_details']['sizes']['medium']['source_url'];

      } catch (error) {
        console.error('Error fetching thumbnail:', error);
        return null;
      }
    },

    async fetchArticles() {
      try {

        const response = await axios.get('https://ondefoc.dz/wp-json/wp/v2/posts');
        const data = await response.data;

        return  data.map(async article => {
          return  {
            title: article.title['rendered'],
            link: "/blog/" + article.id,
            modified: new Date(article.modified).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            image: article['featured_media'] ? await this.fetchThumbnail(article['featured_media']) : null
          }
        });

      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }
  }
}





</script>

<template>
  <!-- Blog Start -->
  <section class="section section-padding mt-n1">
    <div class="container">

      <section-title main-title="Actualités" sub-title="Restez informé des dernières nouvelles et annonces officielles."/>

      <blog-wrapper :articles="articles"/>

    </div>

  </section>
  <!-- Blog End -->
</template>

<style scoped>

</style>