<template>
  <div id="app">
    <router-view></router-view>
    <div class="tabbar">
      <div>
        <router-link :to="{ name: 'eat' }">首页</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'list' }">列表</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'about' }">我的</router-link>
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
#app {
  widows: 100%;
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
  color: #333;
  font-size: .8em;
  line-height: 4;
}

a {
  color: #333;
  text-decoration: none;
}
</style>
