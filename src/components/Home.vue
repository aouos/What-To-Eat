<template>
  <div class="home">
    <div class="switch_tags">
      <span>午餐列表</span>
      <div class="history" @click="toHistory"></div>
    </div>
    <div class="food_menu">
      <p v-if="isShow" class="choice">{{ choice }}</p>
      <div class="menu_list" v-else>
        <span v-for="val in list" :key="val" class="show_item">
          {{ val }}
        </span>
      </div>
    </div>
    <span class="click_me" @click="toEat">Click Me !</span>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "Home",
  data() {
    return {
      isShow: false,
      list: store.items,
      choice: "",
    };
  },
  methods: {
    toHistory() {
      alert("History");
    },
    toEat() {
      this.isShow = true;
      let i = 1;
      let num = 0;
      let len = this.list.length;
      setInterval(() => {
        if (i < 50) {
          num = Math.floor(Math.random() * 10) % len;
          this.choice = this.list[num];
          console.log(this.list[num]);
        }
        i++;
      }, 20);
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: inherit;
}

.switch_tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: var(--main-color, #333);
  font-weight: bold;
  padding: 1em;
}

.history {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url("../assets/history.png") no-repeat center center;
  background-size: contain;
}

.food_menu {
  flex: 1;
  background-color: var(--main-background, #fff);
  color: var(--main-color, #333);
  overflow: hidden;
}

.choice,
.menu_list {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  font-size: 2rem;
  line-height: 2;
  width: 100%;
  text-align: center;
}

.choice {
  color: var(--main-active, #fdc90b);
}

.show_item {
  display: block;
  font-size: 1rem;
  margin: 1em 0;
}

.click_me {
  position: absolute;
  bottom: 5em;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
  font-size: 1rem;
  padding: 0.8em 1.6em;
  background-color: var(--main-active, #fdc90b);
  color: #fff;
  border-radius: 2em;
}
</style>