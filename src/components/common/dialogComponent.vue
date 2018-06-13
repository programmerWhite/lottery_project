<template>
  <div class="dialog-container-div">
    <div class="dialog-one-div" v-if="dialogType=='alert'">
      <div class="dialog-text">{{dialogText}}</div>
      <div class="dialog-button-container-div">
        <div class="dialog-button">{{dialogButton1}}</div>
      </div>
    </div>
    <div class="dialog-one-div" v-else-if="dialogType=='confirm'">
      <div class="dialogText">{{dialogText}}</div>
      <div class="dialog-button-container-div">
        <div>{{dialogButton1}}</div>
        <div>{{dialogButton2}}</div>
      </div>
    </div>
    <div class="dialog-one-div" v-else-if="dialogType=='text'">
      <div class="dialog-button-container-div">
        <div class="dialog-button">{{dialogButton1}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "dialog-component",
      data(){
          return{
            dialogType:"",
            dialogText:"",
            dialogButton1:"好的",
            dialogButton2:"算了吧"
        }
      }
    }
</script>

<style scoped>
  .dialog-container-div{

  }
</style>
