const elements = [
  "winScore",
  "noticeTitleLang",
  "menuSettings",
  "menuTitleLang",
  "pairs"
];
function setLanguage() {
  const lang = localStorage.getItem("lang");
  let texts;
  let direction;
  if (lang === "en" || lang === null) {
    texts = enTexts;
    direction = "ltr";
  } else if (lang === "ru") {
    texts = ruTexts;
    direction = "ltr";
  } else if (lang === "he") {
    texts = heTexts;
    direction = "rtl";
  } else {
    return;
  }
  document.title = texts[0];
  for (let i = 0; i < elements.length; i++) {
    const element = document.getElementById(elements[i]);
    if (element) {
      element.innerHTML = texts[i + 1];
    }
  }
  document.documentElement.setAttribute("dir", direction);
  document.documentElement.setAttribute("lang", lang);
}