let darkModeEnabled = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle-dark") {
    darkModeEnabled = !darkModeEnabled;
    applyDarkMode(darkModeEnabled);
  }
});

function applyDarkMode(enable) {
  if (enable) {
    document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
    document.querySelectorAll("img, video").forEach(el => {
      el.style.filter = "invert(1) hue-rotate(180deg)";
    });
  } else {
    document.documentElement.style.filter = "";
    document.querySelectorAll("img, video").forEach(el => {
      el.style.filter = "";
    });
  }
}
