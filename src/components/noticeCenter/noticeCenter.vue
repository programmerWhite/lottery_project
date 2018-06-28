<template>
  <div>
    <home-head></home-head>
    <development></development>
    <div style="color:white;">

    </div>
    <button @click="getNum">ok</button>
  </div>
</template>

<script>
  import homeHead from "../common/homeHead.vue"
  import development from "../common/development"

  export default {
      name:"noticeCenter",
      components:{homeHead,development},
      data(){
        return[
          {
            hang:{
              lie:[
                {
                  name:"第一行 第一列",
                },{
                  name:"第一行 第二列",
                },{
                  name:"第一行 第三列",
                }
              ]
            },
            hang:{
              lie:[
                {
                  name:"第二行 第一列",
                },{
                  name:"第二行 第二列",
                },{
                  name:"第二行 第三列",
                }
              ]
            }
          }
        ]
      },
    methods:{
      blurDiv:function (e) {
        // var dataPath = e.target.getAttribute("dataPath");
        // var obj =  eval(dataPath);
        // console.log(e.target.innerText)
        // obj = e.target.innerText;
      },
      getNum:function () {
        console.log(JSON.stringify(this.$data))
      }
    }
  }
</script>

<style scoped>
  .line{
    color: white;
    display: flex;
  }
  .line div{
    padding: 10px;
    background-color: white;
    color:red;

  }
</style>
