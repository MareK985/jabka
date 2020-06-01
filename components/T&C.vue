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
            {{ $t("cleaningFee") }}
          </li>
          <li>{{ $t("surcharges1") }}</li>
        </ul>
      </template>
      <template slot="tab-head-snape">
        {{ $t("extras") }}
      </template>
      <template slot="tab-panel-snape">
        <!-- <table>
          <tr>
            <th class="mini-tabel">{{ $t("extrasTitle1") }}</th>
            <td class="mini-tabel">{{ $t("extras1") }}</td>
          </tr>
          <tr>
            <th class="mini-tabel">{{ $t("extrasTitle2") }}</th>
            <td class="mini-tabel">{{ $t("extras2") }}</td>
          </tr>
        </table> -->
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
  font-size: 1em;
  list-style-type: square;
  margin-left: 2em;
}
.mini-tabel {
  font-size: 0.6em;
  padding: 20px;
  line-height: 150%;
}
@media screen and (max-width: 600px) {
  li {
    font-size: 0.8em;
    line-height: 180%;
    text-align: left !important;
  }
  .mini-tabel {
    font-size: 0.85em;
    padding: 10px;
    line-height: 120%;
  }
}
</style>
