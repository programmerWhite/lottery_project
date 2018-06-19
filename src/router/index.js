import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/homePage'
import noticeCenter from '@/components/noticeCenter/noticeCenter'

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
    }
  ]
})
