<template>
    <div class="buy-control-div">
      <div class="ideal-container-div">
        <div class="ideal-label-div">添加你的理想号码：</div>
        <div class="had-number-div">
          <div class="had-number-line-div" v-for="(number,index) in hadAddNum">
            <lottery-code  :lotteryCode="number" @addNumber="addNumber"></lottery-code>
            <div class="delete-line" :indexNum="index">X</div>
          </div>
        </div>
        <div class="ideal-number-control-div">
          <add-lottery @addNum="addNumber"></add-lottery>
        </div>
      </div>
    </div>
</template>

<script>
    import addLottery from "../common/addLottery"
    import lotteryCode from "../common/lotteryCode"

    export default {
        name: "buyControl",
      components:{addLottery,lotteryCode},
      data(){
          return{
            hadAddNum:["1#4#6#14#25#23_5"]
          }
      },
      methods:{
          addNumber:function (numberArray) {
            console.log(numberArray)
          }
      }
    }
</script>

<style scoped>
  .ideal-label-div{
    color: #999999;
  }
  .had-number-div{
    padding: 20px 0;
  }
  .had-number-line-div{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .delete-line{
    cursor: pointer;
    color: white;
    margin-left: 20px;
  }
</style>
