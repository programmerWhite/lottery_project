<template>
  <div class="home-page-all">
    <home-head></home-head>

    <menu-lottery-name :menuData="lotteryName"></menu-lottery-name>
    <double-colour-ball :lotteryData="doubleColorData"></double-colour-ball>
    <double-colour-ball :lotteryData="greatLottoData"></double-colour-ball>
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
    import menuLotteryName from "../common/menuLotteryName.vue"
    import store from "./store"

    export default {
        name: "homePage",
        store,
        components:{homeHead,doubleColourBall,buyControl,dialogComponent,menuLotteryName},
        data () {
          return {
            doubleColorData:{
              dataType:"doubleColorBall",
              lotteryId:1,
              imgLabel:"assets/doubleColorBall.png",
              nextTimeNum:18071169,
              lastTimeNum:18071168,
              lastAllBuyMoney:"100",
              peopleAllNum:25,
              moneyAllWin:123700,
              lastTimeLotteryBall:"3#7#8#10#12#23_3",
              countTime:"5#23#1"
            },
            greatLottoData:{
              lotteryId:2,
              dataType:"greatLotteryBall",
              imgLabel:"assets/greatLotto.png",
              nextTimeNum:18071167,
              lastTimeNum:18071166,
              lastAllBuyMoney:"88",
              peopleAllNum:12,
              moneyAllWin:3780,
              lastTimeLotteryBall:"1#4#6#14#28_1#12",
              countTime:"3#13#5"
            },
            lotteryName:[
              {
                  name:"双色球",
                  id:"1"
              },
              {
                  name:"大乐透",
                  id:"2"
              }
            ]
          };
        },
      created:function () {
        this.$store.state.other.lotteryBallId = this.doubleColorData.lotteryId;
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
