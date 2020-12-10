<template>
  <div class="about">
    <img src="../assets/eat.png" alt="logo" />
    <div class="more_func">
      <span @click="switchTheme">{{ themeName }}</span>
      <span @click="popClass">功能说明</span>
      <span @click="popClass">软件下载</span>
      <span @click="popClass">关于我们</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      isNight: false,
    };
  },
  mounted() {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const bgcolor = style.getPropertyValue("--main-background");
    if (bgcolor === "#fff") {
      this.isNight = false;
    }
    if (bgcolor === "#06090F") {
      this.isNight = true;
    }
  },
  methods: {
    popClass() {
      alert("哇咔咔");
    },
    switchTheme() {
      console.log(this.isNight);
      const root = document.documentElement;
      if (this.isNight) {
        root.style.setProperty("--main-color", "#333");
        root.style.setProperty("--main-background", "#fff");
        root.style.setProperty("--main-active", "#fdc90b");
        root.style.setProperty("--main-border", "#eee");
      } else {
        root.style.setProperty("--main-color", "#C9D1D9");
        root.style.setProperty("--main-background", "#06090F");
        root.style.setProperty("--main-active", "#6E40C9");
        root.style.setProperty("--main-border", "#222");
      }
      this.isNight = !this.isNight;
    },
  },
  computed: {
    themeName() {
      return this.isNight ? "日常模式" : "夜间模式";
    },
  },
};
</script>

<style scoped>
.about {
  padding-top: 4em;
  width: inherit;
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
  margin-top: 2em;
}

.more_func span {
  display: block;
  color: var(--main-color, #333);
  padding: 1em 1.5em;
}
</style>