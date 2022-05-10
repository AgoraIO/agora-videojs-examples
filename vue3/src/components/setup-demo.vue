<template>
  <video class="video-js" ref="videoRef"></video>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
import videojs, { VideoJsPlayer } from "agora-videojs";
// 样式文件已经在main.ts入口文件引入，无需重复引入
// import 'agora-videojs/dist/style.css'
import options from "../player-options";

export default defineComponent({
  setup() {
    const videoRef = ref<HTMLVideoElement | null>();
    let player: VideoJsPlayer | null = null;
    onMounted(() => {
      if (videoRef.value) {
        const HlsEvents = (videojs as any).HlsEvents;
        player = videojs(videoRef.value, options);
        player.on(HlsEvents.FRAG_LOADED, ({ data }: any) => {
          console.log(HlsEvents.FRAG_LOADED, data);
        });
      }
    });
    onBeforeUnmount(() => {
      if (player) {
        player.dispose();
      }
    });
    return {
      videoRef,
    };
  },
});
</script>

