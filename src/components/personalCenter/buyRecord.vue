<template>
    <div class="buy-record-div">
      <div class="buy-record-head-div">合买记录</div>
      <div class="buy-record-content-div">
        <div class="buy-record-outer-div" v-if="recordData.length>0">
          <div class="buy-record-one-div" v-for="item in recordData">
            <div class="buy-record-inner-div">
              <span>{{item.lotteryName}}</span>
              <span class="margin-left-20">第 {{item.lotteryTimes}} 期</span>
              <span class="margin-left-20 r-buy-date">{{item.date}}</span>
              <span class="margin-left-20 r-buy-date">参加金额：{{item.buyMoney}} 元</span>
              <span class="margin-left-20 red-color">状态：{{item.lotteryStatus}}</span>
            </div>
            <div class="buy-record-inner-div">

              <lottery-code :lotteryCode="item.lotteryCode"></lottery-code>
            </div>
          </div>
        </div>
        <div class="buy-record-empty-div" v-else>
          你还没有任何合买记录。
          <span><router-link to="/">前去参加合买</router-link></span>
        </div>
      </div>
    </div>
</template>

<script>
    import lotteryCode from "../common/lotteryCode.vue"

    export default {
        name: "buy-record",
        components:{lotteryCode},
        data(){
          return {
            recordData:[]
          }
        },
        mounted:function () {
          this.recordData = [
            {
              date:"2018-06-12",
              lotteryName:"双色球",
              lotteryCode:"3#4#5#6#7#8_9",
              buyMoney:"15",
              lotteryTimes:"201817023",
              lotteryStatus:"开奖中"
            },{
              date:"2018-06-21",
              lotteryName:"双色球",
              lotteryCode:"1#4#6#9#14#21_8",
              buyMoney:"10",
              lotteryTimes:"201817023",
              lotteryStatus:"分摊奖金 20 元"
            },{
              date:"2018-06-30",
              lotteryName:"大乐透",
              lotteryCode:"3#14#16#19#24_3#12",
              buyMoney:"20",
              lotteryTimes:"201817023",
              lotteryStatus:"分摊奖金 0 元"
            },{
              date:"2018-07-3",
              lotteryName:"大乐透",
              lotteryCode:"3#14#16#19#24_3#43",
              buyMoney:"10",
              lotteryTimes:"201817023",
              lotteryStatus:"分摊奖金 50 元"
            },
          ];
        }
    }
</script>

<style scoped>
  .buy-record-div{
    color: white;
    background-color: #2c2c2c;
  }
  .buy-record-head-div{
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #cccccc;
  }
  .buy-record-empty-div{
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  .buy-record-empty-div a{
    color:#cd181f;
    text-decoration: none;
  }
  .buy-record-inner-div{
    padding:10px 20px;
    box-sizing: border-box;
  }
  .margin-left-20{
    margin-left: 20px;
  }
  .r-buy-date{
    color: #cccccc;
    font-size: 14px;
  }
  .red-color{
    color: #cd181f;
  }
  .buy-record-one-div{
    padding: 10px 0;
  }
</style>
