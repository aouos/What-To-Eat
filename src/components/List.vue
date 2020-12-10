<template>
  <div class="list">
    <div class="food_tags">
      <span v-for="item in tags" :key="item">{{ item }}</span>
    </div>
    <div class="list_box">
      <div v-for="(val, index) in items" :key="val" class="item_card">
        <span>{{ val }}</span>
        <span @click="delItem(index)" class="del_item"></span>
      </div>
      <div class="add_item">
        <input
          type="text"
          v-model="addFood"
          maxlength="20"
          placeholder="加入清单"
        />
        <span @click="addItem"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "List",
  data() {
    return {
      addFood: "",
      tags: ["午餐列表"],
      items: store.items,
    };
  },
  methods: {
    delItem(idx) {
      this.items.splice(idx, 1);
    },
    addItem() {
      if (this.addFood) {
        this.items.push(this.addFood);
        this.addFood = "";
      }
    },
  },
};
</script>

<style scoped>
.list {
  height: inherit;
  padding: 0 1em;
}

.food_tags {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: var(--main-background, #fff);
  padding: 1em;
  color: var(--main-color, #333);
  text-align: left;
}

.food_tags span {
  margin-right: 0.8em;
}

.list_box {
  padding: 4em 0;
}

.item_card,
.add_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background-color: var(--main-background, #fff);
  padding: 1em;
  margin: 1.2em 0;
  border-radius: 0.5em;
  color: var(--main-color, #333);
  box-shadow: 2px 2px 8px var(--main-border, #eee);
}

.del_item {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url("../assets/delete.png") no-repeat center center;
  background-size: contain;
}

.add_item input {
  flex: 1;
  font-size: 1rem;
  margin-right: 1.5em;
  border: 1px solid #fff;
  border: 0;
  background-color: var(--main-background, #fff);
  box-shadow: none;
}

.add_item span {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  background: url("../assets/add.png") no-repeat center center;
  background-size: contain;
}
</style>