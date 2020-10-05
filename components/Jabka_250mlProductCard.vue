<template>
  <div class="wrapper">
    <div class="container">
      <div class="imgBx">
        <img src="~/assets/img/jabka_1l_500x500px.jpg">
      </div>
      <div class="details">
        <div class="content">
          <h2>Jabka sok <br/> <span>250 ml</span> </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure tenetur dolorum velit quae animi fugit at nemo odio, magni accusantium blanditiis, ullam voluptatibus possimus deleniti, id optio veniam! Provident!</p>
          <button>Naroči</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './../static/fonts/stylesheet.css';
@import './../css/style.css';

.wrapper {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background: lightgray; */
}
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 600px;
  height: 600px;
  background: #fff;
}
.container .imgBx img {
  position: relative;
  width: 100%;
}
.container .details {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
}

.container .details h2 {
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  line-height: 0.8em;
  color: #231f20;
}
.container .details h2 span {
  font-size: 1.4rem;
  line-height: 0.8em;
  color: #231f20;
  letter-spacing: 2px;
}
.container .details p {
  /* max-width: 85%;
  margin-left: 15%; */
  margin-top: 10%;
  text-align: justify;
  color: #231f20;
  font-size: 1.4rem;
}
.container .details button {
  background: green;
  color: white;
  border: none;
  box-shadow: none;
  outline: none;
  padding: 15px 20px;
  margin-top: 5px;
  margin-left: 20px;
  font-size: 1.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 30px;
  float: left;
  cursor: pointer;
}

@media (max-width: 1080px) {
  .container {
    height: auto;
  }
  .container .imgBx {
    padding: 40px;
    box-sizing: border-box;
    width: 100% !important;
    height: auto;
    text-align: center;
    overflow: hidden;
  }
  .container .imgBx img {
    left: initial;
    max-width: 100%;
  }
  .container .details {
    width: 100% !important;
    height: auto;
    padding: 40px;
  }
}
</style>
