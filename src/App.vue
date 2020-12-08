<template>
  <div id="app">
    <!-- 路由匹配到的组件渲染在这里 -->
    <router-view></router-view>
    <div class="tabbar">
      <div>
        <!-- router-link默认会被渲染成为<a>标签 -->
          <!-- replace覆盖跳转 -->
        <router-link :to="{ name: 'home' }" replace>
          <span>首页</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'list' }" replace>
          <span>列表</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'about' }" replace>
          <span>我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body,
div,
span,
a,
p {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

:root {
  height: 100%;
  font-size: 1em;
}

body {
  height: 100%;
}

#app {
  text-align: center;
  background-color: #fff;
  height: 100%;
}

.tabbar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  font-size: 1rem;
  line-height: 3;
  border-top: 1px solid #f1f1f1;
  background-color: #fff;
}

a {
  color: #333;
  text-decoration: none;
}

.active {
  color: #fdc90b;
}
</style>
