const elements = [
  "winScore",
  "noticeTitleLang",
  "menuSettings",
  "menuTitleLang",
  "pairs",
  "applySettingsBtn"
];
function setLanguage() {
  let texts;
  let direct;
  if (lang === "en" || lang === null) {
    texts = enTexts;
    direct = "ltr";
  } else if (lang === "ru") {
    texts = ruTexts;
    direct = "ltr";
  } else if (lang === "he") {
    texts = heTexts;
    direct = "rtl";
  } else {
    return;
  }
  document.title = texts[0];
  for (let i = 0; i < elements.length; i++) {
    const element = document.getElementById(elements[i]);
    if (element) {
      element.innerHTML = texts[i + 1];
      element.style.direction = direct;
    }
    if(lang === "he") {
      if (document.getElementById(elements[3])) document.getElementById(elements[3]).style.textAlign = "right";
      if (document.getElementById(elements[3])) document.getElementById(elements[1]).style.textAlign = "right";
    }else{
      if (document.getElementById(elements[3])) document.getElementById(elements[3]).style.textAlign = "left";
      if (document.getElementById(elements[3])) document.getElementById(elements[1]).style.textAlign = "left";
    }
  }
  document.documentElement.setAttribute("dir", direct);
  document.documentElement.setAttribute("lang", lang);
}