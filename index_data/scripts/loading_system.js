let loadedcont = 0;
let errorscont = 0;
let widthcont = 0;
const widths = 100;
const basePaths = {
  gui: "index_data/textures/gui/",
  mechas: "index_data/textures/cards/front/mecha/",
  pilots: "index_data/textures/cards/front/pilot/",
  cards: "index_data/textures/cards/"
};
const images = {
  gui: [
    "bg_overlay",
    "button",
    "close",
    "loading_progress",
    "notice",
    "reset",
    "side_panel",
    "smg_blue",
    "smg_green",
    "smg_red",
    "sp_opner_bg",
    "sp_opner_bg_h",
    "sp_opner_cs",
    "sp_opner_op",
    "windows_bg",
    "header"
  ],
  mechas: [
    "Akashic",
    "Alborada",
    "Andromeda",
    "Arthur",
    "Aurora",
    "Boltus",
    "Caramel",
    "Death Knell",
    "Doomlight",
    "Dreadwolf",
    "Firefox",
    "Firestar",
    "Flamenco",
    "Gabriel",
    "Gaia",
    "Guerilla Hunter",
    "Hotsteel",
    "Hurricane",
    "Jojo",
    "Lancelot",
    "Michael",
    "Nebula",
    "Neutron Star",
    "Northern Knight",
    "Pulsar",
    "Ranger",
    "Raven",
    "Shiranui",
    "Skyfall",
    "Skyfire",
    "Skylark",
    "Snow Mirage",
    "Tempest",
    "Trio of Enders",
    "Twilight",
    "Ventorus"
  ],
  pilots: [
    "Aya",
    "Belladonna",
    "Cyrus",
    "Fran",
    "Furanku",
    "Iori",
    "Ivan",
    "Jaka",
    "Jiu Chong",
    "Joanna",
    "Kije",
    "Kikina",
    "Lillian",
    "Lysa",
    "Matilda",
    "Mia",
    "Mila",
    "Mobius",
    "Nighthawk",
    "Ning",
    "Norma",
    "Opal",
    "Purity",
    "Red",
    "Rom",
    "Serena",
    "Shin",
    "Silver Deacon",
    "Tarantula",
    "Vanessa",
    "Villar",
    "Vita",
    "Yang",
    "Yulia",
    "Yutong",
    "Zoe"
  ],
  cards: [
    "card_back"
  ]
};
const extensions = {
  gui: [".png"],
  mechas: [".png"],
  pilots: [".png"],
  cards: [".png"]
};
const maxImages = Object.values(images).reduce((a, arr) => a + arr.length, 0);
function loadTextures() {
  const loadedBar = document.getElementById("loadedbar");
  if (!loadedBar) return console.error("Missing element: loadedbar");
  for (const [folder, list] of Object.entries(images)) {
    const base = basePaths[folder];
    const exts = extensions[folder] || extensions.default;
    if (!base) {
      console.warn(`⚠️ Missing base path for folder: ${folder}`);
      continue;
    }
    for (const name of list) {
      const img = document.createElement("img");
      img.dataset.folder = folder;
      img.dataset.name = name;
      img.dataset.extIndex = 0;
      img.src = base + name + exts[0];
      img.addEventListener("load", handleLoad);
      img.addEventListener("error", () => handleImageError(img, base, name, exts));
      loadedBar.appendChild(img);
    }
  }
};
function handleImageError(img, base, name, exts) {
  const currentIndex = parseInt(img.dataset.extIndex, 10);
  if (currentIndex + 1 < exts.length) {
    img.dataset.extIndex = currentIndex + 1;
    img.src = base + name + exts[currentIndex + 1];
  } else {
    handleError();
  }
};
function handleLoad() {
  loadedcont++;
  widthcont = (loadedcont / maxImages) * 100;
  const widther = document.getElementById("widther");
  if (widther) widther.style.width = widthcont + "%";
  document.getElementById("imageCount").innerHTML = `${loadedcont}/${maxImages}`;
  document.getElementById("widthernum").innerHTML = `${widthcont.toFixed(1)}% / ${widths}%`;
  if (loadedcont === maxImages) toDisplayNone();
};
function handleError() {
  errorscont++;
  const lang = localStorage.getItem("lang");
  const el = document.getElementById("loadingText");
  if (!el) return;
  const messages = {
    en: `Cant load ${errorscont} images, not found or removed...<br>maybe try reload.`,
    ru: `Невозможно загрузить ${errorscont} изображения, не найдены или удалены...<br>попробуйте перезагрузить.`,
    he: `לא ניתן לטעון ${errorscont} תמונות, לא נמצאו או הוסרו...<br>אולי תנסו לטעון מחדש.`
  };
  el.innerHTML = messages[lang] || messages.en;
};
function toDisplayNone() {
  initializeGame();
  autoRegistrations();
  document.getElementById("loading").style.display = "none";
};
