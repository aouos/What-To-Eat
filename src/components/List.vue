<template>
  <div class="food_list">
    <div class="tags">
      <span v-for="item in tags" :key="item">{{ item }}</span>
    </div>
    <div class="list_box">
      <div v-for="(val, index) in items" :key="index" class="item_card">
        <span>{{ val }}</span>
        <span @click="delItem(index)" class="item_delete"></span>
      </div>
      <div class="add">
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
import { store } from "../store"

export default {
  name: "List",
  data() {
    return {
      addFood: "",
      tags: ["午餐列表"],
      items: store.items
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
.food_list {
  height: 100%;
  padding: 0 1em;
}

.tags {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  font-size: 1.2rem;
  background-color: #fff;
  padding: 1em;
  font-weight: bold;
  text-align: left;
}

.tags span {
  margin-right: 0.8em;
}

.list_box {
  padding: 4em 0;
}

.item_card,
.add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background-color: #fff;
  padding: 1em;
  margin: 1.2em 0;
  border-radius: 0.5em;
  box-shadow: 2px 2px 8px #eee;
}

.item_delete {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: url("../assets/delete.png") no-repeat center center;
  background-size: contain;
}

.add input {
  flex: 1;
  margin-right: 1.5em;
  border: 1px solid #fff;
  background-color: #fff;
  outline: none;
  box-shadow: none;
}

.add span {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border: 0;
  background: url("../assets/add.png") no-repeat center center;
  background-size: contain;
}
</style>