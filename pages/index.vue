<template>
  <div>
    <section class="hero">
      <div class="hero-inner">
        <LangNavigation />
        <div class="svg-container">
          <MareUXAnim />
        </div>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="2000"
          data-aos-delay="1000"
          class="title"
        >
          {{ $t("heroTitle1") }} <br />{{ $t("heroTitle2") }}
        </p>
      </div>
    </section>
    <section class="main-section">
      <br />
      <br />
      <div
        class="vision-statement"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        All-in-one
      </div>
      <div
        class="vision-statement"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        business-oriented
      </div>
      <div
        class="vision-statement"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        <strong>digital solution provider.</strong>
      </div>
      <hr style="margin: 4em;" />
      <div
        class="vision-statement"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        Perfect choice for small business owners
      </div>
      <div
        class="vision-statement"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        looking to renew
      </div>
      <div
        class="vision-statement strong"
        data-aos="zoom-in-right"
        data-aos-duration="3000"
      >
        digital experience.
      </div>
      <br />
      <br />

      <h1 class="main-title" data-aos="zoom-in">projects</h1>
      <ul>
        <li data-aos="fade-right">
          <div class="case-title">#1: Svetina Ranch</div>
          <div class="case-short-description case-study1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            doloribus amet eveniet. Voluptate esse magni rerum, aliquam vel
            expedita saepe totam ullam illum dolorum, accusamus dignissimos
            repudiandae! Dolorem, eaque tempore.
          </div>
        </li>
        <li data-aos="fade-left">
          <div class="case-title">#1: Svetina Ranch</div>
          <div class="case-short-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            doloribus amet eveniet. Voluptate esse magni rerum, aliquam vel
            expedita saepe totam ullam illum dolorum, accusamus dignissimos
            repudiandae! Dolorem, eaque tempore.
          </div>
        </li>
      </ul>
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

.main-section {
  background-color: white;
  transition: 0;
}
.vision-statement {
  font-size: 3vw;
  text-align: left;
  margin-top: 0.6em;
  margin-left: 4rem;
  line-height: 1em;
  padding: 0.2em;
}
.strong {
  font-size: 4.5vw;
  margin-left: 3.5rem;
}
.main-title {
  font-size: 10vw;
  font-weight: 600;
  letter-spacing: 0em;
  margin-top: 2em;
  text-transform: uppercase;
  color: rgba(8, 10, 12, 0.2);
}

.case-title {
  font-size: 2.5vw;
  text-decoration: underline;
  margin-top: 3em;
  margin-bottom: 1em;
}
.case-short-description {
  font-size: 1.5vw;
  margin: 1em;
}
.grow:hover {
  font-size: 3em;
}

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
  padding-top: 0%;
  height: 0;
  padding-bottom: 40%;
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

ul li {
  max-width: 500px;
  height: 500px;
  color: white;
  display: inline-block;
  float: center;
  margin: 50px;
  overflow: hidden;
  text-align: center;
  /* background styles */
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/celjskaKoca.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
ul li div {
  opacity: 0;
  transform: scale(10);
  transition: all 0.3s ease-in-out 0.2s;
}
ul li:hover div {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease-in-out 0.1s;
}
ul li:active div {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease-in-out 0.1s;
}

@media only screen and (max-width: 749px) {
  .title {
    margin-top: 1em;
    font-size: 4.2vw;
    letter-spacing: 6px;
    line-height: 2.5em;
  }
  .case-title {
    font-size: 5.5vw;
    margin-top: 3em;
    margin-bottom: 1em;
  }
  .case-short-description {
    font-size: 3.5vw;
    margin: 1em;
  }
  ul li {
    height: 400px;
    margin: 70px 0;
  }
  .vision-statement {
    font-size: 5vw;
    margin-top: 0.6em;
    margin-left: 2rem;
    padding: 0.2em;
  }
  .main-title {
    margin-top: 3em;
    font-size: 12vw;
    letter-spacing: 0.1em;
  }
  .strong {
    font-size: 8.5vw;
    margin-left: 1.1em;
  }
}
</style>
