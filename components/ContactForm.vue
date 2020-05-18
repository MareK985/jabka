<template>
  <div>
    <form
      id="contact-form"
      class="contact-form"
      action="/api/contact"
      method="post"
      enctype="text/plain"
      @submit.prevent="submit"
    >
      <div class="control">
        <label for="prihod">prihod</label>
        <div class="select">
          <input
            id="prihod"
            v-model="prihod"
            class="input"
            :class="{ error: !$v.prihod.$error }"
            name="prihod"
            type="date"
            placeholder="prihod"
            @blur="$v.prihod.$touch()"
            v-on="$listeners"
          />
        </div>
        <label for="odhod">odhod</label>
        <div class="select">
          <input
            id="odhod"
            v-model="odhod"
            :class="{ error: !$v.odhod.$error }"
            class="input"
            name="odhod"
            type="date"
            placeholder="odhod"
            @blur="$v.odhod.$touch()"
            v-on="$listeners"
          />
        </div>
        <label for="odrasli">odrasli</label>
        <div class="select">
          <select
            id="odrasli"
            v-model="odrasli"
            :class="{ error: !$v.odrasli.$error }"
            name="odrasli"
            type="text"
            placeholder="odrasli"
            @blur="$v.odrasli.$touch()"
            v-on="$listeners"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <label for="otroci">otroci</label>
        <div class="select">
          <select
            id="otroci"
            v-model="otroci"
            :class="{ error: !$v.otroci.$error }"
            name="otroci"
            type="text"
            placeholder="otroci"
            @blur="$v.otroci.$touch()"
            v-on="$listeners"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
        <div class="email-field">
          <input
            id="email"
            v-model="email"
            class="input"
            :class="{ error: !$v.email.$error }"
            name="email"
            type="email"
            placeholder="vpišite svoj email naslov"
            @blur="$v.email.$touch()"
            v-on="$listeners"
          />
          <template v-if="!$v.email.$error">
            <p v-if="!$v.email.email" class="errorMessage">
              Prosim vpišite veljaven e-naslov.
            </p>
            <p v-if="!$v.email.required" class="errorMessage">
              Prosim vpišite vaš e-naslov.
            </p>
          </template>
          <template v-if="!$v.prihod.$error">
            <p v-if="!$v.prihod.required" class="errorMessage">
              Prosim določite željen datum prihoda.
            </p>
          </template>
          <template v-if="!$v.odhod.$error">
            <p v-if="!$v.odhod.required" class="errorMessage">
              Prosim določite željen datum odhoda.
            </p>
          </template>
          <template v-if="!$v.odrasli.$error">
            <p v-if="!$v.odrasli.required" class="errorMessage">
              Prosim določite število odrasli oseb.
            </p>
          </template>
          <template v-if="!$v.otroci.$error">
            <p v-if="!$v.otroci.required" class="errorMessage">
              Prosim določite število otrok (starih do 8.let).
            </p>
          </template>
        </div>
      </div>

      <div>
        <button
          id="button-submit"
          :disabled="$v.$invalid"
          type="submit"
          value="Send"
          class="button is-focused cta-button"
          style="background: #6D98A8; color:white;"
          @click="onSubmit"
        >
          REZERVIRAJ !
        </button>
        <p v-if="$v.$anyError" class="errorMessage">
          Prosim izpolnite vsa polja
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      prihod: null,
      odhod: null,
      odrasli: null,
      otroci: null,
      email: null,
    };
  },
  validations: {
    prihod: {
      required,
    },
    odhod: {
      required,
    },
    odrasli: {
      required,
    },
    otroci: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // console.log("form submitted:", this.email);
      }
    },
    async onSubmit(event) {
      event.preventDefault();

      try {
        const form = document.getElementById("contact-form");
        const formData = new FormData(form);

        const res = await axios.post("/api/contact", formData);

        // console.log(res.data.message);
      } catch (error) {
        // handle error

        alert(error);
      }
    },
  },
};
</script>

<style>
.contact-form {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  color: white;
  justify-content: center;
  padding: 20px 0px 20px 0px;
  text-align: center;
  top: 70%;
}
.cta-button {
  margin: 20px 20px 5px 20px;
  font-size: 1.2em;
  letter-spacing: 0.2em;
  font-weight: 500;
  border: none;
  box-shadow: 7px 4px 23px -4px rgba(0, 0, 0, 0.75);
}
.select {
  padding: 0px 5px;
}

label {
  padding-left: 5px;
  font-size: 2em;
  font-weight: 100;
  text-align: center;
  vertical-align: middle;
  line-height: 35px;
}
.email-field {
  margin-top: 10px;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  align-content: center;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .contact-form {
    top: 55%;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 3px;
  }
  label {
    padding-left: 10px;
    font-size: 1em;
    font-weight: 100;
    line-height: 55px;
  }
  .select {
    margin-top: 5px;
  }
  .email-field {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  }
}

@media (min-width: 601px) {
  .contact-form {
    top: 60%;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  .select {
    margin-top: 15px;
  }
  label {
    padding-left: 8px;
    font-size: 1.1em;
    font-weight: 100;
    line-height: 55px;
  }
}
@media (min-width: 1200px) {
  .contact-form {
    top: 60%;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  .select {
    margin-top: 15px;
  }
  label {
    padding-left: 8px;
    font-size: 1.5em;
    font-weight: 100;
    line-height: 55px;
  }
}

.errorMessage {
  color: red;
  border-color: red;
  margin: 0;
  font-size: 1em;
  padding: 0;
  line-height: 100%;
}
</style>
