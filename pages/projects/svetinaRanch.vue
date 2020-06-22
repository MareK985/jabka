<template>
  <div>
    <div class="project-hero">
      <video
        id="videoBG"
        autoplay
        loop
        muted
        playsinline
        poster="~assets/img/grad.jpg"
      >
        <source src="~assets/video/svetina_bg.mp4" type="video/mp4" />
      </video>
      <header class="viewport-header">
        <h1>
          project #1
          <span>Svetina Ranch</span>
        </h1>
      </header>
      <main>
        <ul>
          <li>Oblikovanje uporabniške izkušnje (UX design)</li>
          <li>Razvoj spletne strani (FE dev.)</li>
          <li>SEO optimizacija</li>
          <li>Priprava video vsebin in marketinške kampanje</li>
        </ul>
        <br />
        <br />
        <!--section 1 -->
        <section>
          <div class="section-title">Izziv / naloge</div>
          <div class="container">
            <div class="left">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
                quis nulla voluptas ad ipsam vero est? Minus sequi maxime hic
                error consectetur mollitia modi sed, fugiat aliquam recusandae
                ea.
              </p>
            </div>
            <div class="right">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
                quis nulla voluptas ad ipsam vero est? Minus sequi maxime hic
                error consectetur mollitia modi sed, fugiat aliquam recusandae
                ea.
              </p>
            </div>
          </div>
        </section>
        <!--ENF OF section 1 -->
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
  height: 200vh;
  ul {
    font-size: 3vh;
    padding: 2em;
    max-width: 600px;
    margin: 1rem auto;
  }
  li {
    margin-bottom: 2em;
    line-height: 1.5em;
    text-align: left;
  }
}
section {
  .section-title {
    font-size: 5vh;
    letter-spacing: 0.3em;
    text-align: center;
    margin: 0;
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
