function languagesContents() {
  var a000 = document.getElementById("winScore");
  var a001 = document.getElementById("noticeTitleLang");
  var a002 = document.getElementById("close");
//  var a011 = document.getElementById("rotateAlertText");
  if(localStorage.getItem("lang") === "en") {
    a000.innerHTML = "Congratulations! You found all pairs!";
    a001.innerHTML = "Game Over";
    a002.innerHTML = "Reset";
//    a011.innerHTML = "Please rotate your device to landscape mode.";
    document.title = "Super memory cards";
  }else
  if(localStorage.getItem("lang") === "ru") {
    a000.innerHTML = "Поздравляем! Вы нашли все пары!";
    a001.innerHTML = "Игра окончена";
    a002.innerHTML = "Сбросить";
//    a011.innerHTML = "Пожалуйста, поверните устройство в ландшафтный режим.";
    document.title = "Супер карты памяти";
  }else
  if(localStorage.getItem("lang") === "he") {
    a000.innerHTML = "מזל טוב! מצאתם את כל הזוגות!";
     a000.style.direction = "rtl";
    a001.innerHTML = "המשחק נגמר";
     a001.style.direction = "rtl";
     a001.style.textAlign = "right";
    a002.innerHTML = "איפוס";
//    a011.innerHTML = "אנא סובבו את המכשיר למצב אופקי.";
//     a011.style.direction = "rtl";
    document.title = "סופר כרטיסי זיכרון";
  }
}