function autoLanguageLoadNew() {
  if(localStorage.getItem("lang") === null) {
    // load language
    localStorage.setItem("lang", "en");
    window.location.reload();
  }else
  if(localStorage.getItem("lang") === "") {
    // load language
    localStorage.setItem("lang", "en");
    window.location.reload();
  }else{
    return false;
  }
};
const dimensions = [
  "16",
  "32",
  "48",
  "76",
  "96",
  "120",
  "128",
  "144",
  "152",
  "167",
  "180",
  "192",
  "196",
  "228",
  "256",
  "300",
  "384",
  "512"
];
function iconAllLoad() {
  var favicon = document.createElement('link');
  var favicon16 = document.createElement('link');
  var favicon32 = document.createElement('link');
  var favicon48 = document.createElement('link');
  var favicon76 = document.createElement('link');
  var favicon96 = document.createElement('link');
  var favicon120 = document.createElement('link');
  var favicon128 = document.createElement('link');
  var favicon144 = document.createElement('link');
  var favicon152 = document.createElement('link');
  var favicon167 = document.createElement('link');
  var favicon180 = document.createElement('link');
  var favicon192 = document.createElement('link');
  var favicon196 = document.createElement('link');
  var favicon228 = document.createElement('link');
  var favicon256 = document.createElement('link');
  var favicon300 = document.createElement('link');
  var favicon384 = document.createElement('link');
  var favicon512 = document.createElement('link');
  subiconCode = "index_data/textures/system/icon_0.png";
  subiconCode16 = "index_data/textures/system/icon_" + dimensions[0] + ".png";
  subiconCode32 = "index_data/textures/system/icon_" + dimensions[1] + ".png";
  subiconCode48 = "index_data/textures/system/icon_" + dimensions[2] + ".png";
  subiconCode76 = "index_data/textures/system/icon_" + dimensions[3] + ".png";
  subiconCode96 = "index_data/textures/system/icon_" + dimensions[4] + ".png";
  subiconCode120 = "index_data/textures/system/icon_" + dimensions[5] + ".png";
  subiconCode128 = "index_data/textures/system/icon_" + dimensions[6] + ".png";
  subiconCode144 = "index_data/textures/system/icon_" + dimensions[7] + ".png";
  subiconCode152 = "index_data/textures/system/icon_" + dimensions[8] + ".png";
  subiconCode167 = "index_data/textures/system/icon_" + dimensions[9] + ".png";
  subiconCode180 = "index_data/textures/system/icon_" + dimensions[10] + ".png";
  subiconCode192 = "index_data/textures/system/icon_" + dimensions[11] + ".png";
  subiconCode196 = "index_data/textures/system/icon_" + dimensions[12] + ".png";
  subiconCode228 = "index_data/textures/system/icon_" + dimensions[13] + ".png";
  subiconCode256 = "index_data/textures/system/icon_" + dimensions[14] + ".png";
  subiconCode300 = "index_data/textures/system/icon_" + dimensions[15] + ".png";
  subiconCode384 = "index_data/textures/system/icon_" + dimensions[16] + ".png";
  subiconCode512 = "index_data/textures/system/icon_" + dimensions[17] + ".png";
  favicon.href = subiconCode;
  favicon.rel = 'icon';
  favicon16.href = subiconCode16;
  favicon16.rel = 'icon';
  favicon16.sizes = dimensions[0] + "x" + dimensions[0];
  favicon32.href = subiconCode32;
  favicon32.rel = 'icon';
  favicon32.sizes = dimensions[1] + "x" + dimensions[1];
  favicon48.href = subiconCode48;
  favicon48.rel = 'icon';
  favicon48.sizes = dimensions[2] + "x" + dimensions[2];
  favicon76.href = subiconCode76;
  favicon76.rel = 'icon';
  favicon76.sizes = dimensions[3] + "x" + dimensions[3];
  favicon96.href = subiconCode96;
  favicon96.rel = 'icon';
  favicon96.sizes = dimensions[4] + "x" + dimensions[4];
  favicon120.href = subiconCode120;
  favicon120.rel = 'icon';
  favicon120.sizes = dimensions[5] + "x" + dimensions[5];
  favicon128.href = subiconCode128;
  favicon128.rel = 'icon';
  favicon128.sizes = dimensions[6] + "x" + dimensions[6];
  favicon144.href = subiconCode144;
  favicon144.rel = 'icon';
  favicon144.sizes = dimensions[7] + "x" + dimensions[7];
  favicon152.href = subiconCode152;
  favicon152.rel = 'icon';
  favicon152.sizes = dimensions[8] + "x" + dimensions[8];
  favicon167.href = subiconCode167;
  favicon167.rel = 'icon';
  favicon167.sizes = dimensions[9] + "x" + dimensions[9];
  favicon180.href = subiconCode180;
  favicon180.rel = 'icon';
  favicon180.sizes = dimensions[10] + "x" + dimensions[10];
  favicon192.href = subiconCode192;
  favicon192.rel = 'icon';
  favicon192.sizes = dimensions[11] + "x" + dimensions[11];
  favicon196.href = subiconCode196;
  favicon196.rel = 'icon';
  favicon196.sizes = dimensions[12] + "x" + dimensions[12];
  favicon228.href = subiconCode228;
  favicon228.rel = 'icon';
  favicon228.sizes = dimensions[13] + "x" + dimensions[13];
  favicon256.href = subiconCode256;
  favicon256.rel = 'icon';
  favicon256.sizes = dimensions[14] + "x" + dimensions[14];
  favicon300.href = subiconCode300;
  favicon300.rel = 'icon';
  favicon300.sizes = dimensions[15] + "x" + dimensions[15];
  favicon384.href = subiconCode384;
  favicon384.rel = 'icon';
  favicon384.sizes = dimensions[16] + "x" + dimensions[16];
  favicon512.href = subiconCode512;
  favicon512.rel = 'icon';
  favicon512.sizes = dimensions[17] + "x" + dimensions[17];
  document.head.appendChild(favicon);
  document.head.appendChild(favicon16);
  document.head.appendChild(favicon32);
  document.head.appendChild(favicon48);
  document.head.appendChild(favicon76);
  document.head.appendChild(favicon96);
  document.head.appendChild(favicon120);
  document.head.appendChild(favicon128);
  document.head.appendChild(favicon144);
  document.head.appendChild(favicon152);
  document.head.appendChild(favicon167);
  document.head.appendChild(favicon180);
  document.head.appendChild(favicon192);
  document.head.appendChild(favicon196);
  document.head.appendChild(favicon228);
  document.head.appendChild(favicon256);
  document.head.appendChild(favicon300);
  document.head.appendChild(favicon384);
  document.head.appendChild(favicon512);
};
if ('getBattery' in navigator) {
  navigator.getBattery().then(function (battery) {
    function updateBatteryStatus() {
      document.getElementById("batteryLevel").innerHTML = battery.level * 100;
      document.getElementById('batteryCharge').innerHTML = battery.charging ? '⨭' : '⨴️';
    }
    updateBatteryStatus();
    battery.addEventListener('levelchange', updateBatteryStatus);
    battery.addEventListener('chargingchange', updateBatteryStatus);
  });
} else {
  console.log('Battery Status API is not supported in this browser.');
};
navigator.getBattery().then(function (battery) {
  function showAllBatteryInfo() {
    editChargeInfo();
    editLevelInfo();
  }
  showAllBatteryInfo();
  battery.addEventListener('chargingchange', function () {
    editChargeInfo();
  });
  function editChargeInfo() {
    var baseBttry = document.getElementById('batteryCharge');
    var baseInBatteryProg = document.getElementById("inBatteryProgress");
    var baseBatteryCharge = (battery.charging ? "⨭" : "⨴️");
    baseBttry.innerText = baseBatteryCharge;
    if (baseBttry.innerHTML === "⨴️") {
      baseBttry.style.color = "black";
      baseInBatteryProg.style.backgroundImage = "var(--battery-prog-normal)";
    } else {
      baseBttry.style.color = "lime";
      baseInBatteryProg.style.backgroundImage = "var(--battery-prog-charging)";
    };
  };
  battery.addEventListener('levelchange', function () {
    editLevelInfo();
  });
  battery.addEventListener('chargingchange', function () {
    editChargeInfo();
  });
  function editLevelInfo() {
    var baseBatteryLevel = document.getElementById('batteryLevel');
    var baseBttry = document.getElementById('batteryCharge');
    var baseInBatteryProg = document.getElementById("inBatteryProgress");
    var batteryLevel = battery.level * 100;
    var roundedBatteryLevel = batteryLevel.toFixed(0);
    baseBatteryLevel.innerText = roundedBatteryLevel + "%";
    baseInBatteryProg.style.height = baseBatteryLevel.innerHTML;
    if (roundedBatteryLevel < 20 && baseBttry.innerHTML === "⨴️") {
      baseBttry.style.color = "red";
      baseInBatteryProg.style.backgroundImage = "var(--battery-prog-low)";
    }else
    if(roundedBatteryLevel < 20 && baseBttry.innerHTML === "⨭") {
      baseBttry.style.color = "lime";
      baseInBatteryProg.style.backgroundImage = "var(--battery-prog-charging)";
    }else
    if(roundedBatteryLevel > 20 && baseBttry.innerHTML === "⨴️") {
      baseBttry.style.color = "black";
      baseInBatteryProg.style.backgroundImage = "var(--battery-prog-normal)";
    }else
    if(roundedBatteryLevel > 20 && baseBttry.innerHTML === "⨭") {
      baseBttry.style.color = "lime";
      baseInBatteryProg.style.backgroundImage = "var(--battery-prog-charging)";
    }
  };
});
function displayTime() {
  if(localStorage.getItem("lang") == "en") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let monthswin = timeNow.getMonth() + 1;
    monthswin < 10 ? "0" + monthswin : monthswin.toFixed();
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("clock").innerHTML = hoursOfDay + ":" + minutes;
    if (navigator.userAgent.match(/Android/i)) {
      document.getElementById("calendar").innerHTML = today + " | " + todaynum + " " + tomonths + " " + year;
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      document.getElementById("calendar").innerHTML = today + " " + todaynum + " " + tomonths;
    } else if (navigator.userAgent.match(/Windows/i)) {
      document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    } else {
      document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    }
  }else
  if(localStorage.getItem("lang") == "ru") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб","Вс"]
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["Янв","Февр","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Дек"];
    let monthswin = timeNow.getMonth() + 1;
    monthswin < 10 ? "0" + monthswin : monthswin.toFixed();
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("clock").innerHTML = hoursOfDay + ":" + minutes;
    if (navigator.userAgent.match(/Android/i)) {
      document.getElementById("calendar").innerHTML = today + " | " + todaynum + " " + tomonths + " " + year;
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      document.getElementById("calendar").innerHTML = today + " " + todaynum + " " + tomonths;
    } else if (navigator.userAgent.match(/Windows/i)) {
      document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    } else {
      document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    }
  }else
  if(localStorage.getItem("lang") == "he") {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let weekDay = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת","ראשון"];
    let today = weekDay[timeNow.getDay()];
    let todaynum = timeNow.getDate();
    let months = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];
    let monthswin = timeNow.getMonth() + 1;
    monthswin < 10 ? "0" + monthswin : monthswin.toFixed();
    let tomonths = months[timeNow.getMonth()];
    let year = timeNow.getFullYear();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("clock").innerHTML = hoursOfDay + ":" + minutes;
    if (navigator.userAgent.match(/Android/i)) {
      document.getElementById("calendar").innerHTML = today + " | " + todaynum + " " + tomonths + " " + year;
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      document.getElementById("calendar").innerHTML = today + " " + todaynum + " " + tomonths;
    } else if (navigator.userAgent.match(/Windows/i)) {
      document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    } else {
      document.getElementById("calendar").innerHTML = todaynum + "/" + monthswin + "/" + year;
    }
  }
};
document.addEventListener('DOMContentLoaded', function() {
  const portraitOverlay = document.getElementById('portraitOverlay');
  function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
      portraitOverlay.style.display = 'flex';
    } else {
      portraitOverlay.style.display = 'none';
    }
  }
  checkOrientation();
  window.addEventListener('orientationchange', checkOrientation);
  window.addEventListener('resize', checkOrientation);
});
function deviceTypeElementsRegistration() {
  if (navigator.userAgent.match(/Android/i)) {
    document.body.classList.add("android");
  }
}