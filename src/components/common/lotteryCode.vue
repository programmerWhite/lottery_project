<template>
  <div class="dcb-number-container">
    <div class="ball-red-div" v-for="num in redCodeNum">{{num | addZero}}</div>
    <div class="ball-blue-div" v-for="num in blueCodeNum">{{num | addZero}}</div>
  </div>
</template>

<script>
    export default {
        name: "lotteryCode",
      props:["lotteryCode"],
      data(){
          return{
            redCodeNum:[],
            blueCodeNum:""
          }
      },
      methods:{
        dealLotteryCode:function () {
          var redBlue = this.lotteryCode.split("_");

          this.redCodeNum = redBlue[0].split("#");
          this.blueCodeNum = redBlue[1].split("#");
        }
      },
      created:function(){
          this.dealLotteryCode();
      },
      filters:{
          addZero:function (value) {
            if(parseInt(value) < 10){
              return "0"+value
            }else{
              return value;
            }
          }
      }
    }
</script>

<style scoped>
  .ball-red-div{
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: #cd181f;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    margin-right: 10px;
  }
  .dcb-number-container{
    display: flex;
    flex-wrap: nowrap;
  }
  .ball-blue-div{
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: #0000fd;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    margin-right: 10px;
  }
</style>
