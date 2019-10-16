document.addEventListener("DOMContentLoaded", () => {

  const userInput = document.getElementById('website-text-area');

  chrome.storage.sync.get(['urls'], (syncObj) => {
    if (syncObj.urls.length > 0) {
      userInput.value = syncObj.urls.join('\n');
    }
  });

  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', () => {
    const urls = getUrls();
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({
      'urls': urls
    }, () => {
      // Notify that we saved.
      console.log('Entries saved');
    });
  });
});

const getUrls = () => {
  // need to get this element again to ensure that we have up to date information
  const userInput = document.getElementById('website-text-area').value;
  let urls = userInput.split('\n');
  urls = urls.filter(url => url.length > 1);
  return urls;
}