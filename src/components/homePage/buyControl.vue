<template>
    <div class="buy-control-div">
      <div class="ideal-container-div">
        <div class="ideal-label-div">添加你的理想号码：</div>
        <div class="had-number-div">
          <div class="had-number-line-div" v-for="(number,index) in hadAddNum">
            <lottery-code  :lotteryCode="number" @addNumber="addNumber"></lottery-code>
            <div class="delete-line" :indexNum="index" @click="deleteArrayNum">删除</div>
          </div>
        </div>
        <div class="ideal-number-control-div">
          <add-lottery @addNum="addNumber"></add-lottery>
        </div>
      </div>
      <div class="buy-desc-container-div">
        <div class="buy-desc-label">合买规则：</div>
        <ul class="buy-desc-ul">
          <li>每个用户一次只能提供5组号码</li>
          <li>彩票购买时从所有用户中抽取号码（重复次数最多的优先选择）</li>
          <li>用户选择好号码后参与合买金额加入</li>
          <li>奖金分成按照参与金额比例的份额分取</li>
        </ul>
      </div>
      <div class="confirm-buy-div">
        <div class="confirm-content-div">
          <div class="together-label-text">合买金额：</div>
          <input class="together-input-div" type="text" v-model="bugNumber" placeholder="输入买入金额"/>
          <div class="confirm-label-text">确认买入金额：</div>
          <div class="confirm-money-number">{{bugNumber?bugNumber:0}} 元</div>
          <button class="confirm-buy-button" @click="agreeJoin">确认参与</button>
        </div>
      </div>
    </div>
</template>

<script>
    import addLottery from "../common/addLottery"
    import lotteryCode from "../common/lotteryCode"
    import dialogComponent from "../common/dialogComponent"

    export default {
      name: "buyControl",
      components:{addLottery,lotteryCode,dialogComponent},
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
          },
          agreeJoin:function () {
            if(parseInt(this.bugNumber) > 0){
              /*调用 dialog 弹窗*/
              this.$store.dispatch("dialogParameter",{
                type:"confirm",
                changeText:"确定参与合买项目?<br/><br/>合买金额:"+this.bugNumber+"元",
                button1:"确认",
                button2:"取消",
                button1CallBack:function () {
                  // alert("click 确认");
                },
                button2CallBack:function () {
                  // alert("click 取消");
                }
              });
            }else{
              /*调用 dialog 弹窗*/
              this.$store.dispatch("dialogParameter",{
                type:"alert",
                changeText:"请确认你的购买金额。",
                button1:"确认",
                button1CallBack:function () {
                  // alert("click 确认");
                }
              });
            }


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
    width: 370px;

  }
  .buy-control-div{
    display: flex;
    flex-wrap: nowrap;
  }
  .confirm-content-div{
    width: 220px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #212121;
    border-radius:10px ;
  }
  .confirm-buy-div{
    margin-top:30px;
    border-radius: 4px;
    margin-left: 20px;
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
  .buy-desc-container-div{
    width: 400px;
  }
  .buy-desc-ul li{
    list-style-type: decimal;
    line-height: 30px;
    color: white;
    font-size: 14px;
  }
  .buy-desc-label{
    font-size:18px ;
    color: white;
  }
</style>
