<template>
  <div class="change-email-container">
    <div class="c-e-line-div">
      <span class="c-e-label">旧邮箱验证码：</span>
      <input typeof="text" class="c-e-input-style">
    </div>
    <div class="c-e-line-div">
      <span class="c-e-label">新邮箱地址：</span>
      <input typeof="text" class="c-e-input-style">
    </div>
    <div class="c-e-line-div">
      <span class="c-e-label">新邮箱验证码：</span>
      <input typeof="text" class="c-e-input-style">
    </div>
    <div class="c-e-line-div">
      <button class="change-email-button">确认修改</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "change-email"
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
</style>
