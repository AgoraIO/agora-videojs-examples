<template>
  <div id="app">
    <video class="video-js" ref="videoRef"></video>
  </div>
</template>

<script>
import videojs from "agora-videojs";
// 样式文件已经在main.js中引入，无需重复引入
// import 'agora-videojs/dist/style.css'

const isDev = process.env.NODE_ENV === "development";

const options = {
  width: 600,
  height: 300,
  controls: true,
  autoplay: true,
  html5: {
    hls: {
      config: {
        // 在开发环境下，会出现ReferenceError: _typeof is not defined的问题。
        // 这是因为hls.js日志模式下，会有`typeof debugConfig === 'object'`判断
        // vue-cli工具会把typeof转化为_typeof，但是_typeof并没有定义，所以导致出现问题
        // 这是`babel`一个已知bug（已经修复），但是`vue-cli`脚手架还有问题，这个问题只会在开发环境下出现，生产环境下是不会出现的，
        // 所以我们可以通过在开发环境下设置`debug:true`来规避这个问题
        debug: isDev,
      },
    },
  },
  sources: [
    {
      src: "https://api.dogecloud.com/player/get.m3u8?vcode=5ac682e6f8231991&userId=17&ext=.m3u8",
      type: "video/hls",
    },
  ],
};

export default {
  name: "App",
  mounted() {
    const HlsEvents = videojs.HlsEvents;
    this.player = videojs(this.$refs.videoRef, options);
    this.player.on(HlsEvents.FRAG_CHANGED, ({ data }) => {
      console.log(HlsEvents.FRAG_CHANGED, data);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>


