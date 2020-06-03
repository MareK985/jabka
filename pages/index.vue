<template>
  <div>
    <div class="parallax1">
      <div data-aos="fade" class="heading">
        {{ $t("header") }}
      </div>
      <LangNavigation />
    </div>

    <section>
      <div class="two-col">
        TEST
      </div>
    </section>
    <!-- end of video -->

    <div class="parallax2">
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
      <div class="copyright">
        <span><MareUX /></span>
      </div>
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
    </div>
  </div>
</template>

<script>
import Fas from "~/components/Fas.vue";
import Fab from "~/components/Fab.vue";
import LangNavigation from "~/components/LangNavigation.vue";
import MareUX from "~/components/MareUX.vue";

import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: {
    Fas,
    Fab,
    LangNavigation,
    MareUX,
  },
  nuxtI18n: {
    paths: {
      sl: "/",
      en: "/",
    },
  },
  data() {
    return {
      settings: {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        centerPadding: "50px",
        slidesToScroll: 2,
        initialSlide: 0,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="css" scoped>
@import "./../css/style.css";

.logo-header {
  width: 4%;
  float: left;
  margin-left: 3em;
  margin-top: 3em;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #6d98a8; /* $primary */
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  margin: 7px;
}
.circle-icon {
  color: #392525; /* $base */
  width: 70%;
}
.quote {
  font-style: italic;
  margin: 0 200px;
}
.promo {
  height: 300px;
  border-radius: 10px;
  box-shadow: 10px 10px 18px 0px rgba(57, 37, 37, 0.75);
}

#promoVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
/* SLIDER SETTINGS */
.slider {
  float: left;
  width: 100%;
  margin: 20px 0px;
  text-align: center;
}
.responsive {
  width: 100%;
  height: auto;
  padding: 10px;
}

.logo {
  width: 40%;
  margin-top: 10%;
}
.copyright {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.12em;
}
.copyright span {
  color: white;
  position: absolute;
  bottom: -90px;
  right: 0px;
}
.contact-icons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-icon {
  margin: 20px;
}

@media screen and (max-width: 680px) {
  .logo-header {
    width: 12%;
    margin-left: 0.5em;
    margin-top: 0.7em;
  }
  .circle {
    width: 70px;
    height: 70px;
  }
  .quote {
    font-style: italic;
    margin: 0 50px;
  }
  .slider {
    width: 100%;
    margin: 20px 0px;
    padding-right: 0px;
  }
  .slide1 {
    height: 300px;
  }
  .logo {
    width: 80%;
    margin-top: 60%;
  }
  .copyright {
    font-size: 0.6em;
    letter-spacing: 0.05em;
  }
  .copyright span {
    bottom: -210px;
  }
  .contact-icon {
    margin: 10px;
  }
}
</style>
