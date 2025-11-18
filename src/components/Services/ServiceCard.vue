<script>
export default {
  name: "ServiceCard",

  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    imageUrl: {
      type: String
    }
  }

}
</script>

<template>

  <!-- About Item Start -->
  <div class="about-item shadow-sm">
    <div class="item-image-overlay" :style="{'backgroundImage': 'url(\'' + imageUrl + '\')' }" ></div>
      <div class="item-title">
        <h3 class="title fw-bolder">{{title}}</h3>
      </div>
      <p class="text-light text-center">{{description}}</p>
  </div>
  <!-- About Item End -->

</template>

<style scoped>
.about-item {
  height: 250px;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 1px 20px 0 #FFFFFF10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  cursor: pointer;
}


.about-item:hover {
  border-color: #FFFFFF;
}

.about-item::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: rgba(43, 16, 32, 0.4);
}

.item-image-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  z-index: -2;
  transition: .3s;
}


.about-item:hover .item-image-overlay {
  transform: scale(150%);
}



.item-title h3 {
  color: #FFFFFF;
  font-size: 25px !important;
  text-align: center;
}

.about-item p {
  opacity: 0;
  transition: .5s;
}

.about-item:hover p {
  opacity: 1;
}



</style>