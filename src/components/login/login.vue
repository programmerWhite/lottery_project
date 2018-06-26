<template>

  <div class="login-div">
    <home-head></home-head>
    <div class="login-container-div">
      <div class="login-head-div">登录</div>
      <div class="login-input-line">
        <div class="login-input-div">
          <img src="./img/user.png">
          <input type="text" v-model="userName" class="input-style" placeholder="用户名"/>
        </div>
      </div>
      <div class="login-input-line">
        <div class="login-input-div">
          <img src="./img/password.png">
          <input type="text" v-model="passwordText" class="input-style" placeholder="密码"/>
        </div>
      </div>
      <div class="notice-div" v-text="noticeText"></div>
      <div class="remind-me-div">
        <span>记住密码</span>
        <div class="remind-me-outer">
          <div class="remind-me-inner"></div>
        </div>
      </div>
      <div class="login-button-div">登录</div>
    </div>
  </div>
</template>

<script>
  import homeHead from "../common/homeHead"

    export default {
        name: "login",
      components:{homeHead},
      data(){
          return {
            noticeText:"",
            userName:"",
            passwordText:""
          }
      }
    }
</script>

<style scoped>
  .login-container-div{
    position: absolute;
    left:50%;
    top: 50%;
    width:320px;
    height: 360px;
    margin-left: -130px;
    margin-top: -150px;
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
    padding: 20px 0;
  }
  .login-input-div{
    width: 260px;
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
    margin-top:40px
  }
  .remind-me-div{
    width: 260px;
    margin: 0 auto;
  }
</style>
