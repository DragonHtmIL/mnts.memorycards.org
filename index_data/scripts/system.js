const gameBoard = document.getElementById('gameBoard');
const messageDisplay = document.getElementById('message');
const resetBoardButton = document.getElementById('resetBoardButton');
const pilotMechaPairs = [
  {id: 'aya',
   img1: 'index_data/textures/cards/front/pilot/Aya.png',
   img2: 'index_data/textures/cards/front/mecha/Shiranui.png'
  },
  {id: 'belladona',
   img1: 'index_data/textures/cards/front/pilot/Belladona.png',
   img2: 'index_data/textures/cards/front/mecha/Death Knell.png'
  },
  {id: 'cyrus',
   img1: 'index_data/textures/cards/front/pilot/Cyrus.png',
   img2: 'index_data/textures/cards/front/mecha/Trio of Enders.png'
  },
  {id: 'fran',
   img1: 'index_data/textures/cards/front/pilot/Fran.png',
   img2: 'index_data/textures/cards/front/mecha/Twilight.png'
  },
  {id: 'furanku',
   img1: 'index_data/textures/cards/front/pilot/Furanku.png',
   img2: 'index_data/textures/cards/front/mecha/Tempest.png'
  },
  {id: 'iori',
   img1: 'index_data/textures/cards/front/pilot/Iori.png',
   img2: 'index_data/textures/cards/front/mecha/Skylark.png'
  },
  {id: 'ivan',
   img1: 'index_data/textures/cards/front/pilot/Ivan.png',
   img2: 'index_data/textures/cards/front/mecha/Hotsteel.png'
  },
  {id: 'jaka',
   img1: 'index_data/textures/cards/front/pilot/Jaka.png',
   img2: 'index_data/textures/cards/front/mecha/Northern Knight.png'
  },
  {id: 'jiuCong',
   img1: 'index_data/textures/cards/front/pilot/Jiu Cong.png',
   img2: 'index_data/textures/cards/front/mecha/Ventorus.png'
  },
  {id: 'joanna',
   img1: 'index_data/textures/cards/front/pilot/Joanna.png',
   img2: 'index_data/textures/cards/front/mecha/Andromeda.png'
  },
  {id: 'kije',
   img1: 'index_data/textures/cards/front/pilot/Kije.png',
   img2: 'index_data/textures/cards/front/mecha/Guerilla Hunter.png'
  },
  {id: 'kikina',
   img1: 'index_data/textures/cards/front/pilot/Kikina.png',
   img2: 'index_data/textures/cards/front/mecha/Jojo.png'
  },
  {id: 'lillian',
   img1: 'index_data/textures/cards/front/pilot/Lillian.png',
   img2: 'index_data/textures/cards/front/mecha/Neutron Star.png'
  },
  {id: 'lysa',
   img1: 'index_data/textures/cards/front/pilot/Lysa.png',
   img2: 'index_data/textures/cards/front/mecha/Gaia.png'
  },
  {id: 'matilda',
   img1: 'index_data/textures/cards/front/pilot/Matilda.png',
   img2: 'index_data/textures/cards/front/mecha/Lancelot.png'
  },
  {id: 'mia',
   img1: 'index_data/textures/cards/front/pilot/Mia.png',
   img2: 'index_data/textures/cards/front/mecha/Nebula.png'
  },
  {id: 'mila',
   img1: 'index_data/textures/cards/front/pilot/Mila.png',
   img2: 'index_data/textures/cards/front/mecha/Caramel.png'
  },
  {id: 'mobius',
   img1: 'index_data/textures/cards/front/pilot/Mobius.png',
   img2: 'index_data/textures/cards/front/mecha/Mechael.png'
  },
  {id: 'nighthalk',
   img1: 'index_data/textures/cards/front/pilot/Nighthalk.png',
   img2: 'index_data/textures/cards/front/mecha/Raven.png'
  },
  {id: 'ning',
   img1: 'index_data/textures/cards/front/pilot/Ning.png',
   img2: 'index_data/textures/cards/front/mecha/Firefox.png'
  },
  {id: 'norma',
   img1: 'index_data/textures/cards/front/pilot/Norma.png',
   img2: 'index_data/textures/cards/front/mecha/Boltus.png'
  },
  {id: 'opal',
   img1: 'index_data/textures/cards/front/pilot/Opal.png',
   img2: 'index_data/textures/cards/front/mecha/Akashic.png'
  },
  {id: 'purity',
   img1: 'index_data/textures/cards/front/pilot/Purity.png',
   img2: 'index_data/textures/cards/front/mecha/Pulsar.png'
  },
  {id: 'red',
   img1: 'index_data/textures/cards/front/pilot/Red.png',
   img2: 'index_data/textures/cards/front/mecha/Firestar.png'
  },
  {id: 'rom',
   img1: 'index_data/textures/cards/front/pilot/Rom.png',
   img2: 'index_data/textures/cards/front/mecha/Arthur.png'
  },
  {id: 'serena',
   img1: 'index_data/textures/cards/front/pilot/Serena.png',
   img2: 'index_data/textures/cards/front/mecha/Alborada.png'
  },
  {id: 'shin',
   img1: 'index_data/textures/cards/front/pilot/Shin.png',
   img2: 'index_data/textures/cards/front/mecha/Ranger.png'
  },
  {id: 'silverDeacon',
   img1: 'index_data/textures/cards/front/pilot/Silver Deacon.png',
   img2: 'index_data/textures/cards/front/mecha/Gabriel.png'
  },
  {id: 'tarantula',
   img1: 'index_data/textures/cards/front/pilot/Tarantula.png',
   img2: 'index_data/textures/cards/front/mecha/Doomlight.png'
  },
  {id: 'vanessa',
   img1: 'index_data/textures/cards/front/pilot/Vanessa.png',
   img2: 'index_data/textures/cards/front/mecha/Skyfall.png'
  },
  {id: 'Villar',
   img1: 'index_data/textures/cards/front/pilot/Villar.png',
   img2: 'index_data/textures/cards/front/mecha/Snow Mirage.png'
  },
  {id: 'Vita',
   img1: 'index_data/textures/cards/front/pilot/Vita.png',
   img2: 'index_data/textures/cards/front/mecha/Hurricane.png'
  },
  {id: 'Yang',
   img1: 'index_data/textures/cards/front/pilot/Yang.png',
   img2: 'index_data/textures/cards/front/mecha/Skyfire.png'
  },
  {id: 'Yulia',
   img1: 'index_data/textures/cards/front/pilot/Yulia.png',
   img2: 'index_data/textures/cards/front/mecha/Dreadwolf.png'
  },
  {id: 'Yutong',
   img1: 'index_data/textures/cards/front/pilot/Yutong.png',
   img2: 'index_data/textures/cards/front/mecha/Aurora.png'
  },
  {id: 'Zoe',
   img1: 'index_data/textures/cards/front/pilot/Zoe.png',
   img2: 'index_data/textures/cards/front/mecha/Flamenco.png'
  }
];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let isProcessing = false;
function initializeGame() {
  let initialCardsData = [];
  pilotMechaPairs.forEach(pair => {
    initialCardsData.push({ value: pair.id, image: pair.img1 });
    initialCardsData.push({ value: pair.id, image: pair.img2 });
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
        <div class="card-face card-back">?</div>
        <div class="card-face card-front"><div class="cardImage" style="background-image:url('${cardData.image}');"></div></div>
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
    document.getElementById("smgContiner").classList.add("true");
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
      document.getElementById("smgContiner").classList.remove("true");
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
  } else {
    document.getElementById("smgContiner").classList.add("false");
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
      document.getElementById("smgContiner").classList.remove("false");
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
resetBoardButton.addEventListener('click', initializeGame);