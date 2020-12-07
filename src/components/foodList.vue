<template>
  <div class="food_list">
    <div class="title">
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
export default {
  name: "foodList",
  data() {
    return {
      addFood: "",
      tags: ["午餐列表", "晚饭"],
      items: [
        "魏家凉皮",
        "油泼面",
        "山西刀削面",
        "高小松",
        "张亮麻辣烫",
        "驴肉火烧",
      ],
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
  padding: 0 1em;
  background-color: #fff;
}

.title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
  padding: 1em;
  font-size: 1.2em;
  font-weight: bold;
  text-align: left;
}

.title span {
  margin-right: 0.8em;
}

.list_box {
  padding-top: 4.2em;
  padding-bottom: 4em;
}

.item_card,
.add {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-size: 1em 1em;
}

.add input {
  flex: 1;
  margin-right: 1.5em;
  border: 1px solid #fff;
  outline: none;
}

.add span {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border: 0;
  background: url("../assets/add.png") no-repeat center center;
  background-size: 1em 1em;
}
</style>