<template>
  <div class="menu-container-div">
    <span class="menu-one" @click="changeLotteryId" v-for="menuOne in this.menuData" :class="classAdd == menuOne.id?'current-menu-style':''" :menuId="menuOne.id">{{menuOne.name}}</span>
  </div>
</template>

<script>
  export default {
    name:"menuComponent",
    props:["menuData"],
    data(){
      return {
        classAdd:null
      }
    },
    created:function () {
        this.classAdd = this.$store.state.other.lotteryBallId
    },
    methods:{
      changeLotteryId:function (e) {
          var menuId = e.target.getAttribute("menuId");
          this.classAdd = menuId;
          this.$store.commit("changeLotteryId",menuId);
      }
    }
  }
</script>

<style scoped>
  .menu-one{
    font-size: 14px;
    color: white;
    margin-right: 20px;
    cursor: pointer;
  }
  .menu-one:hover{
    color: #cd181f;
  }
  .menu-container-div{
    width: 100%;
    max-width: 1024px;
    margin:0 auto;
    padding: 20px 10px;
    box-sizing: border-box;
    background-color:#2c2c2c ;
    margin-top: 20px;
  }
  .current-menu-style{
    color: #cd181f;
  }
</style>
