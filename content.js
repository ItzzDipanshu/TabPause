function pauseVideo() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
      video.pause();
    }
  }
  
  function playVideo() {
    const video = document.querySelector('video');
    if (video && video.paused) {
      video.play();
    }
  }
  
  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "pause") {
      pauseVideo();
    } else if (request.action === "resume") {
      playVideo();
    }
  });