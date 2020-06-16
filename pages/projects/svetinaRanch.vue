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
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eos
          soluta itaque, vero doloribus quia saepe ducimus quaerat illo?
          Molestiae itaque nam, ad exercitationem illo facere sunt unde
          cupiditate reprehenderit.
        </p>
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
  height: 100vh;
  p {
    max-width: 600px;
    margin: 1rem auto;
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
