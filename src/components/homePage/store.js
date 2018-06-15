import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

const dialogModules = {
  state:{
    show:true,
    type:"text",
    text:"",
    button1:"好的",
    button2:"算了",
    button1CallBack:null,
    button2CallBack:null
  },
  mutations:{
    changeType:function (type) {
      state.type = type;
    },
    changeButton1:function (text) {
      state.button1 = text;
    },
    changeButton2:function (text) {
      state.button2 = text;
    },
    button1Cback:function (callabck) {
      state.button1CallBack = callabck;
    },
    button2Cback:function (callabck) {
      state.button2CallBack = callabck;
    },
    dialogShow:function () {
      state.show = state.show?false:true;
    }
  }
}

export default new Vuex.Store({
    modules:{
      dialog:dialogModules
    }
});
