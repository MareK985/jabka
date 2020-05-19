<template>
  <div>
    <Tabs>
      <Tab name="Cena vključuje" selected="true">
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
      </Tab>
      <Tab name="Doplačila">
        <ul>
          <li>
            {{ $t("surcharges1") }}
          </li>
        </ul>
      </Tab>
      <Tab name="Dodatne storitve">
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
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from "~/components/Tab.vue";
import Tabs from "~/components/Tabs.vue";

export default {
  components: {
    Tab,
    Tabs,
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
