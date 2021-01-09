<template>
  <div class="logo-container">
    <img
      class="jabka_logo"
      src="~assets/logo/jabka_logo.svg"
      alt="logo-jabka"
    />
  </div>
</template>

<style>
.logo-container {
  position: absolute;
  bottom: 0px;
  right: 10px; 
}
.jabka_logo {
  display: block;
  width: 25vw;
  margin: auto;
}

@media screen and (max-width: 680px) {
  .logo-container {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, +0%);
  width: 70%;
}
  .logo-text {
    font-size: 0.6em;
    padding: 8px;
  }
  .jabka_logo {
    display: block;
    width: 40vw;
  }
}
</style>
