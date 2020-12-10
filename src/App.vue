<template>
  <div id="app">
    <!-- 路由匹配到的组件渲染在这里 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
* {
  padding: 0;
  border: 0;
  margin: 0;
  outline: none;
}

:root {
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.2;
  height: 100%;
  --main-color: #333;
  --main-background: #fff;
  --main-active: #fdc90b;
  --main-border: #eee;
}

body {
  height: inherit;
  background-color: var(--main-background, #fff);
}

#app {
  text-align: center;
  height: inherit;
}

.tabbar {
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 1rem;
  line-height: 3.6;
  border-top: 1px solid var(--main-border, #eee);
  background-color: var(--main-background, #fff);
}

a {
  color: var(--main-color, #333);
  text-decoration: none;
}

.active {
  color: var(--main-active, #fdc90b);
}
</style>
