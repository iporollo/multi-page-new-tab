// https://github.com/niutech/x-frame-bypass
document.write('<script id="x-frame-script" type="module" src="https://unpkg.com/x-frame-bypass"></script>');

document.addEventListener("DOMContentLoaded", () => {

    const iframeContainer = document.getElementById('iframe-container');

    chrome.storage.sync.get(['urls'], (syncObj) => {
        if (syncObj.urls.length > 0) {
            console.log(syncObj.urls)
            addFrames(iframeContainer, syncObj.urls);
        } else {
            // show empty content state
        }
    });
});

const addFrames = async (container, urls) => {
    const iframes = [];
    await urls.forEach(url => {
        const iframe = `<iframe class="iframe" is="x-frame-bypass" src=${url}></iframe>`;
        iframes.push(iframe);
    });
    container.innerHTML = iframes.join('');
}