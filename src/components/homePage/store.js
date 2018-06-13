import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

const state = {
  dialogType:false,
  dialogText:""
};

export default new Vuex.Store({
    state
});
