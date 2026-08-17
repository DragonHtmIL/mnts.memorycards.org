window.addEventListener('load', function() {
  if (errored === false) {
    setTimeout(() => {
      document.getElementById("gameLogo").style.display = "none";
      loadTextures();
    }, 1000);
  }else{
    return;
  };
  setLanguage();
  iconAllLoad();
});
