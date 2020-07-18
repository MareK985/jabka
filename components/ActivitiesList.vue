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
        <p class="picture-name">ASOCIACIJA</p>
        <img
          src="~assets/img/asociacija_skice.jpg"
          alt="slide"
          class="responsive"
        />

        <p class="attractionsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          veritatis voluptatem dolores quidem reiciendis, quasi maiores
          molestias temporibus doloremque nemo eaque beatae consequatur possimus
          laborum soluta voluptates nobis repudiandae error! Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Iure dolorum aspernatur
          voluptas quos, sequi quas libero incidunt aut distinctio voluptatem
          soluta est mollitia aliquam provident. Quas, laboriosam? Neque,
          delectus nesciunt.
        </p>
        <hr />

        <img src="~assets/img/asociacija.jpg" alt="slide" class="responsive" />

        <p class="attractionsDescription">
          Title: ASOCIACIJA <br />
          Author: Matjaž Zakrajšek <br />
          Measurements: 200 x 70 cm <br />
          Technique: wood with gilding <br />
          Frame: les s pozlato <br />
          Year: 2020
        </p>
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
  font-size: 5vh;
  color: $base;
  text-align: left;
  padding-bottom: 1em;
  padding-top: 1em;
}

.collagio-name {
  max-width: 350px;
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
  li {
    font-size: 1em;
    text-align: left !important;
  }
  .collagio-name {
    max-width: 170px;
  }
}
</style>
