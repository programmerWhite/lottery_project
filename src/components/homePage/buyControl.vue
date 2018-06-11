<template>
    <div class="buy-control-div">
      <div class="ideal-container-div">
        <div class="ideal-label-div">添加你的理想号码：</div>
        <div class="had-number-div">
          <div class="had-number-line-div" v-for="(number,index) in hadAddNum">
            <lottery-code  :lotteryCode="number" @addNumber="addNumber"></lottery-code>
            <div class="delete-line" :indexNum="index" @click="deleteArrayNum">X</div>
          </div>
        </div>
        <div class="ideal-number-control-div">
          <add-lottery @addNum="addNumber"></add-lottery>
        </div>
      </div>

      <div class="confirm-buy-div">
        <div class="confirm-content-div">
          <div class="together-label-text">合买金额：</div>
          <input class="together-input-div" type="text" v-model="bugNumber" placeholder="输入买入金额"/>
          <div class="confirm-label-text">确认买入金额：</div>
          <div class="confirm-money-number">{{bugNumber}} 元</div>
          <button class="confirm-buy-button">确认参与</button>
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
            hadAddNum:["3#4#5#6#7#8_9","3#4#5#6#7#8_9","3#4#5#6#7#8_9","3#4#5#6#7#8_9",],
            bugNumber:""
          }
      },
      methods:{
          addNumber:function (numberArray) {
            var tempNum = [];

            for(var i=0;i<numberArray.length-1;i++){
              if(tempNum.indexOf(numberArray[i]) == -1){
                tempNum.push(numberArray[i])
              }else{
                alert("不能有重复的数字");
                return false;
              }
            }

            var arrayString = tempNum.join("#")+"_"+numberArray[numberArray.length-1];

            if(this.hadAddNum.length == 5){
              alert("每次最多添加五组数据");
              return false;
            }
            this.hadAddNum.push(arrayString)
          },
          deleteArrayNum:function (e) {
              var index = e.target.getAttribute("indexNum");
              this.hadAddNum.splice(index,1);
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
    margin-bottom: 10px;
  }
  .delete-line{
    cursor: pointer;
    color: white;
    margin-left: 20px;
  }
  .ideal-container-div{
    width: 50%;

  }
  .buy-control-div{
    display: flex;
    flex-wrap: nowrap;
  }
  .confirm-content-div{
    height: 200px;
    width: 180px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #212121;
  }
  .confirm-buy-div{
    margin-top:30px;
    border-radius: 4px;
  }
  .together-label-text{
    color: white;
  }
  .together-input-div{
    width: 100%;
    height: 30px;
    border: 1px solid white;
    background-color: transparent;
    border-radius: 4px;
    margin-top: 20px;
    box-sizing: border-box;
    color: white;
    padding: 0 10px;
    font-size: 18px;
  }
  .confirm-buy-button{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
    background-color: #cd181f;
    border: 1px solid #cd181f;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  .confirm-buy-button:hover{
    background-color: transparent;
    color: #cd181f;
  }
  .confirm-label-text{
    font-size: 14px;
    margin-top: 10px;
    color: white;
  }
  .confirm-money-number{
    color: white;
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
  }
</style>
