// Language switch (SR / EN). Remembers the choice in this browser.
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-set-lang]");

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    buttons.forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-set-lang") === lang);
    });
    try { localStorage.setItem("lp-lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("lp-lang"); } catch (e) {}
  setLang(saved === "en" ? "en" : "sr");

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-set-lang")); });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
