import Vue from "vue";
import vueAnalytics from "vue-analytics";

const getGDPR = localStorage.getItem("GDPR:accepted");

if (typeof getGDPR !== "undefined" && getGDPR === "true") {
  Vue.use(vueAnalytics, {
    id: "UA-91239129-1", // ! Don't forget to add your own Analytics id (UA-91239129–1), you can use this one for testing.
    disabled: false,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true,
    },
  });
} else if (typeof getGDPR !== "undefined" && getGDPR === "false") {
  Vue.use(vueAnalytics, {
    id: "UA-91239129-1",
    disabled: true,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true,
    },
  });
}
