<template>
    <div class="head-div">
      <div class="head-content-div">
        <div class="logo-div">
          <img src="../../assets/logo.png" />
        </div>
        <div class="head-control-div">
          <ul>
            <li>个人中心</li>
            <li>公告中心</li>
            <li>登录</li>
            <li>注册</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homeHead"
    }
</script>

<style scoped>

  .head-div{
    height: 100px;
    width: 100%;
    background-color: #cd181f;
  }
  .head-content-div{
    width: 1024px;
    height: inherit;
    margin: 0 auto;
  }
  .logo-div img{
    height: 80px;
    margin-top: 10px;
  }
  .head-content-div{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .head-content-div ul{
    margin: 0px;
  }
  .head-content-div li{
    list-style-type: none;
    display: inline-block;
    line-height: 100px;
    margin-left: 10px;
    color: white;
    cursor: pointer;
  }
  .head-content-div li:hover{
    color: #212121;
  }

</style>
