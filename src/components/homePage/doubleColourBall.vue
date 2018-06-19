<template>
    <div class="double-color-ball-div" v-show="this.$store.state.other.lotteryBallId == this.lotteryData.lotteryId" >
      <div class="dcb-img-div">
        <img :src="imgLabel" />
      </div>
      <div class="dcb-next-time-div">
        <div class="dcb-next-time-text">第 <span>{{this.lotteryData.nextTimeNum}}</span> 期</div>
        <div class="dcb-next-time-label">投注截止</div>
        <div class="dct-count-down-div">
          <count-down :countTime="this.lotteryData.countTime"></count-down>
        </div>
      </div>
      <div class="last-time-code">
        <div class="dcb-last-time-text">上一期（<span>{{this.lotteryData.lastTimeNum}}</span>）</div>
        <div>
          <lottery-code :lotteryCode="this.lotteryData.lastTimeLotteryBall"></lottery-code>
        </div>
      </div>
      <div class="last-buy-together-div">
        <div class="last-buy-together-text-div">上期合买情况：</div>
        <div class="last-time-desc-div">
          <!--<lottery-code lotteryCode="1#4#6#14#28#33_1"></lottery-code>-->
          <!--<lottery-code lotteryCode="3#6#8#24#28#33_1"></lottery-code>-->
          <!--<lottery-code lotteryCode="1#8#12#18#28#33_3"></lottery-code>-->
          <div>总合买金额：<span>{{this.lotteryData.lastAllBuyMoney}}</span> 元</div>
          <div>总共中奖金额：<span>{{this.lotteryData.moneyAllWin}}</span> 元</div>
          <div class="">总共参与人数: <span>{{this.lotteryData.peopleAllNum}}</span> 人</div>
        </div>
      </div>
    </div>
</template>

<script>

    import countDown from "../common/countDown"
    import lotteryCode from "../common/lotteryCode"

    export default {
        name: "doubleColourBall",
      props:["lotteryData"],
      components:{
        countDown,
        lotteryCode
      },
      data(){
          return{

          }
      },
      computed:{
        imgLabel:function() {
          return require("../../"+this.lotteryData.imgLabel);
        }
      }
    }
</script>

<style scoped>

  .dcb-img-div img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .double-color-ball-div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    max-width: 1024px;
    margin:0 auto;
    background-color: #2c2c2c;
    padding: 20px 10px;
    margin-top: 10px;
    box-sizing: border-box;
  }
  .dcb-next-time-div{
    margin-left: 20px;
    text-align: center;
  }
  .dcb-next-time-text{
    color: #999999;
    margin-top: 10px;
  }
  .dcb-next-time-label{
    font-size: 14px;
    color: #999999;
    margin: 10px;
  }
  .last-time-code{
    margin-left: 30px;
    margin-top: 10px;
    border-left: 1px dashed #999999;
    height: 80px;
    padding-left: 30px;
    width: 300px;
  }
  .dcb-last-time-text{
    color: #999999;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .last-time-desc-div{
    color: #999999;
    font-size: 14px;
  }
  .last-buy-together-div{
    color: #999999;
    margin-left: 30px;
    border-left: 1px dashed #999999;
    padding-left: 30px;
    height: 90px;
  }
  .last-buy-together-div span{
    color: #cd181f;
  }
  .last-buy-together-text-div{
    margin-bottom: 10px;
  }
</style>
