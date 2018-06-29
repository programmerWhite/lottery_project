/**
 * Created by wy on 2018/6/28.
 */
import Vue from "vue"
import "./tableComponents.css"
/*显示每一列*/
Vue.component("cols-components",{
  props:["colsData","parentWith"],
  template:'<div class="rows-line-div" :style="containerStyle">' +

    '<div class="rows-outer"  v-for="rows in tempData" :style="containerStyle">' +
      '<rows-components v-if="rows.lie" :rowsData="rows.lie" :parentWith="containerWidth"></rows-components>' +
      '<div class="rows-part" contenteditable="true" v-else>{{rows.name}}</div>' +
    '</div>' +

  '</div>',
  data(){
    return {
      tempData:null,
      containerWidth:null,
      containerStyle:{},
      rowsStyle:{}
    }
  },
  created:function () {

    this.tempData = this.colsData;

    this.containerWidth = parseInt(this.parentWith);

    this.containerStyle = {
      width:parseInt(this.parentWith)+"px"
    };

    this.rowsStyle = {
      width:parseInt(this.parentWith)/this.colsData.length+"px"
    }
  },
  methods:{

  },
  beforeUpdate:function () {
    console.log("before update 1")
  }
});

/*显示每一行*/
Vue.component("rows-components",{
  props:["rowsData","parentWith"],
  template:'<div class="cols-line-div" :style="containerStyle">' +

    '<div class="cols-outer" v-for="(cols,index) in tempData" :style="colsWidth">' +
      '<cols-components v-if="cols.hang" :colsData="cols.hang" :parentWith="containerWidth"></cols-components>' +
      '<div class="cols-part" contenteditable="true" @contextmenu.prevent="showDivise" @click="hideMenu" :colsIndex="index" v-else>{{cols.name}}</div>' +
    '</div>' +

  '</div>',
  data(){
    return {
      tempData:null,
      containerWidth:null,
      containerStyle:{},
      colsWidth:{},
    }
  },
  created:function () {
    this.tempData = this.rowsData;

    this.containerWidth = parseInt(this.parentWith)/this.rowsData.length;

    this.containerStyle = {
      width:parseInt(this.parentWith)/this.rowsData.length
    };
    this.colsWidth = {
      width:parseInt(this.parentWith)/this.rowsData.length +"px"
    }
  },
  methods:{
    showDivise:function (e) {
      var This = this;

      var menuContainer = document.createElement("div");
      menuContainer.classList = "menu-container";

      var keyMenu1 = document.createElement("div");
      var text = document.createTextNode('复制');
      keyMenu1.appendChild(text);

      var keyMenu2 = document.createElement("div");
      text = document.createTextNode('上下拆分');
      keyMenu2.appendChild(text);
      keyMenu2.onclick = function () {
        This.divisionUpDown(e);
      };

      var keyMenu3 = document.createElement("div");
      text = document.createTextNode('左右拆分');
      keyMenu3.appendChild(text);
      keyMenu3.onclick = function () {
        This.divisionLeftRight(e);
      };

      var keyMenu4 = document.createElement("div");
      text = document.createTextNode('关闭');
      keyMenu4.appendChild(text);
      keyMenu4.onclick = function () {
        This.hideMenu(e);
      };

      menuContainer.appendChild(keyMenu1);
      menuContainer.appendChild(keyMenu2);
      menuContainer.appendChild(keyMenu3);
      menuContainer.appendChild(keyMenu4);
      e.target.appendChild(menuContainer);
    },
    divisionUpDown:function (e) {
      console.log(this.tempData)
      this.hideMenu(e);

      var colsIndex = e.target.getAttribute("colsIndex");
      var nameText = this.tempData[colsIndex].name;
      this.tempData[colsIndex] = {
        hang: [
          {
            name: nameText
          },
          {
            name: ""
          }
        ]
      };
      console.log(this.tempData[colsIndex])
    },
    divisionLeftRight:function (e) {
      this.hideMenu(e);

    },
    hideMenu:function (e) {
      if(e.target.firstElementChild){
        e.target.firstElementChild.remove();
      }
    }
  }
});

var tableComponents = Vue.component('table-components',{
  props:["propsTableData"],
  template: '<div ref="tableContainer" style="width: 100%">' +
        '<rows-components v-for="(rows,key) in tempData" :rowsData="rows.lie" v-bind:key="key" :parentWith="containerWidth"></rows-components>' +
  '</div>',
  data(){
    return{
      tempData:{},
      containerWidth:0
    }
  },
  mounted:function () {
    this.tempData = this.propsTableData;
    this.containerWidth = window.getComputedStyle(this.$refs.tableContainer).width;
  }
});


export default tableComponents;

