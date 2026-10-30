document.onkeydown = function (event) {
  event = (event || window.event);
  if(event.keyCode == 27) {
    if(document.getElementById("menu").style.display === "none") {
      document.getElementById("menu").style.display = "block";
    }else{
      document.getElementById("menu").style.display = "none";
    }
  }else
  if(event.keyCode == 8) {
    openSidePanel();
  }else
  if(event.keyCode == 13) {
    if(document.getElementById("menu").style.display === "block" && document.getElementById("applySettingsBtn").style.display === "block") {
      applySettings();
    }
  }
}