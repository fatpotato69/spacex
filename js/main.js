

var instance = new vidbg('.video', {
    mp4: 'video/world.mp4', // URL or relative path to MP4 video
    webm: 'video/world.webm', // URL or relative path to webm video
    poster: 'img/poster.jpg', // URL or relative path to fallback image
   
  });

  var rellax = new Rellax('.rellax', {
    speed: 16,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
    if (document.body.clientWidth < 576) {
      rellax.destroy();
    }
    AOS.init();