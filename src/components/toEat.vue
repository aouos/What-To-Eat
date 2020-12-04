<template>
  <div class="home">
    <div class="history">历史</div>
    <div class="switch_tags">
      <span>午餐列表 ▼</span>
    </div>
    <div class="show_foods">
      <p>展示区域</p>
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
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.history {
  position: fixed;
  top: 0;
  right: 0;
  width: 4em;
  height: 4em;
  line-height: 4em;
}

.switch_tags {
  padding: 1em;
  font-size: 1.2em;
  font-weight: bold;
}

.show_foods {
  width: 100%;
  flex: 1;
  padding-top: 7em;
  background-color: #fff;
}

button {
  position: absolute;
  bottom: 5em;
  left: 50%;
  transform: translate(-50%);
  margin-top: 2em;
  padding: 1em 2.4em;
  background-color: orange;
  color: #fff;
  border-radius: 3em;
  border: 0;
}
</style>