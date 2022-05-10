<template>
  <video class="video-js" ref="videoRef"></video>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import options from '../player-options'
export default defineComponent({
  data():any{
    return {
      player:null
    }
  },
  mounted() {
    console.log(this.$refs.videoRef,options);
  },

  beforeUnmount(){
    if(this.player){
      this.player.dispose()
    }
  }
});
</script>

<style lang='scss' scoped></style>