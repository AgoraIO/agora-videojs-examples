<template>
  <video class="video-js" ref="videoRef"></video>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import options from "../player-options";
import videojs, { VideoJsPlayer } from "agora-videojs";
// 样式文件已经在main.ts入口文件引入，无需重复引入
// import 'agora-videojs/dist/style.css'

interface Data {
  player: VideoJsPlayer | null;
}
export default defineComponent({
  data(): Data {
    return {
      player: null,
    };
  },
  mounted() {
    const HlsEvents = (videojs as any).HlsEvents

    const videoEl = this.$refs.videoRef as HTMLVideoElement;
    
    this.player = videojs(videoEl, options);

    this.player.on(HlsEvents.FRAG_CHANGED,({data}:any)=>{
      console.log(HlsEvents.FRAG_CHANGED,data);
    })
  },

  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },
});
</script>