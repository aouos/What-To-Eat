import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import home from './components/Home'
import list from './components/List'
import about from './components/About'

// vue中使用router
Vue.use(VueRouter);

// 定义路由
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: home
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

// 创建router实例
const router = new VueRouter({
  mode: 'hash', // 使用hash模式
  linkExactActiveClass: 'active', // 选中class
  routes
})

export default router