document.getElementById("saveBtn").addEventListener("click", () => {
    const videoSite = document.getElementById("videoSite").value;
    
    if (videoSite) {
      chrome.storage.sync.set({ videoSite: videoSite }, () => {
        document.getElementById("status").textContent = "Video site saved!";
        setTimeout(() => {
          document.getElementById("status").textContent = "";
        }, 2000);
      });
    } else {
      document.getElementById("status").textContent = "Please enter a URL.";
    }
  });
  
  chrome.storage.sync.get("videoSite", (result) => {
    if (result.videoSite) {
      document.getElementById("videoSite").value = result.videoSite;
    }
  });