<template>
  <div class="home">
    <div class="switch_tags">
      <span>午餐列表</span>
      <div class="history" @click="toHistory"></div>
    </div>
    <div class="show_foods">
      <span v-for="val in list" :key="val" class="show_item">
        {{ val }}
      </span>
    </div>
    <span class="click_me" @click="toEat">Click Me !</span>
  </div>
</template>

<script>
import { store } from "../store"

export default {
  name: "Home",
  data() {
    return {
      list: store.items
    }
  },
  methods: {
    toHistory() {
      alert('History');
    },
    toEat() {
      let len = this.list.length;
      let num = Math.floor(Math.random() * 10) % len;
      alert(this.list[num]);
    }
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.switch_tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  font-size: 1.2rem;
  font-weight: bold;
}

.history {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url("../assets/history.png") no-repeat center center;
  background-size: contain;
}

.show_foods {
  flex: 1;
  background-color: #fff;
  overflow: hidden;
}

.show_item {
  display: block;
  font-size: 1rem;
  margin: 1em 0;
}

.click_me {
  position: absolute;
  font-size: 1rem;
  bottom: 5em;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
  padding: 0.8em 1.6em;
  background-color: #fdc90b;
  color: #fff;
  border-radius: 2em;
}
</style>