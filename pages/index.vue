<template>
  <div id="container">
    <section class="hero">
      <div class="hero-inner">
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
          design & development <br />digital solutions
        </p>
      </div>
    </section>
    <section class="main-section">
      <h1 class="main-title" data-aos="zoom-in">about</h1>
      <div class="about-container">
        <div class="about-img">
          <img src="~assets/img/hero_1.jpg" />
        </div>
        <div class="about-text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            veniam quasi ad facere pariatur odio in voluptate dignissimos
            necessitatibus, nihil ab hic labore, velit magni aperiam molestiae
            distinctio odit eius.
          </p>
        </div>
      </div>

      <h1 class="main-title" data-aos="zoom-in">CATALOGUES</h1>
      <ActivitiesList />
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
    </section>
    <footer id="footer">
      <div class="footer-text">
        Matjaž Zakrajšek - Atelje MAX ZAXTER <br />
        Stara vas 25, 1000 Ljubljana<br />

        Copyright 2020 | 041 711 233 | matjaz.zakrajsek@gmail.com
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
import MareUXAnim from "~/components/MareUX_anim.vue";
import ActivitiesList from "~/components/ActivitiesList.vue";

// import CTAButton from "~/components/CTAButton.vue";

import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: {
    // Fas,
    // Fab,
    MareUXAnim,
    ActivitiesList,
  },
};
</script>

<style lang="css" scoped>
@import "./../css/style.css";

#container {
  min-height: 100%;
  position: relative;
  height: 100%;
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px; /* Height of the footer */
}

.about-container {
  text-align: center;
  padding: 15px;
}
.about-img {
  display: inline-block;
  max-width: 1000px;
  text-align: left;
  padding: 5px;
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

.main-section {
  transition: 0;
  padding-bottom: 300px; /* Height of the footer */
  height: 400vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(~assets/img/bg_1.jpg);
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
  margin-top: 1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
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
  position: absolute;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 0.9em;
  right: 10px;
  bottom: 5px;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(~assets/img/hero_1.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
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
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#case-study1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/hero_1.jpg);
}
#case-study2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/hero_1.jpg);
}

#case-study3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/hero_1.jpg);
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
  .main-section {
    height: 510vh;
  }

  .title {
    margin-top: 1em;
    font-size: 4.2vw;
    letter-spacing: 6px;
    line-height: 2.5em;
    text-align: center;
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
    height: 400px;
    margin: 70px 0;
    width: 100%;
  }
  .vision-statement {
    font-size: 5vw;
    margin-top: 0.6em;
    margin-left: 2rem;
    padding: 0.2em;
  }
  .main-title {
    margin-top: 1em;
    font-size: 12vw;
    letter-spacing: 0.1em;
  }
  .strong {
    font-size: 8.5vw;
    margin-left: 1.1em;
  }
}
</style>
