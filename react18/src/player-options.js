const options =  {
  width: 600,
  height: 300,
  controls: true,
  autoplay: true,
  sources: [
    {
      src: "https://api.dogecloud.com/player/get.m3u8?vcode=5ac682e6f8231991&userId=17&ext=.m3u8",
      type: "video/hls",
    },
  ],
};


export default options