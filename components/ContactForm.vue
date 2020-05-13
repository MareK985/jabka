<template>
  <div>
    <form
      class="contact-form"
      action="MAILTO:krajnc.mare@gmail.com"
      method="post"
      enctype="text/plain"
    >
      <div class="control">
        <label>prihod</label>
        <div class="select">
          <input
            class="input"
            name="zeljen prihod:"
            type="date"
            placeholder="prihod"
          />
        </div>
        <label>odhod</label>
        <div class="select">
          <input
            class="input"
            name="zeljen odhod:"
            type="date"
            placeholder="odhod"
          />
        </div>
        <label>odrasli</label>
        <div class="select">
          <select name="st.odraslih" type="text" placeholder="odrasli">
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
        <label>otroci</label>
        <div class="select">
          <select name="st.otrok" type="text" placeholder="otroci">
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
        <div class="email-field">
          <input
            class="input"
            name="email"
            type="email"
            placeholder="vpišite svoj email naslov"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          value="Send"
          class="button is-focused cta-button"
          style="background: #6D98A8; color:white;"
        >
          REZERVIRAJ !
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
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
