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
        <ul>
          <li class="fields">
            Oblikovanje uporabniške izkušnje <br />(UX design)
          </li>
          <li class="fields">Razvoj spletne strani</li>
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
                40-70% mednarodnih potovanj. Poudarek na letu 2020 je
                <strong>domači turizem</strong>. Dolgo bomo morali upoštevati
                pravila socialne distanciranja, dokler ne bo na voljo cepiva
                proti koronavirusu. Vendar je težko napovedati, ali bodo ljudje
                potovali povsem enako kot prej. Trenutna razprava v panogi je
                bolj v smeri <strong>kakovostno naravnanega turizma</strong>.
              </p>
            </div>
            <div class="right">
              <h3>
                NALOGA #1: Privabiti nove goste. <br /><br />MERILO USPEHA: več
                kot 50% zasedenost do konca leta 2020.
              </h3>
            </div>
          </div>
        </section>
        <!--ENF OF section 1 -->
        <hr />
        <!--section 2 -->
        <section>
          <div class="section-title">Analiza okolja</div>
          <div class="container">
            <h3>KONKURENCA</h3>
            <div class="left">
              <p>
                Oddaljeni, a dostopni kraji bodo hitreje okrevali v primerjavi z
                turističnimi, prenatrpanimi destinacijami. V iskanju zasebnosti
                se pričakuje porast povpraševanja po najemu zasebnih hiš, vil,
                kampov in obisk majhnih butičnih hotelov. (<a
                  href="https://www.total-croatia-news.com/travel/42462-post-coronavirus-travel"
                  target="_blank"
                  >source</a
                >).
              </p>

              <ul>
                <li>http://www.najemikoco.si/ (Goričko) – personal page</li>
                <li>https://www.glamping.si/</li>
                <li>https://najem-koce.si/sl/ – platform</li>
              </ul>
            </div>
            <div class="right">
              <h3>UGOTOVITVE</h3>
              <ul>
                <li>+ big selection</li>
                <li>+ easy search based on location</li>
                <li>+ newsletter – get better deals</li>
                <li>
                  - individual promotion through social media is not so
                  effective
                </li>
                <li>
                  - poor integration with local providers of different
                  experiences
                </li>
                <li>
                  -integration with other rental platform is not possible (real
                  time availability not possible)
                </li>
              </ul>
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
                <h3>GLAVNE ZAHTEVE / ŽELJE</h3>
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
              <img src="~assets/img/wireframe-lowfi.png" />
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
                <img id="theImg" src="~assets/img/iPhone_6.png" />
              </figure>
              High-fidelity wireframe (made in Adobe XD)
            </div>

            <div class="right">
              <h3>ZAHTEVANE FUNKCIONALNOSTI</h3>
              <ul>
                <li>Real-time calendar with availability</li>
                <li>Form for send reservation inquiry</li>
                <li>Mobile-first design</li>
                <li>Real-time price per day / no hidden costs</li>
                <li>Pricing tabel</li>
                <li>Image galery with video</li>
                <li>Short description with feature/service icons</li>
                <li>Form for sending reservation inquiry</li>
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
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos doloribus velit architecto, amet eaque id earum
                autem iure, dolorem cum ipsa possimus quae nulla sint natus?
                Exercitationem nulla obcaecati amet?
              </p>
            </div>
            <div class="right">
              <h3>OKOLJE</h3>
              <ul>
                <li>JS Ogrodje: Vue/Nuxt</li>
              </ul>
              <h3>KNJIŽNICE</h3>
              <ul>
                <li>AOS - animation on scroll</li>
                <li>ICONS - FontAwsome 5</li>
                <li>SLIDER - vue-slick-carousel</li>
                <li>GDPR - cookies for Nuxt</li>
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae, doloremque. Vero fuga corrupti non, blanditiis
                deserunt vitae assumenda earum ab corporis quos, tempora
                incidunt dolore placeat ipsa magnam, omnis delectus.
              </p>
            </div>
            <div class="right">
              <h3>UGOTOVITVE</h3>
              <ul>
                <li>potrebno omogočen direkt on-line booking</li>
              </ul>
            </div>
          </div>
        </section>
        <!--ENF OF section 6-->
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
  height: 1000vh;
  ul {
    font-size: 3vh;
    padding: 2em;
    max-width: 600px;
    margin: 1rem auto;
  }
  li {
    margin-bottom: 1em;
    line-height: 1em;
    text-align: left;
    list-style-type: square;
  }
  .fields {
    margin-bottom: 2em;
    line-height: 1.5em;
    text-align: left;
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
  p {
    text-align: justify;
  }
  h3 {
    font-size: 3.5vh;
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
