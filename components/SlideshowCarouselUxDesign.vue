<template>
  <div class="slider">
    <div class="sliderchild">
      <div class="imagecon">Low-fi wireframe</div>
      <div class="imagecon">Customer journey map</div>
      <div class="imagecon">User flow</div>
      <div class="imagecon">Sitemap</div>
      <div class="imagecon">Low-fi wireframe</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slider {
  height: 400px;
  width: 100%;
  background-color: grey;
  overflow: hidden;
}
.sliderchild {
  height: 400px;
  width: 500%;
  background-color: green;
  animation: slider infinite 20s 2s;
}
.imagecon {
  height: 400px;
  width: 20%;
  background-color: grey;
  float: left;
  line-height: 400px;
  text-align: center;
  font-size: 2em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgb(125, 115, 160);
}
.imagecon:nth-child(1) {
  background-image: url("~assets/img/expar/wireframe_purchase-expar.jpg");
  background-repeat: none;
  background-size: cover;
}
.imagecon:nth-child(2) {
  background-image: url("~assets/img/expar/CJM-expar_guest.png");
  background-repeat: none;
  background-size: cover;
}
.imagecon:nth-child(3) {
  background-image: url("~assets/img/expar/ExpAR_store_user-flow.png");
  background-repeat: none;
  background-size: cover;
}
.imagecon:nth-child(4) {
  background-image: url("~assets/img/expar/ExpAR_store-sitemap.png");
  background-repeat: none;
  background-size: cover;
}
.imagecon:nth-child(5) {
  background-image: url("~assets/img/expar/wireframe_purchase-expar.jpg");
  background-repeat: none;
  background-size: cover;
}

@keyframes slider {
  12.5% {
    margin-left: -100%;
  }
  25% {
    margin-left: -100%;
  }
  37.5% {
    margin-left: -200%;
  }
  50% {
    margin-left: -200%;
  }
  62.5% {
    margin-left: -300%;
  }
  75% {
    margin-left: -300%;
  }
  87.5% {
    margin-left: -400%;
  }
  100% {
    margin-left: -400%;
  }
}
</style>
