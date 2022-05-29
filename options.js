const textarea = document.getElementById("textarea");
const save = document.getElementById("save");
const checkbox = document.getElementById("checkbox");

save.addEventListener("click", () => {
  const blocked = textarea.value.split("\n").map(s => s.trim()).filter(Boolean);
  chrome.storage.sync.set({ blocked });
  console.log(blocked)
});

checkbox.addEventListener("change", (event) => {
  const enabled = event.target.checked;
  chrome.storage.sync.set({ enabled });
  console.log(enabled)
});

window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["blocked", "enabled"], function (sync) {
    const { blocked, enabled } = sync;
    if (Array.isArray(blocked)) {
      textarea.value = blocked.join("\n");
      checkbox.checked = enabled;
    }
  });
});