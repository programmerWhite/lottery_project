<template>
  <div class="lottery-line-div">
    <input type="text" class="red-ball-input" maxlength="2" :value="red1"/>
    <input type="text" class="red-ball-input" maxlength="2" :value="red2"/>
    <input type="text" class="red-ball-input" maxlength="2" :value="red3"/>
    <input type="text" class="red-ball-input" maxlength="2" :value="red4"/>
    <input type="text" class="red-ball-input" maxlength="2" :value="red5"/>
    <input type="text" class="red-ball-input" maxlength="2" :value="red6"/>
    <input type="text" class="blue-ball-input" maxlength="2" :value="blue1"/>
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
      methods:{
          addNewNum:function () {
            var numberArray = [];
            console.log(this.red1)

            console.log(this.red2)
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
            if(this.blue1 != ""){
              numberArray.push(this.deleteZero(this.blue1));
            }
            console.log(numberArray)
            this.$emit('addNumber',numberArray);
          },
          deleteZero:function (value) {
            console.log(value)
            if(value[0] == "0"){
              return value.substr(1);
            }else{
              return value;
            }
          }
      }
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
