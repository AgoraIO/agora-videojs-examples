<template>
<video class="video-js" ref="videoRef"></video>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const videoRef = ref<HTMLVideoElement|null>()
    let player:any = null
    onMounted(()=>{
      // todo
    })
    onBeforeUnmount(()=>{
      if(player){
        player.dispose()
      }
    })
    return {
      videoRef
    }
  },
});
</script>

