<script>
import router from '@/router/index.js'
import i18n from "@/i18n.js";

export default  {
  name: 'MainHeader',

  data() {
    return {
        listItem: [
          { name: "navbar.home", link: '/' },
          { name: "navbar.about", link: '/about' },
          { name: "navbar.blog", link: '/blog' ,},
          { name: "navbar.services", link: '#'},
          { name: "navbar.contact", link: '/contact' }
        ]
    }
  },
  computed:  {
      currentLink() {
        return this.$route.path
    }
  },

  methods: {
    changeLocale(locale) {

      this.$i18n.locale = locale

    }
  }

}
</script>

<template>
  <!-- Header Main Start -->
  <div class="header-main mt-0">
    <div class="container">

      <!-- Header Main Start -->
      <div class="header-main-wrapper ">


        <!-- Header Logo Start -->
        <div class="header-logo">
          <router-link to="/">
            <img src="../assets/images/logo-white.png" class="logo-white" height= "50" alt="Logo">
            <img src="../assets/images/logo-dark.png" class="logo-dark d-none" height= "50"  alt="Logo">
          </router-link>

        </div>
        <!-- Header Logo End -->

        <!-- Header Menu Start -->
        <div class="header-menu d-none d-lg-block">
          <ul class="nav-menu">

            <li v-for="item in listItem" :class="currentLink == item.link ? 'active' : ''"><router-link :to="item.link" >{{ $t(item.name) }}</router-link></li>

          </ul>

        </div>
        <!-- Header Menu End -->

        <!-- Header Sing In & Up Start -->
        <div class="header-sign-in-up d-none d-lg-block">
          <ul>

            <li>
              <a class="sign-up" @click="changeLocale('ar')" href="#"  v-if="this.$i18n.locale == 'fr'">
                Arabe
              </a>

              <a class="sign-up" @click="changeLocale('fr')" href="#" v-else>
                Français
              </a>

            </li>
          </ul>
        </div>
        <!-- Header Sing In & Up End -->

        <!-- Header Mobile Toggle Start -->
        <div class="header-toggle d-lg-none">
          <a class="menu-toggle" href="javascript:void(0)">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <!-- Header Mobile Toggle End -->

      </div>
      <!-- Header Main End -->

    </div>
  </div>
  <!-- Header Main End -->
</template>

<style scoped>
.header-main {
  backdrop-filter: blur(5px);

}
</style>