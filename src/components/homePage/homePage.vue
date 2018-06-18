<template>
  <div class="home-page-all">
    <home-head></home-head>
    <div class="lottery-current-div">
      <double-colour-ball :lotteryData="doubleColorData"></double-colour-ball>
    </div>
    <div class="lottery-current-div">
      <double-colour-ball :lotteryData="greatLottoData"></double-colour-ball>
    </div>
    <div class="buy-together-center-div">
      <buy-control></buy-control>
    </div>
    <dialog-component></dialog-component>
  </div>
</template>

<script>

    import homeHead from "../common/homeHead.vue"
    import doubleColourBall from "./doubleColourBall"
    import buyControl from "./buyControl"
    import dialogComponent from "../common/dialogComponent.vue"
    import store from "./store"
    import  "require"

    export default {
        name: "homePage",
        store,
        components:{homeHead,doubleColourBall,buyControl,dialogComponent},
        data () {
          return {
            doubleColorData:{
              imgLabel:require("@/assets/doubleColor.png"),
            },
            greatLottoData:{
              imgLabel:require("@/assets/greatLotto.png"),
            }
          };
        }
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
  .buy-together-center-div{
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #2c2c2c;
  }
</style>
