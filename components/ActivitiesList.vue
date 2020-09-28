<template>
  <div>
    <TabCard :tabs="tabs" :initial-tab="initialTab">
      <template slot="tab-head-james">
        <h1>MOTNI SOK</h1>
      </template>
      <template slot="tab-panel-james">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis
          ad, soluta rem nulla voluptas. Corporis animi, commodi suscipit earum
          illum placeat corrupti quae quam architecto nobis obcaecati temporibus
          cupiditate.
        </p>

        <br />
        <br />
      </template>
      <template slot="tab-head-lily">
        <h1>CIDER</h1>
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
        <h1>BALZAMIČNI KIS</h1>
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
  font-family: "ScratchInk-2OWz8";
  font-size: 7vh;
  font-weight: bold;
  color: red;
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
