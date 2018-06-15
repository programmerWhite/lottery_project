<template>
  <div class="dialog-container-div" v-show="dialogShow">
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
            dialogText:"",
            dialogButton1:"好的",
            dialogButton2:"算了吧",
        }
      },
      computed:{
        dialogType:function () {
          return this.$store.state.dialog.type
        },
        dialogShow:function () {
          return this.$store.state.dialog.show
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .dialog-container-div{
    width: 200px;
    height: 160px;
    background-color: white;
    position: fixed;
    left:50%;
    top:50%;
    margin-left: -100px;
    margin-top: -80px;
  }
</style>
