if (chrome != undefined) {
    browser = chrome;
}
const setTheme = v => {
    document.body.classList.remove("auto-highlight-dark", "auto-highlight-light")
    document.body.classList.add("auto-highlight-" + (v.theme || "light"))
}

chrome.storage.local.get(["theme"], setTheme)

document.querySelectorAll("pre").forEach(el => {
    el.classList.add("language-java")
    Prism.highlightElement(el)
})

chrome.runtime.onMessage.addListener(() => {
    chrome.storage.local.get(["theme"], setTheme)
})
