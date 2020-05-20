<template>
  <div>
    <TabCard :tabs="tabs" :initial-tab="initialTab">
      <template slot="tab-head-james">
        {{ $t("activityTitle1") }}
      </template>
      <template slot="tab-panel-james">
        <h2>{{ $t("activityDistance1") }}</h2>
        <img src="~/assets/img/grad.jpg" alt="slide" class="responsive" />

        <p class="attractionsDescription">
          {{ $t("activity1") }}
        </p>
        <a
          href="https://www.celje.si/sl/kartica/stari-grad-celje"
          target="_blank"
        >
          <button class="button" style="margin-top: 10px;">
            <span class="icon is-small">
              <Fas class="circle-icon" i="info" />
            </span>
            <span> {{ $t("moreInfo") }} </span>
          </button>
        </a>
      </template>

      <template slot="tab-head-lily">
        {{ $t("activityTitle2") }}
      </template>
      <template slot="tab-panel-lily">
        <h2>{{ $t("activityDistance2") }}</h2>
        <img
          src="~/assets/img/celjskaKoca.jpg"
          alt="slide"
          class="responsive"
        />

        <p class="attractionsDescription">
          {{ $t("activity2") }}
        </p>
        <a href="http://celjska-koca.si/" target="_blank">
          <button class="button" style="margin-top: 10px;">
            <span class="icon is-small">
              <Fas class="circle-icon" i="info" />
            </span>
            <span> {{ $t("moreInfo") }} </span>
          </button>
        </a>
      </template>
      <template slot="tab-head-snape">
        {{ $t("activityTitle3") }}
      </template>
      <template slot="tab-panel-snape">
        <h2>{{ $t("activityDistance3") }}</h2>
        <img src="~/assets/img/termana.jpg" alt="slide" class="responsive" />

        <p class="attractionsDescription">
          {{ $t("activity3") }}
        </p>
        <a href="https://www.thermana.si/" target="_blank">
          <button class="button" style="margin-top: 10px;">
            <span class="icon is-small">
              <Fas class="circle-icon" i="info" />
            </span>
            <span> {{ $t("moreInfo") }} </span>
          </button>
        </a>
      </template>
    </TabCard>
  </div>
</template>

<script>
import TabCard from "~/components/TabCard.vue";
import Fas from "~/components/Fas.vue";

export default {
  components: {
    Fas,
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
