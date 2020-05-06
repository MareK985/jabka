<template>
  <div>
    <h1>TEST</h1>
    <Fas i="envelope" />
    <Fab i="facebook" />
  </div>
</template>

<script>
import Fas from "~/components/Fas.vue";
import Fab from "~/components/Fab.vue";

export default {
  components: {
    Fas,
    Fab
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 10em;
}
</style>
