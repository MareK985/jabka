<template>
  <div class="logo-container">
    <div class="logo-text">Designed & <br/>Developed by:</div>
    <a href="http://mare-ux.com/" target="_ blank">
      <img
        class="mare-podpis"
        src="~assets/logo/mareUX-logo_W.svg"
        alt="mare-podpis"
    /></a>
  </div>
</template>

<style>
.logo-container {
  position: absolute;
  bottom: 0px;
  right: 10px;
}
.mare-podpis {
  display: block;
  width: 150px;
}
.logo-text {
  font-size: 0.7em;
  line-height: 1.3em;
  margin-bottom: -10px;
  color: white;
}

@media screen and (max-width: 680px) {
  .logo-container {
  left: 10px;
}

  .mare-podpis {
    width: 60px;
  }
  .logo-text {
    text-align: left;
    font-size: 0.5em;
    padding: 5px;
  }
}
</style>
