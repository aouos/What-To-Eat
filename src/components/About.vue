<template>
  <div class="about">
    <p><b>What to eat?</b></p>
    <img src="../assets/eat.png" alt="" />
    <div class="more_func">
      <span @click="popClass">功能说明</span>
      <span @click="popClass">软件下载</span>
      <span @click="popClass">关于我们</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    popClass() {
      alert("哇咔咔");
    }
  },
};
</script>

<style scoped>
.about {
  padding-top: 2em;
  width: 100%;
  box-sizing: border-box;
}

img {
  margin-top: 2em;
  width: 5em;
  height: 5em;
}

.more_func {
  display: flex;
  margin: 2em 1em;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 2em;
}

.more_func span {
  display: block;
  padding: 1em 1.5em;
}
</style>