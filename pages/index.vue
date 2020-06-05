<template>
  <div>
    <div class="parallax1">
      <LangNavigation />
      <div>
        <MareUXAnim />
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="3000"
          data-aos-delay="300"
        >
          <h1 class="comingsoon">COMING SOON !</h1>
        </div>
      </div>
    </div>

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

.comingsoon {
  font-size: 5vh;
  letter-spacing: 0.5em;
  padding: 2em;
  bottom: 300px;
}

@media only screen and (max-width: 749px) {
  .comingsoon {
    font-size: 5vh;
    letter-spacing: 0.5em;
    padding: 2em;
    top: 0;
  }
}
</style>
