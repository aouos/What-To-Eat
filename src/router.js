import Vue from 'vue'
import VueRouter from 'vue-router'

import eat from './components/toEat'
import list from './components/foodList'
import about from './components/aboutMe'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash', // 使用hash模式
  linkExactActiveClass: 'active', // 选中class
  routes: [
    {
      path: "/",
      redirect: "/eat"
    },
    {
      path: "/eat",
      name: "eat",
      component: eat
    },
    {
      path: "/list",
      name: "list",
      component: list
    },
    {
      path: "/about",
      name: "about",
      component: about
    }
  ]
})

export default router