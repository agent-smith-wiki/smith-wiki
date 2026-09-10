// Wiki search = Google scoped to this site. Delegated submit handler so it works
// regardless of inline-handler policy; opens results in a new tab.
document.addEventListener("submit", function (e) {
  var f = e.target;
  if (!f || f.getAttribute("role") !== "search") return;
  e.preventDefault();
  var q = ((f.q && f.q.value) || "").trim();
  if (!q) return;
  var url = "https://www.google.com/search?q=" + encodeURIComponent("site:smith.wiki " + q);
  window.open(url, "_blank", "noopener");
});
