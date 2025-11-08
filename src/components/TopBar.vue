<script setup>

import IconRepublic from '@/components/icons/IconRepublic.vue'
</script>

<template>
    <!-- Header Top Start -->
    <div class="header-top d-none d-lg-block py-2">
      <div class="container">

        <!-- Header Top Wrapper Start -->
        <div class="header-top-wrapper d-flex align-items-center">

          <!-- Header Top Left Start -->
          <div class="header-top-left me-5">
            <icon-republic/>
          </div>
          <!-- Header Top Left End -->

          <!-- Header Top Medal Start -->
          <div class="header-top-medal text-center vstack fs-6  justify-content-center align-items-start">
              <div class="">{{$t("topbar.republic")}}</div>
              <div class="">{{$t("topbar.ministry")}}</div>
              <div class="">{{$t("topbar.office")}}</div>
          </div>
          <!-- Header Top Medal End -->


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

.header-top-left svg {
  width: 80px;
  height: 80px;
}

</style>