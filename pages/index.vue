<template>
  <div id="container">
    <section class="hero">
      <div class="hero-inner">
        <div class="svg-container">
          <JabkaLogo />
        </div>
        <div class="atelje-name">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-duration="2000"
            class="title"
          >
            premium jabolcni sok
          </h1>
        </div>
      </div>
    </section>
    <section class="main-section">
      <h1 class="main-title" data-aos="zoom-in">predstavlja...</h1>
      <KeyAdvantages/>
      <h1 class="main-title" data-aos="zoom-in">ZGODBA V OZADJU...</h1>
      <div class="about-container">
        <div class="about-img" data-aos="zoom-in-down" data-aos-duration="1500">
          <img src="~assets/img/bg_zaki.jpg" />
        </div>
        <div class="about-text" data-aos="fade-left" data-aos-duration="500">
          <p class="predgovor">
           Pridelava naravnega jabolčnega soka je kompleksen proces. Za doseganje najvišje kakovosti je pomembna: 
          </p>
          <div class="quality">
            <ul>
              <li>&#8594; regija kjer se nahajajo nasadi</li>
              <br/>
              <li>&#8594; sorta jabolk</li>
              <br/>
              <li>&#8594; čistoča</li>
              <br/>
              <li>&#8594; pasterizacija</li>
              <br/>
              <li>&#8594; ohlajanje in skladiščenje</li>
              <br/>
              <li>&#8594; človeški faktor</li>
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in">
        <h1 class="main-title">PROIZVODI</h1>
        <div>
          <Jabka250mlProductCard />
          <!-- <VueSlickCarousel :arrows="true" :dots="true">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </VueSlickCarousel> -->
        </div>
      </div>

      <!-- PORTOFOLIO IMAGES -->

      <!-- PORTOFOLIO IMAGES -->
      <!-- <ul>
        <li id="case-study1" data-aos="fade-right">
          <div class="case-title">#1: Svetina Ranch</div>
          <div>
            <p class="case-short-description">
              • UX Design <br />
              • Web Development<br />
              • SEO Optimization<br />
              • Video Marketing
              <br />
            </p>
            <a href="projects/svetinaRanch" class="page-button"
              >About the project</a
            >
          </div>
        </li>

        <li id="case-study3" data-aos="fade-right">
          <div class="case-title">#2: ExpAR store</div>
          <div>
            <p class="case-short-description">
              • Business Analytics<br />
              • UX Design <br />
              • FrontEnd Dev.<br />
              • Video Marketing
              <br />
            </p>
            <a href="projects/exparStore" class="page-button"
              >About the project</a
            >
          </div>
        </li>

        <li id="case-study2" data-aos="fade-right">
          <div class="case-title">#3: Ruta Nature Resort</div>
          <div>
            <p class="case-short-description">
              • UX Design <br />
              • Web Development<br />
              • SEO Optimization<br />
              • Video Marketing
              <br />
            </p>
            <div style="font-size: 2em;">IN THE MAKING...</div>
          </div>
        </li>
      </ul> -->
      <div data-aos="zoom-in">
        <h1 class="main-title" data-aos="zoom-in">zadovoljne stranke</h1>
      </div>
      <VueSlickCarousel :arrows="true" :dots="true">
        <div>
          <p class="quote">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            est architecto commodi consequuntur amet, illo expedita, qui quod,
            veniam sed nisi quaerat? Nemo praesentium necessitatibus provident
            iste repellat veniam quia!
          </p>
          <p class="quote-name">Matej Novak, Firma d.o.o.</p>
        </div>
      </VueSlickCarousel>
    </section>
    <footer id="footer">
      <MareUXLogo />
      <br />
      <p class="footer-text">
        HRIBERŠEK, Mitja Krajnc s.p.,<br /> 
        Šmartno v Rožni dolini 21A, 3201 Šmartno v R.d., Celje<br />
        &copy; Copyright 2020 | DŠ 92189407 | MŠ 8564914000
      </p>
      <div class="copyright">
        <nuxt-link
          class="cookie__link"
          to="/privacyPolicy"
          target="_blank"
          style="color:white"
          >Politika zasebnosti</nuxt-link
        >
        |
        <nuxt-link
          class="cookie__link"
          to="/generalTerms"
          target="_blank"
          style="color:white"
          >Pogoji poslovanja</nuxt-link
        >
      </div>
      <div class="contact-icons">
        <div class="contact-icon">
          <a href="mailto: info@jabka.si" target="_blank"
            ><Fas style="color: white; font-size: 3em;" i="envelope"
          /></a>
        </div>
        <div class="contact-icon">
          <a href="https://www.facebook.com/jABKAsok" target="_blank"
            ><Fab style="color: white;" class=" float" i="facebook"
          /></a>
        </div>
        <div class="contact-icon">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            ><Fab style="color: white;" class=" float" i="instagram"
          /></a>
        </div>
      </div>

    </footer>

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
import VueSlickCarousel from 'vue-slick-carousel';
// import MZlogoAnim from "~/components/mz_anim.vue";
import MareUXLogo from '~/components/MareUXLogo.vue';
import KeyAdvantages from '~/components/KeyAdvantages.vue';
import JabkaLogo from '~/components/JabkaLogo.vue';
import Jabka250mlProductCard from '~/components/Jabka_250mlProductCard.vue';
import Fas from "~/components/Fas.vue";
import Fab from "~/components/Fab.vue";


// import ActivitiesList from "~/components/ActivitiesList.vue";
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
// import CTAButton from "~/components/CTAButton.vue";
export default {
  components: {
    // Fas,
    // Fab,
    // MZlogoAnim,
    Jabka250mlProductCard,
    MareUXLogo,
    KeyAdvantages,
    // ActivitiesList,
    JabkaLogo,
    VueSlickCarousel,
    Fas,
    Fab,

  },
};
</script>

<style lang="css" scoped>
@import './../css/style.css';


#container {
  min-height: 100%;
  position: relative;
  height: 100%;
  background-color: #231f20;
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #231f20;
  height: 260px; /* Height of the footer */
}
.hero-inner {
    margin-top: 20em;
}

.atelje-name {
  position: relative;
  top: -20%;
}

ul {
  list-style-type: circle;
}

.about-container {
  text-align: center;
  padding: 15px;
}
.about-img {
  display: inline-block;
  max-width: 1000px;
  text-align: left;
  padding: 2em;
  margin: 5px;
  vertical-align: top;
}
.about-text {
  display: inline-block;
  max-width: 400px;
  text-align: left;
  padding: 5px;
  margin: 5px;
}
.quality {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 1.3em;
}

.predgovor {
  font-size: 4vh;
  text-align: left;
  line-height: 1.3em;
  color: #fff;
}
.quote {
  font-size: 3.5vh;
  text-align: justify;
  line-height: 1.7em;
  margin-top: 2em;
  padding-left: 200px;
  padding-right: 200px;
  color: #fff;
}

.quote-name {
  font-size: 4vh;
  text-align: left;
  padding-left: 200px;
  padding-right: 200px;
  color: #fff;
}

.main-section {
  transition: 0;
  padding-bottom: 300px; /* Height of the footer */
  /* height: 800vh; */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
    url(~assets/img/bg_1.jpg);
  background-repeat: repeat-y; */
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
  font-size: 8vw;
  font-weight: 300;
  padding-top: 0.5em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
}

.case-title {
  font-size: 2.5vw;
  text-decoration: underline;
  margin-top: 2em;
  margin-bottom: 1em;
}

.page-button {
  background-color: white;
  color: black;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  align-items: center;
  font-size: 16px;
  margin: 2px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.page-button:hover {
  background-color: #6d98a8;
  color: white;
}

.footer-text {
  align-items: center;
  text-align: center;
  color: white;
  font-size: 0.9em;
  bottom: 0px;
}
.case-short-description {
  font-size: 1.5vw;
  margin: 1em 3.5em;
  text-align: left;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.93)),
    url(~assets/img/jabka_hero_web.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #464646;
}

.svg-container {
  display: inline-block;
  position: relative;
  /* padding-top: -10%;
  height: 0;
  padding-bottom: 85%; */
  height: 100%;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding-bottom: -70%;
}

.title {
  display: block;
  font-size: 3.5vw;
  color: white;
  letter-spacing: 5px;
  margin-top: 30px;
  line-height: 1.3em;
}

ul li {
  letter-spacing: 0.15em;
  max-width: 500px;
  /* height: 500px; */
  color: white;
  display: inline-block;
  /* float: center; */
  /* margin: 50px; */
  overflow: hidden;
  text-align: left;
  /* background styles */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
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
  margin: 15px;
}


@media only screen and (max-width: 749px) {
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)),
      url(~assets/img/jabka_header.jpeg);
    background-attachment: initial;
  }

  .hero-inner {
    margin-top: 0em;
  }

  /* .main-section {
    height: 620vh;
  } */
  .title {
    margin-top: 2.5em;
    font-size: 10.5vw;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 1.3em;
    text-align: center;
  }

  .about-img {
    padding: 0em;
    margin: 5px;
    vertical-align: top;
  }
  .about-text {
    display: inline-block;
    /* max-width: 400px; */
    text-align: left;
    padding: 0px;
    margin: 0px;
  }

  .about-text br {
    padding: 0px;
    margin: 0px;
  }

  .predgovor {
    font-size: 3vh;
    text-align: left;
    line-height: 1.3em;
  }

  .case-title {
    font-size: 5.5vw;
    margin-top: 3em;
    margin-bottom: 1em;
  }
  .case-short-description {
    margin: 1em 1.5em;
    font-size: 3.5vw;
    margin: 1em;
  }
  ul li {
    /* height: 400px; */
    /* margin: 70px 0; */
    width: 100%;
  }
  .vision-statement {
    font-size: 5vw;
    margin-top: 0.6em;
    margin-left: 2rem;
    padding: 0.2em;
  }
  .main-title {
    font-size: 10.5vw;
    letter-spacing: 0.1em;
  }
  .strong {
    font-size: 8.5vw;
    margin-left: 1.1em;
  }
  .quote {
    font-size: 2.7vh;
    text-align: justify;
    line-height: 1.4em;
    margin-top: 1em;
    padding: 20px;
  }

  .footer-text {
    line-height: 1.6em;
  }

  .quote-name {
    font-size: 3.5vh;
    text-align: left;
    padding: 20px;
  }
  #footer {
  height: 210px; /* Height of the footer */
}
  .contact-icon {
  margin: 5.5px;
}
}
</style>
