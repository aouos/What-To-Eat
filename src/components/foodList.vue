<template>
  <div class="food_list">
    <div class="title">
      <span v-for="item in tags" :key="item">{{item}}</span>
    </div>
    <div class="list_box">
      <div v-for="(val, index) in items" :key="index" class="item_card">
        <span>{{ val }}</span>
        <span>删除</span>
      </div>
      <div class="add">
        <button>+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foodList",
  data() {
    return {
      tags: ["午餐列表", "晚饭"],
      items: ["魏家凉皮", "油泼面", "山西刀削面", "高小松", "张亮麻辣烫","魏家凉皮", "油泼面", "山西刀削面", "高小松", "张亮麻辣烫"],
    };
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
  margin-right: .8em;
}

.list_box {
  padding-top: 4.2em;
  padding-bottom: 4em;
}

.item_card {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 1em;
  margin: 1.2em 0;
  border-radius: .5em;
  box-shadow: 2px 2px 8px #eee;
}
</style>