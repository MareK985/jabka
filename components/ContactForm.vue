<template>
  <div class="containerForm">
    <div
      data-aos="fade-zoom-in"
      data-aos-duration="2000"
      class="contactForm-title"
    >
      Feel free to ask any questions via contact form or email below.
    </div>
    <div id="progress" :style="{ width: progress }"></div>
    <h3 :class="{ 'show-final': showFinal }">
      Thank you for your inquiy
      {{ registerSteps[1].value }}. We will come back to you ASAP.
    </h3>
    <div id="register">
      <i v-if="position === 1" class="iconButton fas fa-user"></i>
      <i v-if="position === 2" class="iconButton fas fa-building"></i>
      <i v-if="position === 3" class="iconButton fas fa-envelope"></i>

      <i
        v-else
        class="previousButton fas fa-arrow-left"
        @click="previousStep"
      ></i>
      <i class="forwardButton fas fa-arrow-right" @click="checkStep"></i>
      <div id="inputContainer" :class="{ showContainer: showContainer }">
        <form @submit.prevent="checkStep">
          <input
            id="inputField"
            ref="registerinput"
            v-model="inputValue"
            :type="inputType"
            required
          />
          <label id="inputLabel">{{ inputLabel }}</label>
        </form>
        <div id="inputProgress"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { setTimeout } from 'timers';

export default {
  data: () => {
    return {
      position: 0,
      inputLabel: "",
      inputType: "text",
      inputValue: "",
      showContainer: false,
      showFinal: false,
      progress: "0%",
      registerSteps: [
        {
          label: "What do you need?",
          type: "text",
          value: "",
          pattern: /.+/,
        },
        {
          label: "What's your name?",
          type: "text",
          value: "",
          pattern: /.+/,
        },
        {
          label: "What's your company name?",
          type: "text",
          value: "",
          pattern: /.+/,
        },
        {
          label: "What's your email?",
          type: "text",
          value: "",
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
      ],
    };
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const register = document.getElementById("register");
    this.setStep();
  },
  methods: {
    setStep() {
      this.inputLabel = this.registerSteps[this.position].label;
      this.inputType = this.registerSteps[this.position].type;
      this.inputValue = this.registerSteps[this.position].value;
      this.$refs.registerinput.focus();
      this.showStep();
    },
    showStep() {
      setTimeout(() => {
        this.showContainer = true;
      }, 100);
    },
    hideStep(callback) {
      this.showContainer = false;
      setTimeout(callback, 100);
    },
    previousStep() {
      this.position -= 1;
      // eslint-disable-next-line no-undef
      register.className = "";
      this.hideStep(this.setStep);
      this.setProgress();
    },
    checkStep() {
      if (!this.registerSteps[this.position].pattern.test(this.inputValue)) {
        // eslint-disable-next-line no-undef
        register.classList.add("wrong");
        // eslint-disable-next-line no-undef
        register.classList.add("wronganimation");
        setTimeout(() => {
          // eslint-disable-next-line no-undef
          register.classList.remove("wronganimation");
        }, 500);
        this.$refs.registerinput.focus();
      } else {
        // eslint-disable-next-line no-undef
        register.className = "";
        // eslint-disable-next-line no-undef
        register.classList.add("okanimation");
        setTimeout(() => {
          // eslint-disable-next-line no-undef
          register.classList.remove("okanimation");
        }, 200);
        this.registerSteps[this.position].value = this.inputValue;
        this.position += 1;
        if (this.registerSteps[this.position]) {
          this.hideStep(this.setStep);
        } else {
          this.hideStep(() => {
            // eslint-disable-next-line no-undef
            register.className = "close";
            setTimeout(() => {
              this.showFinal = true;
            }, 1000);
          });
        }
      }
      this.setProgress();
    },
    setProgress() {
      this.progress = (this.position / this.registerSteps.length) * 100 + "%";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

.containerForm {
  position: relative;
  font-size: 1rem;
  color: #333;
  bottom: 0;
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#1b1e25, #1b1e25);
  #progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 50vh;
    background-color: #106b4e;
    transition: width 0.8s ease-in-out;
  }
}
h3 {
  position: absolute;
  width: 80%;
  font-size: 1.5em;
  color: #1b1e25;
  opacity: 0;
  transition: 0.8s ease-in-out;
  &.show-final {
    opacity: 1;
  }
}
#register {
  position: relative;
  width: 480px;
  margin-top: 3em;
  height: 80px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  &.close {
    width: 0;
    padding: 10px 0;
    overflow: hidden;
    transition: 0.8s ease-in-out;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.2);
  }
}
.previousButton {
  position: absolute;
  left: 10px;
  top: 12px;
  font-size: 1rem;
  color: #9e9e9e;
  cursor: pointer;
  z-index: 20;
  &:hover {
    color: #9bc5c3;
  }
}
.iconButton {
  position: absolute;
  left: 50px;
  top: 12px;
  font-size: 1rem;
  color: #9e9e9e;
  z-index: 20;
  &:hover {
    color: #9bc5c3;
  }
}
.forwardButton {
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 3rem;
  color: #708d8e; /*#556A6D */
  cursor: pointer;
  z-index: 20;
  &:hover {
    color: #9bc5c3;
  }
}
.wrong .forwardButton {
  color: #d93f38;
}
.close .forwardButton,
.close .previousButton {
  color: #fff;
}
#inputContainer {
  position: relative;
  padding: 30px 20px 20px 20px;
  margin-right: 60px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  input {
    position: relative;
    width: 100%;
    font-size: 1.35rem;
    font-weight: bold;
    outline: 0;
    background: transparent;
    box-shadow: none;
    border: none;
    &:valid + #inputLabel {
      top: 0px;
      left: 62px;
      font-size: 0.7rem;
      font-weight: normal;
      color: #999;
    }
  }
}
#inputLabel {
  position: absolute;
  top: 32px;
  left: 20px;
  font-size: 1.05rem;
  font-weight: bold;
  pointer-events: none;
  transition: 0.2s ease-in-out;
}
#inputProgress {
  width: 0%;
  border-bottom: 6px solid #708d8e;
  transition: width 0.6s ease-in-out;
}
.wrong #inputProgress {
  border-color: #d93f38;
}
.showContainer {
  opacity: 1 !important;
  #inputProgress {
    width: 100%;
  }
}
.wronganimation {
  animation: 0.5s linear 0s 1 wrong-animation;
}
.okanimation {
  animation: 0.2s linear 0s 1 ok-animation;
}
.contactForm-title {
  color: white;
  position: absolute;
  font-size: 2em;
  z-index: 100;
  top: 30px;
  line-height: 1em;
  margin-bottom: 2em;
}

@keyframes wrong-animation {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-20px);
  }
  40% {
    transform: translateX(20px);
  }
  60% {
    transform: translateX(-20px);
  }
  80% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes ok-animation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
