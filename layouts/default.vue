<template>
  <div>
    <nuxt style="overflow-x: hidden; overflow-y: hidden;" />
    <client-only>
      <!-- <Cookie /> -->
    </client-only>
    <CallButton />
  </div>
</template>

<script>
// import Cookie from "@/components/Cookie.vue";
import CallButton from "@/components/CallButton.vue";

export default {
  components: {
  // Cookie,
  CallButton
  },
};
</script>

<style>
html {
  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
