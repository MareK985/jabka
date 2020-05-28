import Vue from "vue";
import vueAnalytics from "vue-analytics";
// import dotenv from "dotenv";
// dotenv.config();

const getGDPR = localStorage.getItem("GDPR:accepted");

if (typeof getGDPR !== "undefined" && getGDPR === "true") {
  Vue.use(vueAnalytics, {
    id: "UA-37341633-3", // process.env.Tracking_ID,
    disabled: false,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true,
    },
  });
} else if (typeof getGDPR !== "undefined" && getGDPR === "false") {
  Vue.use(vueAnalytics, {
    id: "UA-37341633-3", // process.env.Tracking_ID,
    disabled: true,
    debug: {
      enabled: true,
      trace: true,
      sendHitTask: true,
    },
  });
}
