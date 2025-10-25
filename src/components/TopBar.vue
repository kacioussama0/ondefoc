<script setup>

</script>

<template>
    <!-- Header Top Start -->
    <div class="header-top d-none d-lg-block py-2">
      <div class="container">

        <!-- Header Top Wrapper Start -->
        <div class="header-top-wrapper align-items-center">

          <!-- Header Top Left Start -->
          <div class="header-top-left">
            <img src="https://ondefoc.dz/wp-content/uploads/2023/10/Capture_d_ecran_2023-10-18_003858-removebg-preview-1-768x188.png" height="50" alt="logo-ondefoc">

          </div>
          <!-- Header Top Left End -->

          <!-- Header Top Medal Start -->
          <div class="header-top-medal text-center vstack gap-2 align-items-center justify-content-center">
              <div class="">{{$t("Republic")}}</div>
              <div class="">{{$t("Ministry")}}</div>
              <div class="">{{$t("Office")}}</div>
          </div>
          <!-- Header Top Medal End -->

          <!-- Header Top Right Start -->
          <div class="header-top-right">
            <img src="https://ondefoc.dz/wp-content/uploads/2023/11/logo1.png.webp" height="100" alt="logo-ministry">
          </div>
          <!-- Header Top Right End -->

        </div>
        <!-- Header Top Wrapper End -->

      </div>
    </div>
    <!-- Header Top End -->
</template>

<style scoped>
.header-top-medal {
  color: var(--bs-light);
  font-size: 14px;

}
</style>