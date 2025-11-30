if (chrome != undefined) {
    browser = chrome;
}
const el = document.querySelector(".toggle-color-theme-button")

const apply = () => {
    const dark = el.classList.toggle("dark")
    browser.storage.local.set({ theme: dark ? "dark" : "light" })
    browser.tabs.query({}, tabs => tabs.forEach(t => browser.tabs.sendMessage(t.id, {})))
}

browser.storage.local.get(["theme"], v => el.classList.add(v.theme || "light"))
el.addEventListener("click", apply)
