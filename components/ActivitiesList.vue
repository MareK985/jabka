<template>
  <div>
    <TabCard :tabs="tabs" :initial-tab="initialTab">
      <template slot="tab-head-james">
        COLLAGIO
      </template>
      <template slot="tab-panel-james">
        <h2>COLLAGIO</h2>
        <img src="~assets/img/hero_1.jpg" alt="slide" class="responsive" />

        <p class="attractionsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          veritatis voluptatem dolores quidem reiciendis, quasi maiores
          molestias temporibus doloremque nemo eaque beatae consequatur possimus
          laborum soluta voluptates nobis repudiandae error!
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
}
</style>
