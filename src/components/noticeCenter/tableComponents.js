/**
 * Created by wy on 2018/6/28.
 */
import Vue from "vue"
import "./tableComponents.css"
/*显示每一列*/
Vue.component("cols-components",{
  props:["colsData","rowsLevel","colsLevel"],
  template:'<div class="cols-line-div">' +
    '<div class="rows-outer"  v-for="rows in colsData" :rowsLevel="rowsNum">' +

      '<rows-components v-if="rows.lie" :rowsData="rows.lie" :rowsLevel="rowsNum" :colsLevel="colsNum"></rows-components>' +
      '<div class="rows-part" contenteditable="true" v-else>{{rows.name}}</div>' +

    '</div>' +
  '</div>',
  data(){
    return {
      colsNum:null,
      rowsNum:null
    }
  },
  created:function () {
    this.colsNum = this.colsLevel+1;
    this.rowsNum = this.rowsLevel+1;
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
  template:'<div class="rows-line-div">' +
    '<div class="cols-outer" v-for="cols in rowsData" :colsLevel="colsNum">' +

      '<cols-components v-if="cols.hang" :colsData="cols.hang" :rowsLevel="rowsNum" :colsLevel="colsNum"></cols-components>' +
      '<div class="cols-part" contenteditable="true" v-else>{{cols.name}}</div>' +

    '</div>' +
  '</div>',
  data(){
    return {
      tempData:{},
      colsNum:null,
      rowsNum:null
    }
  },
  created:function () {
    this.colsNum = this.colsLevel+1;
    this.rowsNum = this.rowsLevel+1;
  }
});

var tableComponents = Vue.component('table-components',{
  props:["propsTableData"],
  template: '<div ref="tableContainer">' +
        '<rows-components v-for="rows in tempData" :rowsData="rows.lie" :rowsLevel=0 :colsLevel=0></rows-components>' +
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

