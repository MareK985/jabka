<template>
  <div>
    <Tabs>
      <Tab name="Stari Grad Celje" selected="true">
        <h2>Oddaljenost 4km</h2>
        <p>
          Romantičen, zapeljiv, mogočen, temačen, strašljiv, celjski ... Vse to
          je Stari grad Celje. Predstavlja obvezno destinacijo za vse
          obiskovalce Celja ne glede na to, od kod prihajajo. Mogočni grad z
          obzidjem, ki že stoletja vlada na griču nad mestom, vas bo že od daleč
          pustil brez besed. Ko ga boste obiskali, vam bo v spominu ostal za
          vedno.
        </p>
        <a
          href="https://www.celje.si/sl/kartica/stari-grad-celje"
          target="_blank"
        >
          <button class="button">
            <span class="icon is-small">
              <Fas class="circle-icon" i="info" />
            </span>
            <span>Več informacij</span>
          </button>
        </a>
      </Tab>
      <Tab name="Celjska Koča">
        <h2>Oddaljenost 1km</h2>
        <p>
          Romantičen, zapeljiv, mogočen, temačen, strašljiv, celjski ... Vse to
          je Stari grad Celje. Predstavlja obvezno destinacijo za vse
          obiskovalce Celja ne glede na to, od kod prihajajo. Mogočni grad z
          obzidjem, ki že stoletja vlada na griču nad mestom, vas bo že od daleč
          pustil brez besed. Ko ga boste obiskali, vam bo v spominu ostal za
          vedno.
        </p>
      </Tab>
      <Tab name="Terme Laško">
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
