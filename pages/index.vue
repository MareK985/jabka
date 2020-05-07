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
      <div
        data-aos="fade-right"
        class="two-col dark"
        style="border-radius: 30px; padding:10px;"
      >
        <h1>POSESTVO NA SVETINI nad Celjem (720m)</h1>
        <p>
          Ta počitniška hiša vam bo zagotovila vse, kar potrebujete za popolno
          sprostitev in uživanje v počitnicah. Sprostite se lahko v savni ali
          whirlpool-u, ohladite se v prijetnem zunanjem bazenu ali si privoščite
          obrok na terasi z zunanjo kuhinjo. Za deževne dni je večji prostor za
          druženje s kaminom. V prvem nadstropju boste na pokriti terasi našli
          zabavne vsebine, kot so biljard, namizni nogomet in namizni tenis.
        </p>
      </div>
      <div data-aos="fade-up" class="two-col">
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/sauna.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/jakuzzi.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/wifi.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/ac.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/winter.svg" />
        </div>
        <div class="circle">
          <img class="circle-icon" alt="" src="~assets/icons/cow.svg" />
        </div>
      </div>
    </section>
    <!-- The video -->
    <video id="promoVideo" autoplay muted loop>
      <source src="~assets/video/video_promo.mp4" type="video/mp4" />
    </video>

    <div class="cenik">
      <h1>CENIK</h1>
      <div class="two-col">
        <Cenik />
        <span style="text-align: left;"
          >* vse cene so v EUR z DDV za eno nočitev</span
        >
      </div>
      <div class="two-col">
        <TC />
      </div>
    </div>

    <div class="parallax2">
      <div class="heading-sm">
        DOŽIVETJA
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
      <Fas class="circle-icon" i="heart" />
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
import Cenik from "~/components/Cenik.vue";
import TC from "~/components/T&C.vue";
import Fas from "~/components/Fas.vue";

export default {
  components: {
    ContactForm,
    Cenik,
    TC,
    Fas,
  },
};
</script>

<style lang="css" scoped>
@import "./../css/style.css";

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #6d98a8; /* $primary */
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  margin: 7px;
}
.circle-icon {
  color: #392525; /* $base */
  width: 70%;
}

#promoVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
.cenik {
  height: 100%;
}

@media screen and (max-width: 680px) {
  .circle {
    width: 70px;
    height: 70px;
  }
}
</style>
