<template>
  <div class="home">
    <div class="switch_tags">
      <span>午餐列表</span>
      <div class="history">历史</div>
    </div>
    <div class="show_foods">
    </div>
    <button>开始</button>
  </div>
</template>

<script>
export default {
  name: "toEat",
};
</script>

<style scoped>
.switch_tags {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  font-size: 1.2em;
  font-weight: bold;
}

.history {
  font-size: .8em;
  font-weight: normal;
}

.show_foods {
  position: fixed;
  top: 4em;
  bottom: 4em;
  left: 0;
  right: 0;
  background-color: #fff;
}

button {
  position: absolute;
  bottom: 5.6em;
  left: 50%;
  transform: translate(-50%);
  margin-top: 2em;
  padding: .8em 2.4em;
  background-color: #FDC90B;
  color: #fff;
  border-radius: 3em;
  border: 0;
}
</style>