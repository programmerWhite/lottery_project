<template>
    <div class="buy-record-div">
      <div class="buy-record-head-div">合买记录</div>
      <div class="buy-record-content-div">
        <div class="buy-record-outer-div" v-if="recordData.length>0">
          <div class="buy-record-one-div" v-for="item in recordData">

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
    export default {
        name: "buy-record",
        data(){
          return {
            recordData:[]
          }
        },
        mounted:function () {
          this.recordData = [{
            date:"2018-06-12",
            lotteryName:"双色球",
            lotteryCode:"3#4#5#6#7#8_9",
            buyMoney:"15",
            lotteryStatus:"开奖中"
          }];
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
</style>
