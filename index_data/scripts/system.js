const gameBoard = document.getElementById('gameBoard');
const messageDisplay = document.getElementById('message');
const resetBoardButton = document.getElementById('close');
const container = document.getElementById("smgContiner");
const language = localStorage.getItem("lang") || "en";
let gold = localStorage.getItem("goldStorage");
let crystal = localStorage.getItem("crystalStorage");
const pilotMechaPairs = [
  {id: 'aya',
   img1: 'index_data/textures/cards/front/pilot/Aya.png',
   img2: 'index_data/textures/cards/front/mecha/Shiranui.png',
   pilot: { en: "Aya", ru: "Ая", he: "איה" },
   mecha: { en: "Shiranui", ru: "Ширануи", he: "שיראנוי" }
  },
  {id: 'belladona',
   img1: 'index_data/textures/cards/front/pilot/Belladona.png',
   img2: 'index_data/textures/cards/front/mecha/Death Knell.png',
   pilot: { en: "Belladonna", ru: "Белладонна", he: "בלדונה" },
   mecha: { en: "Death Knell", ru: "Погребальный звон", he: "קת המוות" }
  },
  {id: 'cyrus',
   img1: 'index_data/textures/cards/front/pilot/Cyrus.png',
   img2: 'index_data/textures/cards/front/mecha/Trio of Enders.png',
   pilot: { en: "Cyrus", ru: "Сайрус", he: "סיירוס" },
   mecha: { en: "Trio of Enders", ru: "Трио Эндеров", he: "שלישייה של אנדרים" }
  },
  {id: 'fran',
   img1: 'index_data/textures/cards/front/pilot/Fran.png',
   img2: 'index_data/textures/cards/front/mecha/Twilight.png',
   pilot: { en: "Fran", ru: "Фран", he: "פרן" },
   mecha: { en: "Twilight", ru: "Сумерки", he: "דמדום" }
  },
  {id: 'furanku',
   img1: 'index_data/textures/cards/front/pilot/Furanku.png',
   img2: 'index_data/textures/cards/front/mecha/Tempest.png',
   pilot: { en: "Furanku", ru: "Фуранку", he: "פורנקו" },
   mecha: { en: "Tempest", ru: "Темпест", he: "טמפסט" }
  },
  {id: 'iori',
   img1: 'index_data/textures/cards/front/pilot/Iori.png',
   img2: 'index_data/textures/cards/front/mecha/Skylark.png',
   pilot: { en: "Iori", ru: "Иори", he: "איורי" },
   mecha: { en: "Skylark", ru: "Скайларк", he: "סקיילארק" }
  },
  {id: 'ivan',
   img1: 'index_data/textures/cards/front/pilot/Ivan.png',
   img2: 'index_data/textures/cards/front/mecha/Hotsteel.png',
   pilot: { en: "Ivan", ru: "Иван", he: "איוון" },
   mecha: { en: "Hotsteel", ru: "Хотстил", he: "הוטסטיל" }
  },
  {id: 'jaka',
   img1: 'index_data/textures/cards/front/pilot/Jaka.png',
   img2: 'index_data/textures/cards/front/mecha/Northern Knight.png',
   pilot: { en: "Jaka", ru: "Джака", he: "ג'קה" },
   mecha: { en: "Northern Knight", ru: "Северный Рыцарь", he: "אביר צפוני" }
  },
  {id: 'jiuCong',
   img1: 'index_data/textures/cards/front/pilot/Jiu Cong.png',
   img2: 'index_data/textures/cards/front/mecha/Ventorus.png',
   pilot: { en: "Jiu Chong", ru: "Джю Чонг", he: "ג'יו צ'ונג" },
   mecha: { en: "Ventorus", ru: "Венторус", he: "ונטורוס" }
  },
  {id: 'joanna',
   img1: 'index_data/textures/cards/front/pilot/Joanna.png',
   img2: 'index_data/textures/cards/front/mecha/Andromeda.png',
   pilot: { en: "Joanna", ru: "Джоанна", he: "ג'ואנה" },
   mecha: { en: "Andromeda", ru: "Андромеда", he: "אנדרומדה" }
  },
  {id: 'kije',
   img1: 'index_data/textures/cards/front/pilot/Kije.png',
   img2: 'index_data/textures/cards/front/mecha/Guerilla Hunter.png',
   pilot: { en: "Kije", ru: "Каидж", he: "קייג" },
   mecha: { en: "Guerilla Hunter", ru: "Партизан Охотник", he: "צייד גרילה" }
  },
  {id: 'kikina',
   img1: 'index_data/textures/cards/front/pilot/Kikina.png',
   img2: 'index_data/textures/cards/front/mecha/Jojo.png',
   pilot: { en: "Kikina", ru: "Кикина", he: "קיקינה" },
   mecha: { en: "Jojo", ru: "ДЖОДЖО", he: "ג'וג'ו" }
  },
  {id: 'lillian',
   img1: 'index_data/textures/cards/front/pilot/Lillian.png',
   img2: 'index_data/textures/cards/front/mecha/Neutron Star.png',
   pilot: { en: "Lillian", ru: "Лиллиан", he: "ליליאן" },
   mecha: { en: "Neutron Star", ru: "Нейтронная Звезда", he: "כוכב ניוטרון" }
  },
  {id: 'lysa',
   img1: 'index_data/textures/cards/front/pilot/Lysa.png',
   img2: 'index_data/textures/cards/front/mecha/Gaia.png',
   pilot: { en: "Lysa", ru: "Лиза", he: "ליסה" },
   mecha: { en: "Gaia", ru: "Гайя", he: "גאיה" }
  },
  {id: 'matilda',
   img1: 'index_data/textures/cards/front/pilot/Matilda.png',
   img2: 'index_data/textures/cards/front/mecha/Lancelot.png',
   pilot: { en: "Matilda", ru: "Матильда", he: "מטילדה" },
   mecha: { en: "Lancelot", ru: "Ланселот", he: "לנסלוט" }
  },
  {id: 'mia',
   img1: 'index_data/textures/cards/front/pilot/Mia.png',
   img2: 'index_data/textures/cards/front/mecha/Nebula.png',
   pilot: { en: "Mia", ru: "Миа", he: "מיאה" },
   mecha: { en: "Nebula", ru: "Небула", he: "נבולה" }
  },
  {id: 'mila',
   img1: 'index_data/textures/cards/front/pilot/Mila.png',
   img2: 'index_data/textures/cards/front/mecha/Caramel.png',
   pilot: { en: "Mila", ru: "Мила", he: "מילה" },
   mecha: { en: "Caramel", ru: "Карамель", he: "קרמל" }
  },
  {id: 'mobius',
   img1: 'index_data/textures/cards/front/pilot/Mobius.png',
   img2: 'index_data/textures/cards/front/mecha/Michael.png',
   pilot: { en: "Mobius", ru: "Мобиус", he: "מוביוס" },
   mecha: { en: "Michael", ru: "Михаэль", he: "מיכאל" }
  },
  {id: 'nighthalk',
   img1: 'index_data/textures/cards/front/pilot/Nighthawk.png',
   img2: 'index_data/textures/cards/front/mecha/Raven.png',
   pilot: { en: "Nighthawk", ru: "Ночной Ястреб", he: "נץ ליילי" },
   mecha: { en: "Raven", ru: "Ворона", he: "עורב" }
  },
  {id: 'ning',
   img1: 'index_data/textures/cards/front/pilot/Ning.png',
   img2: 'index_data/textures/cards/front/mecha/Firefox.png',
   pilot: { en: "Ning", ru: "Нинг", he: "נינג" },
   mecha: { en: "Firefox", ru: "Файрфокс", he: "פיירפוקס" }
  },
  {id: 'norma',
   img1: 'index_data/textures/cards/front/pilot/Norma.png',
   img2: 'index_data/textures/cards/front/mecha/Boltus.png',
   pilot: { en: "Norma", ru: "Норма", he: "נורמה" },
   mecha: { en: "Boltus", ru: "Болтус", he: "בולטוס" }
  },
  {id: 'opal',
   img1: 'index_data/textures/cards/front/pilot/Opal.png',
   img2: 'index_data/textures/cards/front/mecha/Akashic.png',
   pilot: { en: "Opal", ru: "Опал", he: "אופל" },
   mecha: { en: "Akashic", ru: "Акашик", he: "אקשיכ" }
  },
  {id: 'purity',
   img1: 'index_data/textures/cards/front/pilot/Purity.png',
   img2: 'index_data/textures/cards/front/mecha/Pulsar.png',
   pilot: { en: "Purity", ru: "Пурити", he: "פוריטי" },
   mecha: { en: "Pulsar", ru: "Пульсар", he: "פולסר" }
  },
  {id: 'red',
   img1: 'index_data/textures/cards/front/pilot/Red.png',
   img2: 'index_data/textures/cards/front/mecha/Firestar.png',
   pilot: { en: "R.E.D", ru: "Р.Е.Д", he: "ר.א.ד" },
   mecha: { en: "Firestar", ru: "Файрстар", he: "פיירסטאר" }
  },
  {id: 'rom',
   img1: 'index_data/textures/cards/front/pilot/Rom.png',
   img2: 'index_data/textures/cards/front/mecha/Arthur.png',
   pilot: { en: "Rom", ru: "Ром", he: "רום" },
   mecha: { en: "Arthur", ru: "Артур", he: "ארתור" }
  },
  {id: 'serena',
   img1: 'index_data/textures/cards/front/pilot/Serena.png',
   img2: 'index_data/textures/cards/front/mecha/Alborada.png',
   pilot: { en: "Serena", ru: "Серена", he: "סרנה" },
   mecha: { en: "Alborada", ru: "Альборада", he: "אלבורדה" }
  },
  {id: 'shin',
   img1: 'index_data/textures/cards/front/pilot/Shin.png',
   img2: 'index_data/textures/cards/front/mecha/Ranger.png',
   pilot: { en: "Shin", ru: "Шин", he: "שין" },
   mecha: { en: "Ranger", ru: "Рейнджер", he: "ריינג'ר" }
  },
  {id: 'silverDeacon',
   img1: 'index_data/textures/cards/front/pilot/Silver Deacon.png',
   img2: 'index_data/textures/cards/front/mecha/Gabriel.png',
   pilot: { en: "Silver Deacon", ru: "Серебряный Дьякон", he: "דיקון כסף" },
   mecha: { en: "Gabriel", ru: "Габриэль", he: "גבריאל" }
  },
  {id: 'tarantula',
   img1: 'index_data/textures/cards/front/pilot/Tarantula.png',
   img2: 'index_data/textures/cards/front/mecha/Doomlight.png',
   pilot: { en: "Tarantula", ru: "Тарантул", he: "טרנטולה" },
   mecha: { en: "Doomlight", ru: "Думлайт", he: "דומלייט" }
  },
  {id: 'vanessa',
   img1: 'index_data/textures/cards/front/pilot/Vanessa.png',
   img2: 'index_data/textures/cards/front/mecha/Skyfall.png',
   pilot: { en: "Vanessa", ru: "Ванесса", he: "ונסה" },
   mecha: { en: "Skyfall", ru: "Скайфолл", he: "סקייפול" }
  },
  {id: 'Villar',
   img1: 'index_data/textures/cards/front/pilot/Villar.png',
   img2: 'index_data/textures/cards/front/mecha/Snow Mirage.png',
   pilot: { en: "Villar", ru: "Виллар", he: "וילאר" },
   mecha: { en: "Snow Mirage", ru: "Снежный Мираж", he: "מיראז' השלג" }
  },
  {id: 'Vita',
   img1: 'index_data/textures/cards/front/pilot/Vita.png',
   img2: 'index_data/textures/cards/front/mecha/Hurricane.png',
   pilot: { en: "Vita", ru: "Вита", he: "ויטה" },
   mecha: { en: "Hurricane", ru: "Ураган", he: "הוריקן" }
  },
  {id: 'Yang',
   img1: 'index_data/textures/cards/front/pilot/Yang.png',
   img2: 'index_data/textures/cards/front/mecha/Skyfire.png',
   pilot: { en: "Yang", ru: "Янг", he: "יאנג" },
   mecha: { en: "Skyfire", ru: "Скайфайр", he: "סקייפייר" }
  },
  {id: 'Yulia',
   img1: 'index_data/textures/cards/front/pilot/Yulia.png',
   img2: 'index_data/textures/cards/front/mecha/Dreadwolf.png',
   pilot: { en: "Yulia", ru: "Юлия", he: "יוליה" },
   mecha: { en: "Dreadwolf", ru: "Дредвулф", he: "דרידוולף" }
  },
  {id: 'Yutong',
   img1: 'index_data/textures/cards/front/pilot/Yutong.png',
   img2: 'index_data/textures/cards/front/mecha/Aurora.png',
   pilot: { en: "Yutong", ru: "Ютонг", he: "יוטונג" },
   mecha: { en: "Aurora", ru: "Аврора", he: "אורורה" }
  },
  {id: 'Zoe',
   img1: 'index_data/textures/cards/front/pilot/Zoe.png',
   img2: 'index_data/textures/cards/front/mecha/Flamenco.png',
   pilot: { en: "Zoe", ru: "Зои", he: "זואי" },
   mecha: { en: "Flamenco", ru: "Фламенко", he: "פלמנקו" }
  }
];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let isProcessing = false;
function initializeGame() {
  let initialCardsData = [];
  pilotMechaPairs.forEach(pair => {
    initialCardsData.push({ value: pair.id, image: pair.img1, name: pair.pilot });
    initialCardsData.push({ value: pair.id, image: pair.img2, name: pair.mecha });
  });
  cards = shuffleArray([...initialCardsData]);
  gameBoard.innerHTML = '';
  flippedCards = [];
  matchedPairs = 0;
  if(localStorage.getItem("lang") === "en") {
    messageDisplay.textContent = 'Find the matching pairs of pilot and their mecha!';
  }else
  if(localStorage.getItem("lang") === "ru") {
    messageDisplay.textContent = 'Найдите совпадающие пары пилотов и их мехов!';
  }else
  if(localStorage.getItem("lang") === "he") {
    messageDisplay.textContent = 'מצאו את הזוגות התואמים של טייסים והמכה שלהם!';
  }
  isProcessing = false;
  const numColumns = Math.sqrt(cards.length);
  gameBoard.style.gridTemplateColumns = `repeat(${numColumns}, 100px)`;
  cards.forEach((cardData, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.value = cardData.value;
    cardElement.dataset.index = index;
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-back"></div>
        <div class="card-face card-front">
          <div class="cardImage" style="background-image:url('${cardData.image}');"></div>
          <div class="cardText">${cardData.name[language]}</div>
        </div>
      </div>
    `;
    cardElement.addEventListener('click', () => flipCard(cardElement));
    gameBoard.appendChild(cardElement);
  });
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function flipCard(card) {
  if (isProcessing || flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
    return;
  }
  card.classList.add('flipped');
  flippedCards.push(card);
  if (flippedCards.length === 2) {
    isProcessing = true;
    setTimeout(checkForMatch, 1000);
  }
}
function checkForMatch() {
  const [card1, card2] = flippedCards;
  const value1 = card1.dataset.value;
  const value2 = card2.dataset.value;
  if (value1 === value2) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedPairs++;
    
    container.classList.add("true");
    container.style.bottom = "0px";
    if(localStorage.getItem("lang") === "en") {
      messageDisplay.textContent = 'Pilot and mecha matched!';
    }else
    if(localStorage.getItem("lang") === "ru") {
      messageDisplay.textContent = 'Пилот и меха совпадают!';
    }else
    if(localStorage.getItem("lang") === "he") {
      messageDisplay.style.direction = "rtl";
      messageDisplay.textContent = 'הטייס והמכה תואמים!';
    }
    setTimeout(() => {
      container.classList.remove("true");
      if(document.body.classList.contains("android")) {
        container.style.bottom = "-70px";
      }else{
        container.style.bottom = "-134px";
      }
      if(localStorage.getItem("lang") === "en") {
        messageDisplay.textContent = 'Find the matching pairs of pilot and their mecha!';
      }else
      if(localStorage.getItem("lang") === "ru") {
        messageDisplay.textContent = 'Найдите совпадающие пары пилотов и их мехов!';
      }else
      if(localStorage.getItem("lang") === "he") {
        messageDisplay.textContent = 'מצאו את הזוגות התואמים של טייסים והמכה שלהם!';
      }
    }, 1000);
    if (matchedPairs === pilotMechaPairs.length) {
      document.getElementById("winModal").style.display = "block";
    }
    addFoods();
  } else {
    container.classList.add("false");
    container.style.bottom = "0px";
    if(localStorage.getItem("lang") === "en") {
      messageDisplay.textContent = 'Does not match, try again!';
    }else
    if(localStorage.getItem("lang") === "ru") {
      messageDisplay.textContent = 'Не совпадает, попробуйте еще раз!';
    }else
    if(localStorage.getItem("lang") === "he") {
      messageDisplay.style.direction = "rtl";
      messageDisplay.textContent = 'לא תואם, נסה שוב!';
    }
    setTimeout(() => {
      if (document.body.classList.contains("android")) {
        container.style.bottom = "-70px";
      } else {
        container.style.bottom = "-134px";
      }
      if(localStorage.getItem("lang") === "en") {
        messageDisplay.textContent = 'Find the matching pairs of pilot and their mecha!';
      }else
      if(localStorage.getItem("lang") === "ru") {
        messageDisplay.textContent = 'Найдите совпадающие пары пилотов и их мехов!';
      }else
      if(localStorage.getItem("lang") === "he") {
        messageDisplay.textContent = 'מצאו את הזוגות התואמים של טייסים והמכה שלהם!';
      }
    }, 1000);
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
    }, 1000);
  }
  flippedCards = [];
  isProcessing = false;
}
resetBoardButton.addEventListener('click', function(){
  document.getElementById('winModal').style.display = 'none';
  initializeGame();
});