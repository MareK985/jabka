<template>
  <div>
    <TabCard :tabs="tabs" :initial-tab="initialTab">
      <template slot="tab-head-james">
        {{ $t("priceIncludes") }}
      </template>
      <template slot="tab-panel-james">
        <ul>
          <li>{{ $t("priceIncludes1") }}</li>
          <li>{{ $t("priceIncludes2") }}</li>
          <li>{{ $t("priceIncludes3") }}</li>
          <li>{{ $t("priceIncludes4") }}</li>
          <li>{{ $t("priceIncludes5") }}</li>
          <li>{{ $t("priceIncludes6") }}</li>
          <li>{{ $t("priceIncludes7") }}</li>
          <li>{{ $t("priceIncludes8") }}</li>
          <li>{{ $t("priceIncludes9") }}</li>
          <li>{{ $t("priceIncludes10") }}</li>
          <li>{{ $t("priceIncludes11") }}</li>
          <li>{{ $t("priceIncludes12") }}</li>
          <li>{{ $t("priceIncludes13") }}</li>
          <li>{{ $t("priceIncludes14") }}</li>
        </ul>
      </template>
      <template slot="tab-head-lily">
        {{ $t("surcharges") }}
      </template>
      <template slot="tab-panel-lily">
        <ul>
          <li>
            {{ $t("surcharges1") }}
          </li>
        </ul>
      </template>
      <template slot="tab-head-snape">
        {{ $t("extras") }}
      </template>
      <template slot="tab-panel-snape">
        <table>
          <tr>
            <th>{{ $t("extrasTitle1") }}</th>
            <th>{{ $t("extras1") }}</th>
          </tr>
          <tr>
            <td>{{ $t("extrasTitle2") }}</td>
            <td>{{ $t("extras2") }}</td>
          </tr>
        </table>
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
  font-size: 1.3em;
}
@media screen and (max-width: 600px) {
  li {
    font-size: 1.1em;
    text-align: left !important;
  }
}
</style>
