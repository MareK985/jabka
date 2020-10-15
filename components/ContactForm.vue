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
        <div class="input-field">
          <label>Kako vam lahko pomagamo?</label>
          <select
            id="request"
            v-model="request"
            class="input"
            :class="{ error: !$v.request.$error }"
            name="request"
            type="text"
            placeholder="request"
            @blur="$v.request.$touch()"
            v-on="$listeners"
          >
            <option>Želim vzorec - gostinc</option>
            <option>Pošljite mi ponudbo</option>
            <option>Želim naročiti - končni kupec</option>
          </select>
        </div>
        <div class="input-field">
          <input
            id="contactNumber"
            v-model="contactNumber"
             class="input"
            :class="{ error: !$v.contactNumber.$error }"
            name="contactNumber"
            type="text"
            placeholder="vpišite vašo tel. številko"
            @blur="$v.contactNumber.$touch()"
            v-on="$listeners"
          >
          </input>
        </div>
        <div class="input-field">
          <input
            id="email"
            v-model="email"
            class="input"
            :class="{ error: !$v.email.$error }"
            name="email"
            type="email"
            placeholder="email"
            @blur="$v.email.$touch()"
            v-on="$listeners"
          />
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
          POŠLJI
        </button>
        <!-- <template v-if="$v.$anyError">
          <p class="errorMessage">
            {{ $t("errorForm") }}
          </p>
        </template> -->
        <template>
          <p v-if="isSubmitted" class="text-green-light successMessage">
            Hvala za poslano povpraševanje. Odgovor pričakujte v roku 24 ur.
          </p></template
        >
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
      request: "",
      contactNumber: "",
      email: "",
      submitting: false,
      isSubmitted: false,
      error: false,
    };
  },
  validations: {
    request: {
      required,
    },
    contactNumber: {
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

        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
        const json = JSON.stringify(data);

        const res = await axios.post("/api/contact", data);

        this.submitting = false;
        this.isSubmitted = true;

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
  background: rgba(20, 128, 77, 0.65);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
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
  text-transform: uppercase;
}
.select {
  padding: 20px 10px;
}

.control {
  text-align: left;
}

.input-field {
  margin-top: 10px;
  width: 90%;
  padding: 20px;
  margin-left: 5%;
  margin-right: 5%;
  align-content: center;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .contact-form {
    top: 50%;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 3px;
  }
  label {
    padding-left: 10px;
    font-size: 1em;
    font-weight: 300;
    text-align: left;
    line-height: 45px;
  }
  .select {
    margin-top: 5px;
  }
  .input-field {
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
  background: white;
  margin: 5px;
  font-size: 1em;
  padding: 5px;
  line-height: 100%;
}
.text-green-light {
  color: green;
}
.successMessage {
  background: white;
  margin: 5px;
  padding: 5px;
}
</style>
