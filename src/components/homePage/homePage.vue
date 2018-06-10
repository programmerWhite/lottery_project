<template>
  <div class="home-page-all">
    <home-head></home-head>
    <div class="lottery-current-div">
      <double-colour-ball></double-colour-ball>
    </div>
  </div>
</template>

<script>
    import homeHead from "../common/homeHead.vue"
    import doubleColourBall from "./doubleColourBall"

    export default {
        name: "homePage",
        components:{homeHead,doubleColourBall}
    }

</script>

<style scoped>
  .lottery-current-div{
    padding: 20px;
    box-sizing: border-box;
    height: 140px;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #2c2c2c;
  }
</style>
