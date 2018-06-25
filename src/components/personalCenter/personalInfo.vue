<template>
  <div class="personal-info-div">
    <div class="user-info-line">
      <div class="user-photo">
        <img :src="userInfo.userPhoto" />
      </div>
      <div class="user-name-div">
        <span class="white-color-label">{{userInfo.userName}}</span>
        <span class="white-color-label font-size-14 margin-top-10">{{userInfo.emailText}}<span class="change-email-button" @click="showEmailInput">修改</span></span>
        <span class="red-color-label font-size-14 margin-top-10">状态：{{userInfo.userLevel}}</span>
      </div>
    </div>
    <div class="change-email-div" v-show="emailShow">
      <change-email></change-email>
    </div>
    <dialog-component></dialog-component>
  </div>
</template>

<script>
  import changeEmail from "./changeEmail"
  import dialogComponent from "../common/dialogComponent.vue"

    export default {
        name: "personal-info",
      components:{
        changeEmail,
        dialogComponent
      },
      data(){
          return{
            userInfo:{},
            emailShow:false
          }
      },
      mounted:function () {
          var This = this;
        setTimeout(function () {
          This.userInfo = {
            userPhoto:"//storage.360buyimg.com/i.imageUpload/777936343138313235313831343837383235303639333637_mid.jpg",
            userName:"wy641812518",
            userLevel:"合买新人",
            emailText:"641812518@qq.com"
          }
        },500);
      },
      methods:{
        showEmailInput:function () {
          this.emailShow = true;
        },
        hideEmailInput:function () {
          this.emailShow = false;
        },
      }
    }
</script>

<style scoped>
  .personal-info-div{
    width: 100%;
    color: white;
    padding: 10px 0;
    background-color: #2c2c2c;
  }
  .user-info-line{
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
  }
  .user-photo{
    height: 100px;
    width: 100px;
  }
  .user-photo img{
    height: inherit;
    width: inherit;
    border-radius: 100%;
  }
  .user-name-div{
    margin-left: 20px;
  }
  .font-size-14{
    font-size: 14px;
  }
  .red-color-label{
    color: #cd181f;
  }
  .user-name-div span{
    display: block;
  }
  .margin-top-10{
    margin-top: 10px;
  }
  .change-email-button{
    cursor: pointer;
  }
  .change-email-button:hover{
    color: #cd181f;
  }
</style>
