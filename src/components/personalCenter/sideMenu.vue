<template>
  <div class="menu-container-div">
    <div class="menu-one-div" @click="changePersonalComponent"
         v-for="item in menuList"
         :componentUrl="item.componentUrl"
         :class = "item.componentUrl == currentMenu?'current-menu-style':''"
    >
        {{item.name}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "sideMenu",
        props:["menuList"],
      data(){
          return{
            currentMenu:""
          }
      },
      methods:{
          changePersonalComponent:function (e) {
            var componentUrl = e.target.getAttribute("componentUrl");
            this.$store.commit("changePersonalCenterComponentUrl",componentUrl);
            this.currentMenu = componentUrl;
          }
      }
    }
</script>

<style scoped>
  .menu-one-div{
    height: 40px;
    width: inherit;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }
  .menu-one-div{
    color: white;
    text-decoration: none;
  }
  .menu-one-div:hover{
    color: #cd181f;
  }
  .current-menu-style{
    color: #cd181f;
  }
</style>
