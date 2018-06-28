/**
 * Created by wy on 2018/6/28.
 */
import Vue from "vue"
import "./tableComponents.css"
/*显示每一列*/
Vue.component("cols-components",{
  props:["colsData"],
  template:'<div class="cols-line-div">' +
    '<div class="rows-outer"  v-for="rows in colsData">' +

      '<rows-components v-if="rows.lie" :rowsData="rows.lie"></rows-components>' +
      '<div class="rows-part" contenteditable="true" v-else>{{rows.name}}</div>' +

    '</div>' +
  '</div>',
  data(){
    return {
      hang:{}
    }
  },
  methods:{
    setHeight:function(length){
      return {"min-height":(1/length*100)+"%"}
    }
  }
});

/*显示每一行*/
Vue.component("rows-components",{
  props:["rowsData","rowsLevel","colsLevel"],
  template:'<div class="rows-line-div" :rowsLevel="rowsLevel++">' +
    '<div class="cols-outer" v-for="cols in rowsData">' +

      '<cols-components v-if="cols.hang" :colsData="cols.hang" :colsLevel="colsLevel++"></cols-components>' +
      '<div class="cols-part" contenteditable="true" v-else>{{cols.name}}</div>' +

    '</div>' +
  '</div>',
  data(){
    return {
      tempData:{}
    }
  }
});

var tableComponents = Vue.component('table-components',{
  props:["propsTableData"],
  template: '<div ref="tableContainer">' +
        '<rows-components v-for="rows in tempData" :rowsData="rows.lie" :rowsLevel="0" :colsLevel="0"></rows-components>' +
  '</div>',
  data(){
    return{
      tempData:{}
    }
  },
  mounted:function () {
    this.tempData = this.propsTableData;

    console.log(this.$refs.tableContainer);

  }
});


export default tableComponents;

