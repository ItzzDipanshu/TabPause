chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.storage.sync.get(["videoSite"], (result) => {
      const videoSite = result.videoSite || '';
      chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.includes(videoSite)) {
          chrome.tabs.sendMessage(tab.id, { action: "resume" });
        } else {
          chrome.tabs.query({}, (tabs) => {
            tabs.forEach((t) => {
              if (t.url.includes(videoSite)) {
                chrome.tabs.sendMessage(t.id, { action: "pause" });
              }
            });
          });
        }
      });
    });
  });