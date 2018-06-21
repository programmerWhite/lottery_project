<template>
    <div class="count-down-div">
      <div class="time-card-div">{{hour | addZero}}</div>:
      <div class="time-card-div">{{mints | addZero}}</div>:
      <div class="time-card-div">{{second | addZero}}</div>
    </div>
</template>

<script>
    export default {
        name: "countdown",
      props:["countTime"],
      data(){
          return{
            hour:"",
            mints:"",
            second:""
          }
      },
      filters:{
          addZero:function (v) {
            if(parseInt(v) < 10){
              return "0" + v;
            }else{
              return v;
            }
          }
      },
      created:function(){
        this.dealTime();
      },
      mounted:function(){
          if(this.hour > 0 || this.mints > 0 || this.second > 0){
            this.timer = this.countDownTimer();
          }
      },
      methods:{
          countDownTimer:function () {
            var This = this;
            return setInterval(function () {
              This.second--;
              if(This.second == 0){
                This.mints--;
                This.second = 59
                if(This.mints == 0){
                  This.hour--;
                  This.mints = 59
                  if(This.hour == -1){
                    This.hour = 0;
                    This.mints = 0;
                    This.second = 0;
                    This.clearTimer();
                  }
                }
              }
            },1000)
          },
          clearTimer:function () {
            clearInterval(this.timer);
          },
          dealTime:function(){
            var tempTime = this.countTime?this.countTime.split("#"):[0,0,0];
            this.hour = tempTime[0];
            this.mints = tempTime[1];
            this.second = tempTime[2];
          }
      },
      destroyed:function () {
        clearInterval(this.timer);
      }
    }

</script>

<style scoped>
  .count-down-div{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    color: #999999;
    width: inherit;
    justify-content: space-between;
  }
  .time-card-div{
    height: 20px;
    width: 30px;
    text-align: center;
    line-height: 20px;
    background-color: #424242;
    font-size: 14px;

  }
</style>
