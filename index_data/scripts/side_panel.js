function openSidePanel() {
  const panel = document.getElementById("sidePanel");
  const opener = document.getElementById("spOpener");
  const area = document.getElementById("gameArea");
  const header = document.getElementById("header");
  if(panel.classList.contains("hiddened")) {
    panel.classList.remove("hiddened");
    area.style.width = `${screen.width * 0.9}px`;
    header.style.width = "90%";
    opener.classList.add("sp-opened");
  }else{
    panel.classList.add("hiddened");
    area.style.width = `${screen.width}px`;
    header.style.width = "100%";
    opener.classList.remove("sp-opened");
  }
}