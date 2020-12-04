import Vue from 'vue'
import VueRouter from 'vue-router'

import eat from './components/toEat'
import list from './components/foodList'
import about from './components/aboutMe'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
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
    },
    {
      path: '/',
      redrrect: '/eat'
    }
  ]
})