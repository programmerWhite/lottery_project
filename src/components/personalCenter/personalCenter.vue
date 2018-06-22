<template>
  <div>
    <home-head></home-head>
    <div class="personal-center-content-div">
      <div class="side-part">
        <side-menu ref="sideMenuC" :menuList="menuList"></side-menu>
      </div>
      <div class="content-part">
        <keep-alive>
          <component :is="this.$store.state.other.personalCenterComponentUrl"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>

  import homeHead from "../common/homeHead.vue"
  import sideMenu from "./sideMenu"
  import dialogComponent from "../common/dialogComponent.vue"
  import store from "../store"

  export default {
    name:"personalCenter",
    store,
    components:{
      homeHead,
      sideMenu,
      dialogComponent,
      "personalInfo":()=>import("./personalInfo"),
      "togetherBuy":()=>import("./buyRecord"),
      "wallet":()=>import("./wallet")
    },
    data(){
      return {
        menuList:[
          {
            name:"个人信息",
            componentUrl:"personalInfo"
          },{
            name:"合买记录",
            componentUrl:"togetherBuy"
          },
          {
            name:"钱包",
            componentUrl:"wallet"
          }
        ],
        currentComponent:""
      }
    },
    mounted:function(){
      this.$store.commit("changePersonalCenterComponentUrl","personalInfo");
      this.$refs.sideMenuC.currentMenu = "personalInfo";
    }
  }

</script>

<style scoped>
  .personal-center-content-div{
    width: 100%;
    height: auto;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    margin-top: 10px;
    flex-wrap: nowrap;
  }
  .side-part{
    width: 160px;
    flex-shrink: 0;
    background-color: #2c2c2c;
  }
  .content-part{
    width: 100%;
    margin-left: 10px;
  }
</style>
