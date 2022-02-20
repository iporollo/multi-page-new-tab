// https://github.com/niutech/x-frame-bypass
document.write('<script id="x-frame-script" type="module" src="https://unpkg.com/x-frame-bypass-mpnt"></script>');

document.addEventListener("DOMContentLoaded", () => {

    const iframeContainer = document.getElementById('iframe-container');

    chrome.storage.sync.get(['urls'], (syncObj) => {
        if (syncObj.urls.length > 0) {
            addFrames(iframeContainer, syncObj.urls);
        } else {
            document.body.innerHTML = `<div>Open popup & enter websites to display.</div>`
        }
    });
});

const addFrames = async (container, urls) => {
    const iframes = [];
    await urls.forEach(url => {
        const iframe = `<iframe class="iframe" is="x-frame-bypass-mpnt" src=${url}></iframe>`;
        iframes.push(iframe);
    });
    container.innerHTML = iframes.join('');
}