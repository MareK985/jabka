import Vue from "vue";
import mediumZoom from "medium-zoom";

const initZoom = () => {
  mediumZoom("img.zoom:not(.medium-zoom-image)");
};

// mediumZoom("img.zoom-dark", {
//   background: "#000",
// });

Vue.mixin({
  mounted() {
    initZoom();
  },
  updated() {
    initZoom();
  },
});
