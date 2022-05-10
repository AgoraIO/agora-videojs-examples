<template>
  <div id="app">
    <video class="video-js" ref="videoRef"></video>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    console.log(this.$refs.videoRef);
  },
  beforeDestroy(){
    if(this.player){
      this.player.dispose()
    }
  }
}
</script>


