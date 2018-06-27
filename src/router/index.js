import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/homePage'
import noticeCenter from '@/components/noticeCenter/noticeCenter'
import personalCenter from '@/components/personalCenter/personalCenter'
import login from '@/components/login/login'
import sign from '@/components/login/sign'

Vue.use(Router)


var routerObj = new Router({

  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/noticeCenter',
      name: 'noticeCenter',
      component: noticeCenter
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/sign',
      name: 'sign',
      component: sign
    }
  ]

});

routerObj.beforeEach((to, from, next)=>{
  /*如果地址不存在，就跳转到上一个页面，上一个页面不存在就跳转到首页*/
  if(to.matched.length == 0){
    from.name ? next({ name:from.name }) : next('/');
  }else{
    next();
  }
});

export default routerObj;

