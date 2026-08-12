window.addEventListener('click', function() {
  if(document.getElementById("loading").style.display === "none" || document.getElementById("gameLogo").style.display === "none") {
    const main = document.body;
    const effect = document.createElement("div");
    effect.className = "click-effect";
    effect.id = "clckEff";
    effect.style.left = event.clientX + "px";
    effect.style.top = event.clientY + "px";
    main.appendChild(effect);
    setTimeout(() => {
      main.removeChild(effect);
    }, 600);
  }
});