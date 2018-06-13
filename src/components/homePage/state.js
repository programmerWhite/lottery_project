import vue from 'vue';
import Vuex from 'vuex';

vue.use(vuex);

const states = {
  dialogType:false,
  dialogText:""
};

const mutations = {

}

export default new Vuex.store({
    states,
    mutations
});
