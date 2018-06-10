<template>
    <div class="double-color-ball-div">
      <div class="dcb-img-div">
        <img src="../../assets/doubleColorBall.png" />
      </div>
      <div class="dcb-next-time-div">
        <div class="dcb-next-time-text">第 <span>{{nextTimeNum}}</span> 期</div>
        <div class="dcb-next-time-label">投注截止</div>
        <div class="dct-count-down-div">
          <count-down countTime="5#23#1"></count-down>
        </div>
      </div>
      <div class="last-time-code">
        <div class="dcb-last-time-text">上一期（<span>{{lastTimeNum}}</span>）</div>
        <div>
          <lottery-code lotteryCode="1#4#6#14#28#33_1"></lottery-code>
        </div>
      </div>
    </div>
</template>

<script>

    import countDown from "../common/countDown"
    import lotteryCode from "../common/lotteryCode"

    export default {
        name: "doubleColourBall",
      components:{
        countDown,
        lotteryCode
      },
      data(){
          return{
            nextTimeNum:18071169,
            lastTimeNum:18071168
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
    margin-left: 20px;
    margin-top: 10px;
    border-left: 1px dashed #999999;
    height: 80px;
    padding-left: 20px;
  }
  .dcb-last-time-text{
    color: #999999;
    font-size: 14px;
  }
</style>
