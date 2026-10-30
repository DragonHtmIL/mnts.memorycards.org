function checkSettingsChanges() {
  if(document.getElementById("langsList").value === localStorage.getItem("lang")) {
    document.getElementById("applySettingsBtn").style.display = "none";
  }else{
    document.getElementById("applySettingsBtn").style.display = "block";
  }
};
function applySettings() {
  if(document.getElementById("applySettingsBtn").style.display === "none") {return;}
  localStorage.setItem("lang", document.getElementById("langsList").value);
  location.reload();
}