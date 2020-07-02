<template>
  <div class="container">
    <div class="card-container" data-aos="fade">
      <div class="card">
        <figure class="front">
          <p style="margin-bottom: 0.5em; font-weight: 400;">OBJECTIVE #1</p>
          <span style="font-size: 4em; color: white;">
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']" />
          </span>
          <p style="font-size: 2em; text-align: center;">bussiness viability</p>
        </figure>
        <figure class="back">
          <p style="margin-bottom: 2em;">Key Results</p>
          <ol
            style="margin-left: 2em; margin-right: 1em; margin-top: -2em; line-height: 2em;"
          >
            <li>
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']" /> profit
              by <strong style="font-size: 1.5em; color: white;">10%</strong>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']" /> average
              purchase value by
              <strong style="font-size: 1.5em; color: white;"
                >10 EUR/day</strong
              >
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']" /> No. of
              operating units by
              <strong style="font-size: 1.5em; color: white;">20%</strong>
            </li>
          </ol>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 4em;
}
.card-container {
  width: 250px;
  height: 350px;
}
.card {
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
}
.card-container:hover .card {
  transform: rotateY(180deg);
}
.card figure {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card .front {
  background: rgb(69, 70, 85);
  color: white;
  text-align: center;
}
.card .back {
  background: #363f3f;
  color: white;
  transform: rotateY(180deg);
}
</style>
