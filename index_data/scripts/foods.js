let meaw_token_item = localStorage.getItem("meawTokenStorage") || 0;
let gold_item = localStorage.getItem("goldStorage") || 0;
let alpha_coin_item = localStorage.getItem("alphaCoinStorage") || 0;
let crystal_item = localStorage.getItem("crystalStorage") || 0;
let virtual_Token_item = localStorage.getItem("virtualTokenStorage") || 0;
let food_id_000 = localStorage.getItem("food000Storage") || 0;
let food_id_001 = localStorage.getItem("food001Storage") || 0;
let food_id_002 = localStorage.getItem("food002Storage") || 0;
let food_id_003 = localStorage.getItem("food003Storage") || 0;
let food_id_004 = localStorage.getItem("food004Storage") || 0;
let food_id_005 = localStorage.getItem("food005Storage") || 0;
let food_id_006 = localStorage.getItem("food006Storage") || 0;
let food_id_007 = localStorage.getItem("food007Storage") || 0;
let food_id_008 = localStorage.getItem("food008Storage") || 0;
let food_id_009 = localStorage.getItem("food009Storage") || 0;
let food_id_010 = localStorage.getItem("food010Storage") || 0;
let food_id_011 = localStorage.getItem("food011Storage") || 0;
let food_id_012 = localStorage.getItem("food012Storage") || 0;
let food_id_013 = localStorage.getItem("food013Storage") || 0;
let food_id_014 = localStorage.getItem("food014Storage") || 0;
let food_id_015 = localStorage.getItem("food015Storage") || 0;
let food_id_016 = localStorage.getItem("food016Storage") || 0;
let food_id_017 = localStorage.getItem("food017Storage") || 0;
let food_id_018 = localStorage.getItem("food018Storage") || 0;
let food_id_019 = localStorage.getItem("food019Storage") || 0;
let food_id_020 = localStorage.getItem("food020Storage") || 0;
let food_id_021 = localStorage.getItem("food021Storage") || 0;
let food_id_022 = localStorage.getItem("food022Storage") || 0;
let food_id_023 = localStorage.getItem("food023Storage") || 0;
let food_id_024 = localStorage.getItem("food024Storage") || 0;
let food_id_025 = localStorage.getItem("food025Storage") || 0;
let food_id_026 = localStorage.getItem("food026Storage") || 0;
let food_id_027 = localStorage.getItem("food027Storage") || 0;
let food_id_028 = localStorage.getItem("food028Storage") || 0;
let food_id_029 = localStorage.getItem("food029Storage") || 0;
let food_id_030 = localStorage.getItem("food030Storage") || 0;
let food_id_031 = localStorage.getItem("food031Storage") || 0;
let food_id_032 = localStorage.getItem("food032Storage") || 0;
let food_id_033 = localStorage.getItem("food033Storage") || 0;
let food_id_034 = localStorage.getItem("food034Storage") || 0;
let food_id_035 = localStorage.getItem("food035Storage") || 0;
let food_id_036 = localStorage.getItem("food036Storage") || 0;
let food_id_037 = localStorage.getItem("food037Storage") || 0;
let food_id_038 = localStorage.getItem("food038Storage") || 0;
let food_id_039 = localStorage.getItem("food039Storage") || 0;
let food_id_040 = localStorage.getItem("food040Storage") || 0;
let food_id_041 = localStorage.getItem("food041Storage") || 0;
let food_id_042 = localStorage.getItem("food042Storage") || 0;
let food_id_043 = localStorage.getItem("food043Storage") || 0;
let food_id_044 = localStorage.getItem("food044Storage") || 0;
let food_id_045 = localStorage.getItem("food045Storage") || 0;
let food_id_046 = localStorage.getItem("food046Storage") || 0;
let food_id_047 = localStorage.getItem("food047Storage") || 0;
let food_id_048 = localStorage.getItem("food048Storage") || 0;
let food_id_049 = localStorage.getItem("food049Storage") || 0;
let food_id_050 = localStorage.getItem("food050Storage") || 0;
let food_id_051 = localStorage.getItem("food051Storage") || 0;
let food_id_052 = localStorage.getItem("food052Storage") || 0;
let food_id_053 = localStorage.getItem("food053Storage") || 0;
let food_id_054 = localStorage.getItem("food054Storage") || 0;
let food_id_055 = localStorage.getItem("food055Storage") || 0;
let food_id_056 = localStorage.getItem("food056Storage") || 0;
let food_id_057 = localStorage.getItem("food057Storage") || 0;
let food_id_058 = localStorage.getItem("food058Storage") || 0;
let food_id_059 = localStorage.getItem("food059Storage") || 0;
let food_id_060 = localStorage.getItem("food060Storage") || 0;
let food_id_061 = localStorage.getItem("food061Storage") || 0;
let food_id_062 = localStorage.getItem("food062Storage") || 0;
let food_id_063 = localStorage.getItem("food063Storage") || 0;
let food_id_064 = localStorage.getItem("food064Storage") || 0;
let food_id_065 = localStorage.getItem("food065Storage") || 0;
let food_id_066 = localStorage.getItem("food066Storage") || 0;
let food_id_067 = localStorage.getItem("food067Storage") || 0;
let food_id_068 = localStorage.getItem("food068Storage") || 0;
let food_id_069 = localStorage.getItem("food069Storage") || 0;
let food_id_070 = localStorage.getItem("food070Storage") || 0;
let food_id_071 = localStorage.getItem("food071Storage") || 0;
let food_id_072 = localStorage.getItem("food072Storage") || 0;
let food_id_073 = localStorage.getItem("food073Storage") || 0;
let food_id_074 = localStorage.getItem("food074Storage") || 0;
let food_id_075 = localStorage.getItem("food075Storage") || 0;
let food_id_076 = localStorage.getItem("food076Storage") || 0;
let food_id_077 = localStorage.getItem("food077Storage") || 0;
function addFoods() {
  if(localStorage.getItem("foodStyle") === "imgMeow") {
    meaw_token_item++;
    localStorage.setItem("meawTokenStorage", meaw_token_item);
  }else
  if(localStorage.getItem("foodStyle") === "imgGold") {
    gold_item++;
    localStorage.setItem("goldStorage", gold_item);
  }else
  if(localStorage.getItem("foodStyle") === "imgAlphacoin") {
    alpha_coin_item++;
    localStorage.setItem("alphaCoinStorage", alpha_coin_item);
  }else
  if(localStorage.getItem("foodStyle") === "imgCrystal") {
    crystal_item++;
    localStorage.setItem("crystalStorage", crystal_item);
  }else
  if(localStorage.getItem("foodStyle") === "imgVirtualToken") {
    virtual_Token_item++;
    localStorage.setItem("virtualTokenStorage", virtual_Token_item);
  }else
  if(localStorage.getItem("foodStyle") === "img000food") {
    food_id_000++;
    localStorage.setItem("food000Storage", food_id_000);
  }else
  if(localStorage.getItem("foodStyle") === "img001food") {
    food_id_001++;
    localStorage.setItem("food001Storage", food_id_001);
  }else
  if(localStorage.getItem("foodStyle") === "img002food") {
    food_id_002++;
    localStorage.setItem("food002Storage", food_id_002);
  }else
  if(localStorage.getItem("foodStyle") === "img003food") {
    food_id_003++;
    localStorage.setItem("food003Storage", food_id_003);
  }else
  if(localStorage.getItem("foodStyle") === "img004food") {
    food_id_004++;
    localStorage.setItem("food004Storage", food_id_004);
  }else
  if(localStorage.getItem("foodStyle") === "img005food") {
    food_id_005++;
    localStorage.setItem("food005Storage", food_id_005);
  }else
  if(localStorage.getItem("foodStyle") === "img006food") {
    food_id_006++;
    localStorage.setItem("food006Storage", food_id_006);
  }else
  if(localStorage.getItem("foodStyle") === "img007food") {
    food_id_007++;
    localStorage.setItem("food007Storage", food_id_007);
  }else
  if(localStorage.getItem("foodStyle") === "img008food") {
    food_id_008++;
    localStorage.setItem("food008Storage", food_id_008);
  }else
  if(localStorage.getItem("foodStyle") === "img009food") {
    food_id_009++;
    localStorage.setItem("food009Storage", food_id_009);
  }else
  if(localStorage.getItem("foodStyle") === "img010food") {
    food_id_010++;
    localStorage.setItem("food010Storage", food_id_010);
  }else
  if(localStorage.getItem("foodStyle") === "img011food") {
    food_id_011++;
    localStorage.setItem("food011Storage", food_id_011);
  }else
  if(localStorage.getItem("foodStyle") === "img012food") {
    food_id_012++;
    localStorage.setItem("food012Storage", food_id_012);
  }else
  if(localStorage.getItem("foodStyle") === "img013food") {
    food_id_013++;
    localStorage.setItem("food013Storage", food_id_013);
  }else
  if(localStorage.getItem("foodStyle") === "img014food") {
    food_id_014++;
    localStorage.setItem("food014Storage", food_id_014);
  }else
  if(localStorage.getItem("foodStyle") === "img015food") {
    food_id_015++;
    localStorage.setItem("food015Storage", food_id_015);
  }else
  if(localStorage.getItem("foodStyle") === "img016food") {
    food_id_016++;
    localStorage.setItem("food016Storage", food_id_016);
  }else
  if(localStorage.getItem("foodStyle") === "img017food") {
    food_id_017++;
    localStorage.setItem("food017Storage", food_id_017);
  }else
  if(localStorage.getItem("foodStyle") === "img018food") {
    food_id_018++;
    localStorage.setItem("food018Storage", food_id_018);
  }else
  if(localStorage.getItem("foodStyle") === "img019food") {
    food_id_019++;
    localStorage.setItem("food019Storage", food_id_019);
  }else
  if(localStorage.getItem("foodStyle") === "img020food") {
    food_id_020++;
    localStorage.setItem("food020Storage", food_id_020);
  }else
  if(localStorage.getItem("foodStyle") === "img021food") {
    food_id_021++;
    localStorage.setItem("food021Storage", food_id_021);
  }else
  if(localStorage.getItem("foodStyle") === "img022food") {
    food_id_022++;
    localStorage.setItem("food022Storage", food_id_022);
  }else
  if(localStorage.getItem("foodStyle") === "img023food") {
    food_id_023++;
    localStorage.setItem("food023Storage", food_id_023);
  }else
  if(localStorage.getItem("foodStyle") === "img024food") {
    food_id_024++;
    localStorage.setItem("food024Storage", food_id_024);
  }else
  if(localStorage.getItem("foodStyle") === "img025food") {
    food_id_025++;
    localStorage.setItem("food025Storage", food_id_025);
  }else
  if(localStorage.getItem("foodStyle") === "img026food") {
    food_id_026++;
    localStorage.setItem("food026Storage", food_id_026);
  }else
  if(localStorage.getItem("foodStyle") === "img027food") {
    food_id_027++;
    localStorage.setItem("food027Storage", food_id_027);
  }else
  if(localStorage.getItem("foodStyle") === "img028food") {
    food_id_028++;
    localStorage.setItem("food028Storage", food_id_028);
  }else
  if(localStorage.getItem("foodStyle") === "img029food") {
    food_id_029++;
    localStorage.setItem("food029Storage", food_id_029);
  }else
  if(localStorage.getItem("foodStyle") === "img030food") {
    food_id_030++;
    localStorage.setItem("food030Storage", food_id_030);
  }else
  if(localStorage.getItem("foodStyle") === "img031food") {
    food_id_031++;
    localStorage.setItem("food031Storage", food_id_031);
  }else
  if(localStorage.getItem("foodStyle") === "img032food") {
    food_id_032++;
    localStorage.setItem("food032Storage", food_id_032);
  }else
  if(localStorage.getItem("foodStyle") === "img033food") {
    food_id_033++;
    localStorage.setItem("food033Storage", food_id_033);
  }else
  if(localStorage.getItem("foodStyle") === "img034food") {
    food_id_034++;
    localStorage.setItem("food034Storage", food_id_034);
  }else
  if(localStorage.getItem("foodStyle") === "img035food") {
    food_id_035++;
    localStorage.setItem("food035Storage", food_id_035);
  }else
  if(localStorage.getItem("foodStyle") === "img036food") {
    food_id_036++;
    localStorage.setItem("food036Storage", food_id_036);
  }else
  if(localStorage.getItem("foodStyle") === "img037food") {
    food_id_037++;
    localStorage.setItem("food037Storage", food_id_037);
  }else
  if(localStorage.getItem("foodStyle") === "img038food") {
    food_id_038++;
    localStorage.setItem("food038Storage", food_id_038);
  }else
  if(localStorage.getItem("foodStyle") === "img039food") {
    food_id_039++;
    localStorage.setItem("food039Storage", food_id_039);
  }else
  if(localStorage.getItem("foodStyle") === "img040food") {
    food_id_040++;
    localStorage.setItem("food040Storage", food_id_040);
  }else
  if(localStorage.getItem("foodStyle") === "img041food") {
    food_id_041++;
    localStorage.setItem("food041Storage", food_id_041);
  }else
  if(localStorage.getItem("foodStyle") === "img042food") {
    food_id_042++;
    localStorage.setItem("food042Storage", food_id_042);
  }else
  if(localStorage.getItem("foodStyle") === "img043food") {
    food_id_043++;
    localStorage.setItem("food043Storage", food_id_043);
  }else
  if(localStorage.getItem("foodStyle") === "img044food") {
    food_id_044++;
    localStorage.setItem("food044Storage", food_id_044);
  }else
  if(localStorage.getItem("foodStyle") === "img045food") {
    food_id_045++;
    localStorage.setItem("food045Storage", food_id_045);
  }else
  if(localStorage.getItem("foodStyle") === "img046food") {
    food_id_046++;
    localStorage.setItem("food046Storage", food_id_046);
  }else
  if(localStorage.getItem("foodStyle") === "img047food") {
    food_id_047++;
    localStorage.setItem("food047Storage", food_id_047);
  }else
  if(localStorage.getItem("foodStyle") === "img048food") {
    food_id_048++;
    localStorage.setItem("food048Storage", food_id_048);
  }else
  if(localStorage.getItem("foodStyle") === "img049food") {
    food_id_049++;
    localStorage.setItem("food049Storage", food_id_049);
  }else
  if(localStorage.getItem("foodStyle") === "img050food") {
    food_id_050++;
    localStorage.setItem("food050Storage", food_id_050);
  }else
  if(localStorage.getItem("foodStyle") === "img051food") {
    food_id_051++;
    localStorage.setItem("food051Storage", food_id_051);
  }else
  if(localStorage.getItem("foodStyle") === "img052food") {
    food_id_052++;
    localStorage.setItem("food052Storage", food_id_052);
  }else
  if(localStorage.getItem("foodStyle") === "img053food") {
    food_id_053++;
    localStorage.setItem("food053Storage", food_id_053);
  }else
  if(localStorage.getItem("foodStyle") === "img054food") {
    food_id_054++;
    localStorage.setItem("food054Storage", food_id_054);
  }else
  if(localStorage.getItem("foodStyle") === "img055food") {
    food_id_055++;
    localStorage.setItem("food055Storage", food_id_055);
  }else
  if(localStorage.getItem("foodStyle") === "img056food") {
    food_id_056++;
    localStorage.setItem("food056Storage", food_id_056);
  }else
  if(localStorage.getItem("foodStyle") === "img057food") {
    food_id_057++;
    localStorage.setItem("food057Storage", food_id_057);
  }else
  if(localStorage.getItem("foodStyle") === "img058food") {
    food_id_058++;
    localStorage.setItem("food058Storage", food_id_058);
  }else
  if(localStorage.getItem("foodStyle") === "img059food") {
    food_id_059++;
    localStorage.setItem("food059Storage", food_id_059);
  }else
  if(localStorage.getItem("foodStyle") === "img060food") {
    food_id_060++;
    localStorage.setItem("food060Storage", food_id_060);
  }else
  if(localStorage.getItem("foodStyle") === "img061food") {
    food_id_061++;
    localStorage.setItem("food061Storage", food_id_061);
  }else
  if(localStorage.getItem("foodStyle") === "img062food") {
    food_id_062++;
    localStorage.setItem("food062Storage", food_id_062);
  }else
  if(localStorage.getItem("foodStyle") === "img063food") {
    food_id_063++;
    localStorage.setItem("food063Storage", food_id_063);
  }else
  if(localStorage.getItem("foodStyle") === "img064food") {
    food_id_064++;
    localStorage.setItem("food064Storage", food_id_064);
  }else
  if(localStorage.getItem("foodStyle") === "img065food") {
    food_id_065++;
    localStorage.setItem("food065Storage", food_id_065);
  }else
  if(localStorage.getItem("foodStyle") === "img066food") {
    food_id_066++;
    localStorage.setItem("food066Storage", food_id_066);
  }else
  if(localStorage.getItem("foodStyle") === "img067food") {
    food_id_067++;
    localStorage.setItem("food067Storage", food_id_067);
  }else
  if(localStorage.getItem("foodStyle") === "img068food") {
    food_id_068++;
    localStorage.setItem("food068Storage", food_id_068);
  }else
  if(localStorage.getItem("foodStyle") === "img069food") {
    food_id_069++;
    localStorage.setItem("food069Storage", food_id_069);
  }else
  if(localStorage.getItem("foodStyle") === "img070food") {
    food_id_070++;
    localStorage.setItem("food070Storage", food_id_070);
  }else
  if(localStorage.getItem("foodStyle") === "img071food") {
    food_id_071++;
    localStorage.setItem("food071Storage", food_id_071);
  }else
  if(localStorage.getItem("foodStyle") === "img072food") {
    food_id_072++;
    localStorage.setItem("food072Storage", food_id_072);
  }else
  if(localStorage.getItem("foodStyle") === "img073food") {
    food_id_073++;
    localStorage.setItem("food073Storage", food_id_073);
  }else
  if(localStorage.getItem("foodStyle") === "img074food") {
    food_id_074++;
    localStorage.setItem("food074Storage", food_id_074);
  }else
  if(localStorage.getItem("foodStyle") === "img075food") {
    food_id_075++;
    localStorage.setItem("food075Storage", food_id_075);
  }else
  if(localStorage.getItem("foodStyle") === "img076food") {
    food_id_076++;
    localStorage.setItem("food076Storage", food_id_076);
  }else
  if(localStorage.getItem("foodStyle") === "img077food") {
    food_id_077++;
    localStorage.setItem("food077Storage", food_id_077);
  }
}