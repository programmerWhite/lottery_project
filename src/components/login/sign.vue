<template>

  <div class="login-div">
    <home-head></home-head>
    <div class="login-container-div">
      <div class="login-head-div">注册</div>
      <div class="login-input-line">
        <div class="login-input-div">
          <img src="./img/password.png">
          <input type="text" v-model="userEmail" class="input-style width-260" placeholder="邮箱" @blur="checkEmail"/>
        </div>
      </div>
      <div class="login-input-line">
        <div class="login-input-div display-flex">
          <img src="./img/password.png">
          <input type="text" v-model="authorCode" class="input-style width-260" placeholder="填入验证码"/>
          <button class="get-email-button" @click="getAuthorCode">获取验证码</button>
        </div>
      </div>
      <div class="login-input-line">
        <div class="login-input-div">
          <img src="./img/password.png">
          <input type="text" v-model="userName" class="input-style" placeholder="用户名"/>
        </div>
      </div>
      <div class="login-input-line">
        <div class="login-input-div">
          <img src="./img/user.png">
          <input type="password" v-model="passwordText" class="input-style" placeholder="密码"/>
        </div>
      </div>
      <div class="notice-div" v-text="noticeText"></div>
      <div class="login-button-div" @click="signDeal">注册</div>
    </div>
    <dialog-component></dialog-component>
  </div>
</template>

<script>
  import homeHead from "../common/homeHead"
  import dialogComponent from "../common/dialogComponent.vue"
  import store from "../store"

  export default {
    name: "sign",
    components:{homeHead,dialogComponent},
    store,
    data(){
      return {
        authorCode:"",
        userEmail:"",
        noticeText:"",
        userName:"",
        passwordText:"",
        remindMe:true
      }
    },
    methods:{
      getAuthorCode:function () {
        /*调用 dialog 弹窗*/
        this.$store.dispatch("dialogParameter",{
          type:"alert",
          changeText:"验证码发送成功，请到邮箱里面获取。",
          button1:"确认",
          button1CallBack:function () {
            // alert("click 确认");
          }
        });
      },
      signDeal:function () {

      },
      checkEmail:function () {
        console.log(123)
        if(!this.regex(this.userEmail) && this.userEmail != ""){
          this.noticeText = "邮箱地址格式不正确。";
        }else{
          this.noticeText = "";
        }
      },
      regex:function (string) {
        var emailRegx = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$");
        return emailRegx.test(string)
      }
    }
  }
</script>

<style scoped>
  .font-size-14{
    font-size: 14px;
  }

  .login-container-div{
    position: absolute;
    left:50%;
    top: 50%;
    width:360px;
    height: 360px;
    margin-left: -180px;
    margin-top: -180px;
    background-color: #2c2c2c;
    border-radius: 10px;
  }
  .login-head-div{
    font-size: 18px;
    color: white;
    text-align: center;
    padding: 20px;
    font-weight: 500;
  }
  .login-input-line{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .login-input-div{
    width: 320px;
    position: relative;
  }
  .login-input-div input{
    width: inherit;
    height: 30px;
    line-height: 30px;
    border-radius: 13px;
    border: none;
    padding-left: 40px;
    box-sizing: border-box;
  }
  .login-input-div img{
    position: absolute;
    top: 6px;
    left: 6px;
    height: 20px;
    width: 20px;
  }
  .login-button-div{
    margin: 0 auto;
    height: 30px;
    width: 140px;
    border-radius: 4px;
    background-color: #cd181f;
    color: white;
    line-height: 30px;
    text-align: center;
    margin-top:30px;
    cursor: pointer;
  }

  .get-email-button{
    width: 100px;
    background-color: #cd181f;
    color: white;
    border: 1px solid #cd181f;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
    flex-shrink: 0;
    margin-left: 10px;
  }
  .width-260{
    width: 260px;
  }
  .display-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .notice-div{
    width: inherit;
    color: #cd181f;
    font-size: 14px;
    padding:0 20px;
  }
</style>
