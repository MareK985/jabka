<template>
  <div>
    <section class="hero">
      <div class="hero-inner">
        <LangNavigation />
        <div class="svg-container">
          <MareUXAnim />
        </div>
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="3000"
          data-aos-delay="300"
          class="title"
        >
          {{ $t("heroTitle1") }} <br />{{ $t("heroTitle2") }}
        </h1>
      </div>
    </section>
    <section>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sunt
        molestiae neque fugit voluptatem dolorum eum adipisci officiis eveniet
        reprehenderit iste, omnis doloribus, suscipit sit eius provident enim
        minima quo?
      </p>
    </section>

    <!-- <section>
      <div class="two-col">
        TEST
      </div>
    </section>-->

    <!-- <div class="parallax2">
      <div class="heading ">
        {{ $t("activities") }}
      </div>
    </div>
    <section class="dark">
      <div class="two-col">
        <div style="padding: 5px;">
          {{ $t("addressTitle") }}<br />
          {{ $t("address") }} <br />{{ $t("addressDetails") }}
        </div>
      </div>
      <div class="two-col">
        <ActivitiesList data-aos="fade-down-left" />
      </div>
    </section>

    <div class="parallax3"></div>

    <div class="dark">
      <div data-aos="flip-left"></div>
    </div>
    <div class="parallax4">
      <div style="color:white" class="copyright">
        {{ $t("copyright") }}
      </div>
      <div class="copyright">
        <nuxt-link
          class="cookie__link"
          to="/politika-zasebnosti"
          target="_blank"
          style="color:white"
          >{{ $t("privacyPolicy1") }}</nuxt-link
        >
        |
        <nuxt-link
          class="cookie__link"
          to="/generalTerms"
          target="_blank"
          style="color:white"
          >{{ $t("generalTerms") }}</nuxt-link
        >
      </div>
      <div class="contact-icons">
        <div class="contact-icon">
          <a href="mailto: etn@turnsek.net" taget="_blank"
            ><Fas style="color: white; font-size: 3em;" i="envelope"
          /></a>
        </div>
        <div class="contact-icon">
          <a href="" taget="_blank"
            ><Fab style="color: white;" class=" float" i="facebook"
          /></a>
        </div>
        <div class="contact-icon">
          <a href="" target="_blank"
            ><Fab style="color: white;" class=" float" i="instagram"
          /></a>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import Fas from "~/components/Fas.vue";
// import Fab from "~/components/Fab.vue";
import LangNavigation from "~/components/LangNavigation.vue";
import MareUXAnim from "~/components/MareUX_anim.vue";

import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: {
    // Fas,
    // Fab,
    LangNavigation,
    MareUXAnim,
  },
  nuxtI18n: {
    paths: {
      sl: "/",
      en: "/",
    },
  },
};
</script>

<style lang="css" scoped>
@import "./../css/style.css";

.hero {
  z-index: 0;
  /* Sizing */
  width: 100vw;
  height: 100vh;
  /* Flexbox suff */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Text styles suff */
  text-align: center;
  /* background styles */
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(~assets/img/bg-hero.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.svg-container {
  display: inline-block;
  position: relative;
  padding-top: 10%;
  height: 0;
  padding-bottom: 50%;
  height: 100%;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3vw;
  color: white;
  letter-spacing: 6px;
  line-height: 1.3em;
}

@media only screen and (max-width: 749px) {
}
</style>
