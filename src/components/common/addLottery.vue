<template>
  <div class="lottery-line-div">
    <input type="text" class="red-ball-input" maxlength="2" v-model="red1"/>
    <input type="text" class="red-ball-input" maxlength="2" v-model="red2"/>
    <input type="text" class="red-ball-input" maxlength="2" v-model="red3"/>
    <input type="text" class="red-ball-input" maxlength="2" v-model="red4"/>
    <input type="text" class="red-ball-input" maxlength="2" v-model="red5"/>
    <input type="text" class="red-ball-input" maxlength="2" v-model="red6"/>
    <input type="text" class="blue-ball-input" maxlength="2" v-model="blue1"/>
    <div class="add-new-line-button" @click="addNewNum">添加</div>
  </div>
</template>

<script>
    export default {
        name: "addLottery",
      data(){
          return{
            red1:"",
            red2:"",
            red3:"",
            red4:"",
            red5:"",
            red6:"",
            blue1:"",
          }
      },
      watch:{
        red1:function(value,oldValue) {
          this.red1 = this.checkBallNum(value,oldValue,"red");
        },
        red2:function(value,oldValue) {
          this.red2 = this.checkBallNum(value,oldValue,"red");
        },
        red3:function(value,oldValue) {
          this.red3 = this.checkBallNum(value,oldValue,"red");
        },
        red4:function(value,oldValue) {
          this.red4 = this.checkBallNum(value,oldValue,"red");
        },
        red5:function(value,oldValue) {
          this.red5 = this.checkBallNum(value,oldValue,"red");
        },
        red6:function(value,oldValue) {
          this.red6 = this.checkBallNum(value,oldValue,"red");
        },
        blue1:function(value,oldValue) {
          this.blue1 = this.checkBallNum(value,oldValue,"blue");
        }

      },
      methods:{
          addNewNum:function () {
            var numberArray = [];
            if(this.red1 != ""){
              numberArray.push(this.deleteZero(this.red1));
            }
            if(this.red2 != ""){
              numberArray.push(this.deleteZero(this.red2));
            }
            if(this.red3 != ""){
              numberArray.push(this.deleteZero(this.red3));
            }
            if(this.red4 != ""){
              numberArray.push(this.deleteZero(this.red4));
            }
            if(this.red5 != ""){
              numberArray.push(this.deleteZero(this.red5));
            }
            if(this.red6 != ""){
              numberArray.push(this.deleteZero(this.red6));
            }

            /*前6位从小到大排序*/
            numberArray.sort(function (a,b) {
              return a-b;
            });

            if(this.blue1 != ""){
              numberArray.push(this.deleteZero(this.blue1));
            }

            this.$emit('addNum',numberArray);

            this.red1 = "";
            this.red2 = "";
            this.red3 = "";
            this.red4 = "";
            this.red5 = "";
            this.red6 = "";
            this.blue1 = "";

          },
          deleteZero:function (value) {
            if(value[0] == "0"){
              return value.substr(1);
            }else{
              return value;
            }
          },
          checkBallNum:function (newValue,oldValue,type) {
            if(!(/\D/.test(newValue))){
              if(type == "red"){
                if(newValue <=33 && newValue >= 1 || newValue==""){
                  return newValue;
                }else{
                  /*调用 dialog 弹窗*/
                  this.$store.dispatch("dialogParameter",{
                    type:"alert",
                    changeText:"红球选择区间是1-33。",
                    button1:"确认",
                    button1CallBack:function () {
                      // alert("click 确认");
                    }
                  });
                  return "";
                }
              }else if(type == "blue"){
                if(newValue <=16 && newValue >= 1 || newValue==""){
                  return newValue;
                }else{
                  /*调用 dialog 弹窗*/
                  this.$store.dispatch("dialogParameter",{
                    type:"alert",
                    changeText:"篮球选择区间是1-16。",
                    button1:"确认",
                    button1CallBack:function () {
                      // alert("click 确认");
                    }
                  });
                  return "";
                }
              }
            }else{
              return ""
            }
          }
      },
    }
</script>

<style scoped>
  .red-ball-input{
    height: 26px;
    width: 26px;
    border: 1px solid #cd181f;
    border-radius: 100%;
    margin-right: 10px;
    background-color: transparent;
    text-align: center;
    color: white;
    font-size: 16px;
    line-height: 24px;
  }
  .blue-ball-input{
    height: 26px;
    width: 26px;
    border: 1px solid #0000fd;
    border-radius: 100%;
    margin-right: 10px;
    background-color: transparent;
    text-align: center;
    color: white;
    font-size: 16px;
    line-height: 24px;
  }
  .lottery-line-div{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .add-new-line-button{
    margin-left: 20px;
    color: #999999;
    font-size: 14px;
    cursor: pointer;
  }
</style>
