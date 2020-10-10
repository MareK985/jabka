<template>
      <div class="box-area">
        <div class="single-box" data-aos="zoom-in">
          <div class="img-area"></div>
          <div class="img-text">
            <span class="header-text">LOKALNO ZGODBO</span>
            <ul>
              <li>Okolica Šmartinskega jezera</li>
            </ul>
          </div>
        </div>
        <div class="single-box" data-aos="zoom-in">
          <div class="img-area"></div>
          <div class="img-text">
            <span class="header-text">PREMIUM KAKOVOST</span>
            <ul>
              <li>Vrhunska tehnologija stiskanja z več kot 50-letno tradicijo</li>
              <li>Ekološka pridelava jabolk</li>

            </ul>
          </div>
        </div>
        <div class="single-box" data-aos="zoom-in">
          <div class="img-area"></div>
          <div class="img-text">
            <span style="padding-right: 1.5em;" class="header-text">FUNKCIONALNOST</span>
            <ul>
              <li>Naravna vsebnost vitaminov in mineralov.</li>
              <li>Vir naravnih vlaknine za zdravo črevesno mikrobioto in holesterol.</li>
            </ul>
          </div>
        </div>
      </div>
</template>

<style scoped>
.img-area {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  /* border: 6px solid #ddd; */
  border-radius: 50%;
  margin-bottom: 10px;
  padding: 20px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
}
.img-text {
  color: white;
}
.img-text p {
  color: white;
}
.header-text {
  color: white;
  font-size: 2em;
}
.single-box:nth-child(1) .img-area {
  background-image: url('~assets/img/jabka_1l_500x500px.jpg');
}
.single-box:nth-child(2) .img-area {
  background-image: url('~assets/img/jabka_1l_500x500px.jpg');
}
.single-box:nth-child(3) .img-area {
  background-image: url('~assets/img/jabka_1l_500x500px.jpg');
}

@media screen and (max-width: 600px) {
  .single-box {
    padding: 0;
    margin-bottom: 100px;
  }
  .img-area {
    justify-items: center !important;
  }
}
@media (min-width: 601px) {
  .box-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  .single-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    border-radius: 4px;
    border-color: #444;
    text-align: center;
    margin: 30px;
    padding: 20px;
    transition: 0.3s;
  }
  .header-text {
    font-size: 3.2vh;
    font-weight: 600;
    line-height: 48px;
  }
  .img-text {
    padding-top: 20px;
    text-align: center;
  }
  .img-text p {
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
  }
}
</style>