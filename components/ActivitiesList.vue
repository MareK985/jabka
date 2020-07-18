<template>
  <div>
    <TabCard :tabs="tabs" :initial-tab="initialTab">
      <template slot="tab-head-james">
        <img
          src="~assets/img/collagio_gold.png"
          alt="slide"
          class="collagio-name"
        />
      </template>
      <template slot="tab-panel-james">
        <!-- 1. slika -->
        <p
          class="picture-name"
          data-aos="zoom-out-right"
          data-aos-duration="1500"
        >
          ASOCIACIJA
        </p>
        <div class="skica-container">
          <div
            class="skica-img"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="~assets/img/asociacija_skice.jpg"
              alt="slide"
              class="responsive zoom"
            />
          </div>
          <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
            <p class="attractionsDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              veritatis voluptatem dolores quidem reiciendis, quasi maiores
              molestias temporibus doloremque nemo eaque beatae consequatur
              possimus laborum soluta voluptates nobis repudiandae error! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum
              aspernatur voluptas quos, sequi quas libero incidunt aut
              distinctio voluptatem soluta est mollitia aliquam provident. Quas,
              laboriosam? Neque, delectus nesciunt.
            </p>
          </div>
        </div>

        <hr />
        <div data-aos="fade-up" data-aos-duration="3000">
          <img
            src="~assets/img/asociacija.jpg"
            alt="slide"
            class="responsive zoom slika"
          />

          <p class="slika-info">
            <strong>ASOCIACIJA</strong> <br />
            Author: Matjaž Zakrajšek <br />
            Measurements: 200 x 70 cm <br />
            Technique: oil on canvas <br />
            Frame: wood with gilding <br />
            Year: 2020
          </p>
        </div>
        <!-- END OF 1. slika -->
        <br />
        <br />
        <br />

        <!-- 2. slika -->
        <p
          class="picture-name"
          data-aos="zoom-out-right"
          data-aos-duration="1500"
        >
          SOLUCIJA
        </p>
        <div class="skica-container">
          <div
            class="skica-img"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="~assets/img/solucija_skice.jpg"
              alt="slide"
              class="responsive zoom"
            />
          </div>
          <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
            <p class="attractionsDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              veritatis voluptatem dolores quidem reiciendis, quasi maiores
              molestias temporibus doloremque nemo eaque beatae consequatur
              possimus laborum soluta voluptates nobis repudiandae error! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Iure dolorum
              aspernatur voluptas quos, sequi quas libero incidunt aut
              distinctio voluptatem soluta est mollitia aliquam provident. Quas,
              laboriosam? Neque, delectus nesciunt.
            </p>
          </div>
        </div>

        <hr />
        <div data-aos="fade-up" data-aos-duration="3000">
          <img
            src="~assets/img/solucija.jpg"
            alt="slide"
            class="responsive zoom slika"
          />

          <p class="slika-info">
            <strong>SOLUCIJA</strong> <br />
            Author: Matjaž Zakrajšek <br />
            Measurements: 200 x 70 cm <br />
            Technique: oil on canvas <br />
            Frame: wood with gilding <br />
            Year: 2020
          </p>
        </div>
        <!-- END OF 2. slika -->
        <br />
        <br />
      </template>
      <template slot="tab-head-lily">
        CATALOGUE 2
      </template>
      <template slot="tab-panel-lily">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis
          ad, soluta rem nulla voluptas. Corporis animi, commodi suscipit earum
          illum placeat corrupti quae quam architecto nobis obcaecati temporibus
          cupiditate.
        </p>
      </template>
      <template slot="tab-head-snape">
        CATALOGUE 3
      </template>
      <template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis
          ad, soluta rem nulla voluptas. Corporis animi, commodi suscipit earum
          illum placeat corrupti quae quam architecto nobis obcaecati temporibus
          cupiditate.
        </p>
      </template>
    </TabCard>
  </div>
</template>

<script>
import TabCard from "~/components/TabCard.vue";

export default {
  components: {
    TabCard,
  },
  data() {
    return {
      initialTab: "james",
      tabs: ["james", "lily", "snape"],
    };
  },
};
</script>

<style scoped>
@import "./../static/fonts/stylesheet.css";
@import "./../css/style.css";

.picture-name {
  font-family: "alphacentaurimedium";
  font-size: 7vh;
  font-weight: bold;
  color: $base;
  text-align: left;
  padding-bottom: 1em;
  padding-top: 1em;
}

.collagio-name {
  max-width: 350px;
}

.skica-container {
  text-align: center;
}
.skica-img {
  display: inline-block;
  max-width: 1000px;
  text-align: left;
  padding: 1em;
  margin: 0px;
  vertical-align: top;
}
.skica-text {
  display: inline-block;
  max-width: 500px;
  text-align: justify;
  font-size: 3.5vh;
  line-height: 2em;
  padding: 5px;
  margin: 5px;
}
.slika {
  margin-top: 6em;
  width: 80%;
  box-shadow: 10px 10px 5px grey;
}
.slika-info {
  font-size: 1.4em;
  text-align: right;
  margin-right: 10%;
}
/* Style the tab */
li {
  font-size: 1.6em;
}
.attractionsDescription {
  padding: 0;
  margin: 0;
  font-size: 0.865em;
  line-height: 180%;
}
@media screen and (max-width: 600px) {
  .picture-name {
    font-size: 5vh;
  }
  .skica-text {
    font-size: 2.5vh;
  }
  li {
    font-size: 1em;
    text-align: left !important;
  }
  .collagio-name {
    max-width: 170px;
  }
  .slika {
    margin-top: 2em;
    width: 90%;
    box-shadow: 5px 5px 2px grey;
  }
  .slika-info {
    font-size: 0.8em;
  }
}
</style>
