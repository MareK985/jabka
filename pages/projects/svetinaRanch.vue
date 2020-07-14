<template>
  <div>
    <div class="project-hero">
      <video
        id="videoBG"
        autoplay
        loop
        muted
        playsinline
        poster="~assets/img/bg-hero.jpg"
      >
        <source src="~assets/video/svetina_bg.mp4" type="video/mp4" />
      </video>
      <header class="viewport-header">
        <h1>
          project #1
          <span>Svetina Ranch</span>
        </h1>
        <a href="http://svetina-ranch.com/" target="_blank"
          ><div class="cta">
            <button>SPLETNA STRAN</button>
            <div class="btn"></div></div
        ></a>
      </header>
      <main>
        <div class="client">Naročnik: Elektro Turnšek nepremičnine d.o.o.</div>
        <div>Naše delo</div>

        <ul>
          <li class="fields">
            Oblikovanje uporabniške izkušnje <br />(UX design)
          </li>
          <li class="fields">Razvoj spletne strani - Landing page</li>
          <li class="fields">SEO optimizacija</li>
          <li class="fields">Priprava video vsebin za digitalni marketing</li>
        </ul>
        <br />
        <br />
        <!--section 1 -->
        <section>
          <div class="section-title">Izziv / naloga</div>
          <div class="container">
            <div class="left">
              <p>
                OECD za 36 držav članic za leto 2020 napoveduje zmanjšanje med
                40-70% mednarodnih potovanj. Poudarek V letu 2020 je na
                <strong>domačem turizmu</strong>.
                <br />
                <br />
                Ob pomanjkanju tujih turistov v začetku poletja bo potrebno še
                posebno učinkovito pritegniti domačega gosta.
              </p>
            </div>
            <div class="right">
              <br />
              <h4 style="text-align: center; font-size: 5.3vh;">
                NALOGA #1:
              </h4>
              <br />
              <span style="font-size: 4.3vh;">Privabiti nove goste </span
              ><br /><br />
              <h4 style="text-align: left;">
                MERILO USPEHA: več kot 50% zasedenost do konca leta 2020.
              </h4>
            </div>
          </div>
        </section>
        <!--ENF OF section 1 -->
        <hr />
        <!--section 2 -->
        <section>
          <div class="section-title">Analiza okolja</div>
          <div class="container">
            <p style="margin: 0px 10px;">
              Oddaljeni, a dostopni kraji bodo hitreje okrevali v primerjavi z
              turističnimi, prenatrpanimi destinacijami. V iskanju zasebnosti se
              pričakuje porast povpraševanja po najemu zasebnih hiš, vil, kampov
              in obisk majhnih butičnih hotelov. (<a
                href="https://www.total-croatia-news.com/travel/42462-post-coronavirus-travel"
                target="_blank"
                >source</a
              >).
            </p>
            <br />
            <h3 style="padding: 10px; margin: 10px;">KONKURENCA</h3>

            <div class="left">
              <p>
                Nepremičnine na oddaljenih lokacijah se po večini oglašujejo
                preko različnih portalov, kot so:
              </p>
              <div style="padding: 10px; margin: 10px;">
                <a href="https://www.glamping.si/" target="_blank"
                  >Portal za najem luksuznih šotor in bivakov</a
                >
                <br />
                <a href="https://najem-koce.si/sl/" target="_blank"
                  >Portal za najem koče po Sloveniji</a
                >
              </div>
              <br />
              <p>
                V redkih primerih imajo posamezne nepremičnine za oddajo svoje
                lastne spletne strani. Primer spodaj:
              </p>
              <a href="http://www.najemikoco.si/" target="_blank"
                >Koča na samem (Goriško)</a
              >
            </div>
            <div class="right">
              <h4>UGOTOVITVE</h4>
              <br />+ big selection <br />+ easy search based on location
              <br />+ newsletter – get better deals
              <br />
              <br />

              - individual promotion through social media is not so effective

              <br />
              - poor integration with local providers of different experiences
              <br />
              -integration with other rental platform is not possible (real time
              availability not possible)
            </div>
            <div class="container">
              <h3>PERSONE</h3>
              <div class="left">
                <ul>
                  <li>
                    2 Families of 4 mostly foreign tourists
                  </li>
                  <li>
                    Friends & Colleagues from work mostly domestic tourists
                  </li>
                </ul>
              </div>
              <div class="right">
                <h4>GLAVNE ZAHTEVE / ŽELJE</h4>
                <ul>
                  <li>Access</li>
                  <li>Peace</li>
                  <li>Activities in nature</li>
                  <li>Social distancing</li>
                  <li>Good local food and wine</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!--ENF OF section 2 -->
        <hr />
        <!--section 3 -->
        <section>
          <div class="section-title">Konceptiranje</div>
          <div class="container">
            <div class="left">
              <img src="~assets/img/hero_1.jpg" />
              Low-fidelity wireframe
            </div>
            <div class="right">
              <h3>PRODUCT VISION</h3>
              <p class="vision">
                Landing page with pictures and videos of remote home stay,
                located in the middle of nowhere, but with all the possible
                luxoury. Visitor can access real time price and availability
                information and also send inquiry for desired time period
                directly on the page. Booking confirmation with all the details
                is coordinated via emails. After departure user receives request
                for review of the service and overall experience.
              </p>
            </div>
          </div>
        </section>
        <!--ENF OF section 3 -->
        <hr />
        <!--section 4 -->
        <section>
          <div class="section-title">Oblikovanje uporabniške izkušnje</div>
          <div class="container">
            <div class="left">
              <figure id="myDiv" class="img-wrapper">
                <img id="theImg" src="~assets/img/hero_1.jpg" />
              </figure>
              High-fidelity wireframe (made in Adobe XD)
            </div>

            <div class="right">
              <h4>ZAHTEVANE FUNKCIONALNOSTI</h4>
              <ul>
                <li>Real-time calendar with availability</li>
                <li>Form for sending a reservation inquiry</li>
                <li>Mobile-first design</li>
                <li>Real-time price per day / no hidden costs</li>
                <li>Pricing tabel</li>
                <li>Image galery with video</li>
                <li>Short description with feature/service icons</li>
                <li>Testimonials slider</li>
                <li>Direct & easy contact by phone</li>
                <li>Multilingual site (EN, SL, DE, NL, FR)</li>
                <li>Social media integration (Facebook, Instagram)</li>
                <li>
                  Activities map (what can you do nearby) & other services
                </li>
                <li>Roadmap instructions with location picker</li>
              </ul>
            </div>
          </div>
        </section>
        <!--ENF OF section 4 -->
        <hr />
        <!--section 5 -->
        <section>
          <div class="section-title">Razvoj MVP</div>
          <div class="container">
            <div class="left">
              <h3>SEO optimizacija</h3>
              <p>
                <li>Izbira pravih ključnih besed za SEO (med 5 in 10)</li>
                <li>
                  Umeščanje na spletno stran in doseganje zadostne gostote
                  pojavljanja na njej.
                </li>
              </p>
            </div>
            <div class="right">
              <h4>OKOLJE</h4>
              <ul>
                <li>JS Ogrodje: Vue/Nuxt</li>
              </ul>
              <h4>KNJIŽNICE</h4>
              <ul>
                <li>Animation on scroll - aos</li>
                <li>ICONS - nuxt-fontawesome</li>
                <li>SLIDER - vue-slick-carousel</li>
                <li>GDPR - vue-analytics</li>
                <li>Multilanguage module - nuxt-i18n</li>
              </ul>
            </div>
          </div>
        </section>
        <!--ENF OF section 5-->
        <hr />
        <!--section 6 -->
        <section>
          <div class="section-title">Priprava video vsebin</div>
          <div class="container">
            <div class="left">
              <video
                autoplay
                loop
                muted
                playsinline
                poster="~assets/img/bg-hero.jpg"
              >
                <source src="~assets/video/promo_web.mp4" type="video/mp4" />
              </video>
              Promocijski video za kampanjo na socialnih omrežjih
            </div>
            <div class="right">
              <video
                autoplay
                loop
                muted
                playsinline
                poster="~assets/img/bg-hero.jpg"
              >
                <source
                  src="~assets/video/routeVideo_short.mp4"
                  type="video/mp4"
                />
              </video>
              Navodila za pot - interaktivni video
            </div>
          </div>
        </section>
        <!--ENF OF section 6-->
        <hr />
        <!--section 7 -->
        <section>
          <div class="section-title">Testiranje MVP</div>
          <div class="container">
            <div class="left">
              <h3>Digitalni marketing</h3>
              <p>
                Pred začetkom poletja smo za namene testiranja MVP lansirali 2
                kampanji na socialnim omrežjih:
              </p>
              <div style="padding: 10px; margin: 10px;">
                <br />
                <a
                  href="https://www.facebook.com/svetina.ranch/"
                  target="_blank"
                  >Facebook</a
                >
                Doseg: 7.9K Ogledov: 1.021
                <br />
                <a
                  href="https://www.instagram.com/svetina_ranch/"
                  target="_blank"
                  >Instagram</a
                >
                <br />
              </div>
            </div>
            <div class="right">
              <h4>UGOTOVITVE</h4>
              <ul>
                <li>
                  Stranke želijo napreden rezervacijski modul, ki bo omogočal
                  enostavno rezervacijo direktno preko koledarja na spletni
                  strani.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <!--ENF OF section 7-->
        <br />
        <br />
        <!--section 8 -->
        <section>
          <div class="section-title">REZULTATI</div>
          <div class="container">
            <ul>
              <li class="fields">
                povečanje zasedenosti za 20% (iz 50% na 70%)<br />
                5 bookingov preko web reservation forma
              </li>
              <li class="fields">
                Enostaven vpogled vseh deležnikov v zasedenost terminov (v
                realnem času)
              </li>
            </ul>
          </div>
        </section>
        <!--ENF OF section 8-->
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 150%;
  line-height: 1.4;
}
body {
  margin: 0;
}

hr {
  margin: 4em;
}

#videoBG {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.viewport-header {
  position: relative;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: #6d98a8;
}

a:hover {
  color: #4d4b2a;
}

h1 {
  font-family: "Syncopate", sans-serif;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3vw;
  line-height: 1.2;
  font-size: 3vw;
  text-align: center;
  span {
    display: block;
    font-size: 10vw;
    letter-spacing: -1.2vw;
  }
}
main {
  background: rgba(black, 0.66);
  color: white;
  position: relative;
  padding: 1rem;
  height: 800vh;
  ul {
    font-size: 2.5vh;
    margin-top: 1em;
    margin-left: 1em;
  }
  li {
    margin-bottom: 1em;
    line-height: 1em;
    text-align: left;
    list-style-type: square;
  }
  .fields {
    margin-top: 2.5em;
    margin-left: 20em;
    line-height: 1.5em;
    text-align: justify;
    list-style-type: square;
  }
}
section {
  .section-title {
    font-size: 5vh;
    letter-spacing: 0.3em;
    line-height: 1.2em;
    text-align: center;
    margin: 0;
  }
  li {
    margin-bottom: 1em;
    line-height: 1em;
    text-align: left;
    list-style-type: square;
  }
  p {
    text-align: justify;
    font-size: 2.5vh;
  }
  h3 {
    font-size: 3.7vh;
    font-weight: 600;
  }
  h4 {
    font-size: 3vh;
  }
  .container {
    text-align: center;
    padding: 15px;
  }
  .left {
    display: inline-block;
    max-width: 700px;
    text-align: left;
    padding: 5px;
    //background-color: red;
    border-radius: 3px;
    margin: 5px;
    vertical-align: top;
  }
  .right {
    display: inline-block;
    max-width: 400px;
    text-align: left;
    padding: 5px;
    //background-color: green;
    border-radius: 3px;
    margin: 5px;
  }
}

.img-wrapper {
  height: 667px;
  width: auto;
  position: relative;
  overflow-y: auto;
}
.img-wrapper > img {
  position: relative;
}

.vision {
  font-style: italic;
  text-align: left;

  font-size: 1.3em;
}
.client {
  font-size: 2em;
  margin: 1em 0;
}

// CTA button
.cta {
  height: 50px;
  width: 150px;
  position: absolute;
  bottom: 20%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
button {
  height: 50px;
  width: 150px;
  float: right;
  cursor: pointer;
  background: none;
  border: 2px solid #fff;
  border-radius: 3px;
  color: white;
  font-weight: bolder;
  font-size: 16px;
  outline: none;
}
.btn {
  width: 0;
  height: 50px;
  background-color: #fbfbfb;
  transition: width 0.3s ease-in;
}
button:hover {
  color: #6d98a8;
  transition: color 0.3s ease-in;
}
.cta:hover .btn {
  width: 150px;
  background-color: #fff;
  color: #6d98a8;
}
//end of CTA button

@media (min-aspect-ratio: 16/9) {
  #videoBG {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  #videoBG {
    width: auto;
    height: 100%;
  }
}
@media screen and (max-width: 600px) {
  section {
    .left .right {
      max-width: 100%;
      padding: 1px;
      margin: 5px;
    }
  }
  main {
    height: 1300vh;
  }
  .img-wrapper {
    height: 487px;
  }
  .vision {
    font-size: 1em;
  }
}

/* @media (max-width: 767px) {
  #videoBG {
    display: none;
  }
  .project-hero {
    background: url(~assets/img/grad.jpg);
    background-size: cover;
  }
} */
</style>
