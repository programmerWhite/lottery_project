<template>
    <div class="wallet-div">
      <div class="wallet-head-div">
        <div class="wallet-desc-div">
          <div class="wallet-line-div">
            <span  class="font-size-14"> 余额：</span>
            <span  class="color-red">{{walletData.leftMoney}} 元</span>
            <span  class="font-size-14 add-money" @click="addMoney"> 充值 </span>
            <span  class="font-size-14 get-money" @click="getMoney"> 提现 </span>
          </div>
        </div>
        <div class="set-pay-money">
          <div class="set-pay-line-div">
            <span @click="payDivShow" class="cursor-pointer">设置支付密码</span>
          </div>
          <div v-show="payShowHide" >
            <div class="set-pay-line-div">
              <input type="text" class="email-code-input" placeholder="验证码"/>
              <button class="get-email-code"  @click="getAuthorCode">获取验证码</button>
            </div>
            <div class="set-pay-line-div">
              <input type="text" class="pay-password-input" placeholder="支付密码"/>

            </div>
            <div class="set-pay-line-div">
              <button class="change-pay-password-button">修改支付密码</button>
            </div>
          </div>
        </div>
      </div>

      <div class="wallet-content-div">
        <div class="wallet-record-one-div" v-for="item in walletData.walletRecord">
          <div class="border-right money-direction-div" :class='item.moneyDirection == 1?"color-green":"color-red"'>{{item.moneyDirection == 1?"收入":"支出"}}</div>
          <div class="margin-left-20 money-num-width">{{item.moneyNum}} 元</div>
          <div class="margin-left-20">{{item.moneyWay}}</div>
          <div class="margin-left-20">{{item.date}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "wallet",
      data(){
          return {
              walletData:{},
            payShowHide:false
          }
      },
      mounted:function () {
        this.walletData = {
          leftMoney:520,
          walletRecord:[
            {
              moneyDirection:1,
              moneyNum:48,
              moneyWay:"双色球 2018071232 期",
              date:"2018-03-02"
            },{
              moneyDirection:1,
              moneyNum:104,
              moneyWay:"大乐透 2018071232 期",
              date:"2018-03-02"
            },{
              moneyDirection:1,
              moneyNum:33,
              moneyWay:"双色球 2018071232 期",
              date:"2018-03-02"
            },{
              moneyDirection:-1,
              moneyNum:10,
              moneyWay:"双色球 2018071231 期",
              date:"2018-03-02"
            },{
              moneyDirection:-1,
              moneyNum:15,
              moneyWay:"大乐透 2018071222 期",
              date:"2018-03-02"
            }
          ],
        }
      },
      methods:{
        addMoney:function () {
          this.$store.dispatch("dialogParameter",{
            type:"alert",
            changeText:"充值功能占时还未开启。敬请期待",
            button1:"确认",
            button1CallBack:function () {

            }
          });

        },
        getMoney:function () {
          this.$store.dispatch("dialogParameter",{
            type:"alert",
            changeText:"提现功能占时还未开启。敬请期",
            button1:"确认",
            button1CallBack:function () {

            }
          });
        },
        payDivShow:function () {
          this.payShowHide = this.payShowHide?false:true;
        },
        getAuthorCode:function () {
          this.$store.dispatch("dialogParameter",{
            type:"alert",
            changeText:"验证码发送成功",
            button1:"确认",
            button1CallBack:function () {

            }
          });
        }
      }
    }
</script>

<style scoped>
  .set-pay-line-div{
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .cursor-pointer{
    cursor: pointer;
  }
  .get-email-code,
  .change-pay-password-button{
    height: 26px;
    text-align: center;
    background-color: #cd181f;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .email-code-input{
    width: 100px;
    height: 26px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #cccccc;
    background-color: #2c2c2c;
    color: white;
    font-size: 14px;
  }
  .pay-password-input{
    width: 190px;
    height: 26px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #cccccc;
    background-color: #2c2c2c;
    color: white;
    font-size: 14px;
  }
  .wallet-div{
    padding:10px 20px;
    box-sizing: border-box;
    color: white;
    background-color: #2c2c2c;
  }
  .wallet-head-div{
    font-size: 18px;
  }
  .wallet-record-one-div{
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px dashed #cccccc;
  }
  .color-green{
    color: greenyellow;
  }
  .color-red{
    color: red;
  }
  .wallet-content-div{
    padding: 20px 0;
  }

  .margin-left-20{
    margin-left: 20px;
  }
  .money-num-width{
    width: 100px;
    text-align:center ;
  }
  .border-right{
    border-right: 1px solid #cccccc;
  }
  .money-direction-div{
    padding:0 10px;
  }
  .font-size-14{
    font-size: 14px;
  }
  .add-money{
    cursor: pointer;
    margin-left: 30px;
  }
  .get-money{
    cursor: pointer;
    margin-left: 10px;
  }
  .add-money:hover,
  .get-money:hover{
    color: #cd181f;
  }
  .wallet-line-div{
    display: flex;
    align-items: center;

  }
</style>
