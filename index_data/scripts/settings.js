const sttngsContainer = document.getElementById("settings");
function settingLanguages() {
  const langsListIds = ["en", "ru", "he"];
  const settingTitle = {
    en: "Language",
    he: "שפה",
    ru: "Язык"
  }[lang] || "Languages";
  const langNames = {
    en: {
      en: "English",
      he: "English (אנגלית)",
      ru: "English (Английский)"
    },
    ru: {
      en: "Русский (Russian)",
      he: "Русский (רוסית)",
      ru: "Русский"
    },
    he: {
      en: "עברית (Hebrew)",
      he: "עברית",
      ru: "עברית (Иврит)"
    }
  };
  const container = document.createElement("div");
  const label = document.createElement("label");
  const select = document.createElement("select");
  container.classList.add("setting-container");
  select.id = "langsList";
  label.textContent = settingTitle;
  label.setAttribute("for", select.id);
  sttngsContainer.appendChild(container);
  container.appendChild(label);
  container.appendChild(select);
  langsListIds.forEach(id => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = langNames[id][lang] || id;
    select.appendChild(option);
  });
  select.addEventListener("change", () => {
    checkSettingsChanges();
  });
  select.value = lang;
}
settingLanguages();