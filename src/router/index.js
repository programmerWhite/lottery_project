import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/homePage'
import noticeCenter from '@/components/noticeCenter/noticeCenter'
import personalCenter from '@/components/personalCenter/personalCenter'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
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
  ]
})
