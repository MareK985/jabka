<template>
  <div>
    <Tabs>
      <Tab name="Stari Grad Celje" selected="true">
        <h2>{{ $t("activityDistance1") }}</h2>
        <p>
          {{ $t("activity1") }}
        </p>
        <a
          href="https://www.celje.si/sl/kartica/stari-grad-celje"
          target="_blank"
        >
          <button class="button">
            <span class="icon is-small">
              <Fas class="circle-icon" i="info" />
            </span>
            <span> {{ $t("moreInfo") }} </span>
          </button>
        </a>
      </Tab>
      <Tab name="Celjska Koča">
        <h2>{{ $t("activityDistance2") }}</h2>
        <p>
          {{ $t("activity2") }}
        </p>
        <a href="http://celjska-koca.si/" target="_blank">
          <button class="button">
            <span class="icon is-small">
              <Fas class="circle-icon" i="info" />
            </span>
            <span> {{ $t("moreInfo") }} </span>
          </button>
        </a>
      </Tab>
      <Tab name="Terme Laško">
        <h2>{{ $t("activityDistance3") }}</h2>
        <p>
          {{ $t("activity3") }}
        </p>
        <a href="https://www.thermana.si/" target="_blank">
          <button class="button">
            <span class="icon is-small">
              <Fas class="circle-icon" i="info" />
            </span>
            <span> {{ $t("moreInfo") }} </span>
          </button>
        </a>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from "~/components/Tab.vue";
import Tabs from "~/components/Tabs.vue";
import Fas from "~/components/Fas.vue";

export default {
  components: {
    Tab,
    Tabs,
    Fas,
  },
};
</script>

<style scoped>
/* Style the tab */
li {
  font-size: 1.6em;
}
@media screen and (max-width: 600px) {
  li {
    font-size: 1em;
    text-align: left !important;
  }
}
</style>
