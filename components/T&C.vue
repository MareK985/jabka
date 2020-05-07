<template>
  <div>
    <Tabs>
      <Tab name="Cena vključuje" selected="true">
        <ul>
          <li>Nočitev v namestitvi</li>
          <li>Neomejena uporaba lastne vroče kadi / jacuzzija</li>
          <li>Kopalnica z WCjem</li>
          <li>Posteljnina, brisače, kopalni plašči</li>
          <li>Kavni avtomat in grelnik vode</li>
          <li>Brezplačen Wi-Fi</li>
          <li>TV</li>
          <li>Klima / gretje</li>
          <li>Kamin in drva</li>
          <li>Brezplačni parkirni prostor</li>
          <li>DDV</li>
          <li>Turistična taksa</li>
        </ul>
      </Tab>
      <Tab name="Doplačila">
        <ul>
          <li>
            Zgodnja prijava na resort je možna ob 12.00 (samo ob predhodnem
            dogovoru) 30 €
          </li>
          <li>Item 2</li>
        </ul>
      </Tab>
      <Tab name="Dodatne storitve">
        <table>
          <tr>
            <th>Voden ogled posestva</th>
            <th>10eur/osebo</th>
          </tr>
          <tr>
            <td>Organizirani izleti</td>
            <td>30eur/osebo</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>Red</td>
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
