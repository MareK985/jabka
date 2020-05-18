<template>
  <div>
    <form
      id="contact-form"
      class="contact-form"
      action="/api/contact"
      method="post"
      enctype="text/plain"
    >
      <div class="control">
        <label for="prihod">prihod</label>
        <div class="select">
          <input
            id="prihod"
            class="input"
            name="prihod"
            type="date"
            placeholder="prihod"
          />
        </div>
        <label for="odhod">odhod</label>
        <div class="select">
          <input
            id="odhod"
            class="input"
            name="odhod"
            type="date"
            placeholder="odhod"
          />
        </div>
        <label for="odrasli">odrasli</label>
        <div class="select">
          <select id="odrasli" name="odrasli" type="text" placeholder="odrasli">
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
          <select id="otroci" name="otroci" type="text" placeholder="otroci">
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
            class="input"
            name="email"
            type="email"
            placeholder="vpišite svoj email naslov"
          />
        </div>
      </div>

      <div>
        <button
          id="button-submit"
          type="submit"
          value="Send"
          class="button is-focused cta-button"
          style="background: #6D98A8; color:white;"
          @click="onSubmit"
        >
          REZERVIRAJ !
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prihod: "",
      odhod: "",
      odrasli: "",
      otroci: "",
      email: "",
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      alert("test");
      try {
        const form = document.getElementById("contact-form");
        const formData = new FormData(form);

        const res = await axios.post("/api/contact", formData);

        console.log(res.data.message);
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
</style>
