<template>
  <div>
    <a class="btn-fold-1" href="projects/svetinaRanch">
      <span>VEČ O </span><span>PROJEKTU</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$timing: 0.4s;
$blue: #0079c2;
$yellow: #fae900;

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.btn-fold-1 {
  position: relative;
  display: inline-block;
  width: 28rem;
  z-index: 1;
  text-decoration: none;
  font-size: 2rem;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transform-style: preserve-3d;
  perspective: 800px;
  perspective-origin: 50% 200%;
  transform: translateX(-25%) translateZ(0);
  transition: transform ($timing * 2);

  span {
    position: relative;
    display: block;
    width: 50%;
    float: left;
    padding-top: 1rem;
    padding-bottom: 0.7rem;
    text-align: right;

    &:last-child {
      z-index: 2;
      padding-right: 1rem;
      padding-left: 0.6rem;
      text-align: left;
      background-color: $yellow;
    }

    &:first-child {
      z-index: 3;
      padding-right: 0.6rem;
      padding-left: 1rem;
      pointer-events: none;
      background-color: $yellow;
      backface-visibility: visible;
      transform-origin: 100% 50%;
      transform: rotateY(179.9deg);
      transition: transform $timing ease-in-out;

      &:before {
        content: "VEČ..";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding-top: 1rem;
        z-index: 4;
        color: white;
        text-align: center;
        background-color: $blue;
        transform: rotateY(180deg);
        transition: color 0s ($timing / 2), background-color 0s ($timing / 2);
        transition-timing-function: ease-in-out;
      }
    }
  }
  &:hover {
    transform: translateX(0) translateZ(0);
  }
  &:hover > span:first-child {
    transform: rotateY(0);
  }
  &:hover > span:first-child:before {
    color: transparent;
    background-color: transparent;
  }
}
</style>
