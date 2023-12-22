chrome.runtime.onInstalled.addListener(() => {
    console.log("amex-offers installed")
});

const offers = 'https://global.americanexpress.com/offers/eligible'

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(offers)) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id,
                allFrames: true
            },
            files: ["amex-offers.js"],
        }).then(() => console.log("amex script injected"));
    } else {
        console.log("not on amex offers page")
    }
});
