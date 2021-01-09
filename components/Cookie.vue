<template>
  <div v-if="isOpen" class="cookie">
    <div type="info" color="#6859de">
      <div class="gdpr-container">
        <div class="grow">
          <slot name="message">
            Piškotke uporabljamo za zagotavljanje svojih storitev ter za analitiko in trženje. Če želite izvedeti več o naši uporabi piškotkov, si oglejte našo izjavo o zasebnosti. Za najboljšo uporabniško izkušnjo pritisnite SPREJMI
            <nuxt-link
              class="cookie__link"
              to="/privacyPolicy"
              target="_blank"
              >Izjavo o zasebnosti</nuxt-link
            >. Za najboljšo uporabniško izkušnjo pritisnite SPREJMI
          </slot>
        </div>
        <div>
          <button class="ma-2" @click="accept">SPREJMEM</button>
          <button class="ma-2" text @click="deny">NE SPREJMEM</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookieMessage",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Accept",
    },
    buttonTextDeny: {
      type: String,
      default: "Deny",
    },
    message: {
      type: String,
      default:
        "We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies.",
    },
    position: {
      type: String,
      default: "top",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`;
    },
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", true);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", false);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.cookie {
  width: 100%;
  z-index: 1;
  position: fixed;
  bottom: 0;
  color: white;
}

.gdpr-container {
  background: #6d98a8;
  position: flex;
  padding: 5px;
  text-align: center;
  align-content: center;
}
.cookie__link {
  color: #ffffff;
  text-decoration: underline;
  transition: all 0.25s;
}

.cookie__link:hover {
  text-decoration: none;
  color: green;
}
.grow {
  font-size: 1em;
}
.ma-2 {
  margin-left: 30px;
}

@media screen and (max-width: 680px) {
  .grow {
    font-size: 0.7em;
    text-align: justify;
    margin-right: 20px;
    line-height: 2em;
  }
  .ma-2 {
    margin-left: 50px;
  }
}
</style>
