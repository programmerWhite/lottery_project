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
            hadAddNum:[]
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
</style>
