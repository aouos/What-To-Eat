<template>
  <div id="app">
    <router-view></router-view>
    <div class="tabbar">
      <div>
        <router-link :to="{ name: 'eat' }" replace>
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
html,body {
  padding: 0;
  border: 0;
  margin: 0;
  outline: none;
  background-color: #fff;
}

#app {
  text-align: center;
}

.tabbar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  border-top: 1px solid #eee;
  background-color: #fff;
  font-size: 1em;
  line-height: 3;
}

a {
  color: #333;
  text-decoration: none;
}

.active {
  color: #FDC90B;
}
</style>
