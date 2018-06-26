<template>
  <div class="change-email-container">
    <div class="c-e-line-div">
      <span class="c-e-label">新邮箱地址：</span>
      <input typeof="text" class="c-e-input-style" @blur="checkEmail" inputType="new" v-model="newEmail">
      <div v-text="newEmailNotice" class="email-notice-label"></div>
    </div>
    <div class="c-e-line-div">
      <span class="c-e-label">新邮箱验证码：</span>
      <input typeof="text" class="c-e-input-style" @blur="checkEmail" inputType="confirm" v-model="confirmEmail">
      <div v-text="confirmEmailNotice" class="email-notice-label"></div>
    </div>
    <div class="c-e-line-div">
      <button class="change-email-button" @click="changeEmailContent">确认修改</button>
      <button class="change-email-button margin-left-v" @click="hideEmail">取消</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "change-email",
      data (){
          return {
            newEmail:"",
            confirmEmail:"",
            newEmailNotice:"",
            confirmEmailNotice:"",
          }
      },
      methods:{
        hideEmail:function () {
          this.$parent.hideEmailInput();
        },
        checkEmail:function (e) {

          var emailString = e.target.value;
          var inputType = e.target.getAttribute('inputType');

          if(inputType == "new"){

            if(!this.regex(emailString)){
              this.newEmailNotice = "请检查邮箱地址格式";
            }else{
              this.newEmailNotice = "";
            }

          }else if(inputType == "confirm"){

            if(this.newEmail != this.confirmEmail){
              this.confirmEmailNotice = "两次邮箱地址不一样";
            }else
              this.confirmEmailNotice = "";
            }

          },
        regex:function (string) {
          var emailRegx = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$");
          return emailRegx.test(string)
        },
        changeEmailContent:function () {

          console.log(this.newEmail);
          console.log(this.confirmEmail);

          if(this.regex(this.newEmail) && this.newEmail == this.confirmEmail){
            /*调用 dialog 弹窗*/
            var This = this;
            this.$store.dispatch("dialogParameter",{
              type:"alert",
              changeText:"邮箱修改成功",
              button1:"确认",
              button1CallBack:function () {
                This.$parent.hideEmailInput();
                This.newEmail = "";
                This.confirmEmail = "";
              }
            });
          }else{
            if(!this.regex(this.newEmail)){
              this.newEmailNotice = "请检查邮件格式";
            }

            if(this.newEmail != this.confirmEmail){
              this.confirmEmailNotice = "两次邮箱内容不一样";
            }
          }

        }

      }
    }
</script>

<style scoped>
  .change-email-container{
    padding: 20px;
    box-sizing: border-box;
  }
  .c-e-label{
    color: #ccc;
    font-size: 14px;
    display: block;
    line-height: 30px;
  }
  .c-e-input-style{
    border: 1px solid #212121;
    border-radius: 4px;
    width: 260px;
    height: 26px;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 16px;
    color: #cd181f;
  }
  .change-email-button{
    width: 120px;
    text-align: center;
    height: 30px;
    margin-top: 20px;
    background-color: #cd181f;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }
  .margin-left-v{
    margin-left: 15px;
  }
  .email-notice-label{
    color: yellow;
    font-size: 14px;
  }
</style>
