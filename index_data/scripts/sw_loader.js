if(navigator.serviceWorker) {
  if(window.location.protocol === 'https:') {
    navigator.serviceWorker.register('/mnts.memorycards.org/sw.js',{scope: '/mnts.memorycards.org/'})
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      return false
    });
    document.getElementById("manifestTestLoad").setAttribute('href','/mnts.memorycards.org/manifest.webmanifest');
  }
}