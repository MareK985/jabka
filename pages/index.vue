<template>
  <div>
    <div class="parallax1">
      <div class="heading-sm">
        Pobegni v naravo
      </div>
      <div class="heading">
        Najami posestvo na samem
      </div>
      <ContactForm />
    </div>

    <section>
      <div class="two-col dark" style="border-radius: 30px; padding:10px;">
        <h1 style="color: white">POSESTVO NA SVETINI nad Celjem (720m)</h1>
        <p style="color: white">
          Ta počitniška hiša vam bo zagotovila vse, kar potrebujete za popolno
          sprostitev in uživanje v počitnicah. Sprostite se lahko v savni ali
          whirlpool-u, ohladite se v prijetnem zunanjem bazenu ali si privoščite
          obrok na terasi z zunanjo kuhinjo. Za deževne dni je večji prostor za
          druženje s kaminom. V prvem nadstropju boste na pokriti terasi našli
          zabavne vsebine, kot so biljard, namizni nogomet in namizni tenis.
        </p>
      </div>
      <div class="two-col">
        <Fas i="heart" />
      </div>
    </section>

    <div class="parallax2">
      <div class="heading-sm">
        Fire works
      </div>
    </div>

    <section class="dark">
      <h2>How Parallaw works</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et eum
        sed tempore cumque, doloribus repudiandae labore quibusdam magnam,
        possimus alias sapiente corrupti iusto quasi asperiores officiis ipsa
        odio suscipit.
      </p>
    </section>

    <div class="parallax3"></div>

    <div class="dark">
      <h3>Fixed background scrolling</h3>
      <div class="two-col">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic
          assumenda nisi neque nemo eos quo placeat officiis perferendis impedit
          inventore fuga, nesciunt, suscipit enim rem sapiente itaque unde
          consectetur?
        </p>
      </div>
      <div class="two-col">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic
          assumenda nisi neque nemo eos quo placeat officiis perferendis impedit
          inventore fuga, nesciunt, suscipit enim rem sapiente itaque unde
          consectetur?
        </p>
      </div>
    </div>

    <div class="parallax4"></div>
  </div>
</template>

<script>
import ContactForm from "~/components/ContactForm.vue";
import Fas from "~/components/Fas.vue";

export default {
  components: {
    ContactForm,
    Fas,
  },
};
</script>

<style lang="css" scoped>
@import "./../css/style.css";
</style>
