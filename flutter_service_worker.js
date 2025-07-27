'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "5fb192d26a511af62785d2f3fc84b462",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/9f/1deea7780cfd6d7bbb5e4d583458dfbf7f5372": "8c4994af75c8d5cf3685a94b8cfabcd3",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/94/b09d9bae9ea08e0aae356af3f396edd9a4f673": "d3e9b736b10da3fb43898987dd129459",
".git/objects/81/8d489211b0adca82d70ff703c8b02c3c18ec92": "048ba5568e697da66df8f6e561265507",
".git/objects/8f/81affbaa93fc4143edd61e710485f6972c8236": "60dfc88cb83ba7cc5f1e05a235e66488",
".git/objects/8f/04101b8de0620e26e91e65b0c62357482c2d60": "352662a5d99933580b6d0208506badba",
".git/objects/8f/bedbae1775b6b2cbd93282a2cd68d056ea1075": "af7fe30569eebf04c281e2072409c8ba",
".git/objects/c9/6296ba4a39e0bdba1d6e0a55d58537f223c732": "29335d279e8c61f64933f29b35b30393",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/3a3792e96ab68c60ca664c8fa365e638297897": "fb0d04f1448514d45d6d7248017e8dd4",
".git/objects/ad/4cdd09612ece1bc55608c9341308a6bd28136d": "831af01c07130e0b6675387ec05377f6",
".git/objects/15/21fab439cc4f896b136725b8ecd053520f8349": "bef5389d3ef93f6c83882be70c64466b",
".git/objects/a0/574873270a2ac25fc8d5a25e546998344c13a1": "2b62258de12c450e6558b12962195be5",
".git/objects/87/2e1d18fee1ae88d0e96409af465af68f7afc2a": "a6b34082d65c19b352965efc59a1d64d",
".git/objects/9a/c29ccdd67239ee864a202093aae1810bfe9dc4": "24b1d7f8950d598ef16070dce107c3e3",
".git/objects/f1/5a81a18c10b7270f7dbaf2e03ccb32ebdcdb74": "6f462b11bfcfdc2dd7ba40a068c4579d",
".git/objects/52/40d11969395c068f0c1bcdbc235cc557644738": "972369ab3d6ddd393414f857939f7899",
".git/objects/52/8dc2ad0ad20e08033d6a932345d259d9ff0e66": "63eb7f9cadc1b12c542a36965d6d904b",
".git/objects/52/77b7136d755dcd8bed303e7e600b024cbdc648": "033d4d08eae14ba32c9ce3ed668bd774",
".git/objects/48/d0db6e29a513763f94d466b6f7846ef1d27f0a": "6fe7704f19713f5587819429baec9086",
".git/objects/a5/01d7c5fa5a3383df3486d60d20f67df00b37d1": "b48c68324423d750457cc1a5da796060",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/df/a992b91f3b4232d52d4ded5324a3d2edfee9c0": "6dcd42fcc63ef78e1e72236535b1bd91",
".git/objects/f0/37447e2fc86d72ef103ad1be6da9bf28cc9385": "0662388aa1842d1b1b811c5315ae097b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/53/daa3ec0d5ddf8b132c42b7422a4b94f0f9a6b6": "bf94386ba302520037286996e16988c9",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/fe/e41a24ac91553361ca932eed2bcf557721225c": "3f7be5afddbf655436fe9f55eb5a61c1",
".git/objects/fd/bae417ff5f7236a3d1e17fcfb548e55d20382e": "8b32776c75471374377d897a7493d6d1",
".git/objects/40/81128ec76f302d260eadb0aa12f4b552e79d61": "75cc5dd18e8381fe2333571e32095b4a",
".git/objects/eb/e8c7a6a6dafa7f3c0204cf139df5274d43f56b": "d131041bf281820feeadc6b6653c3b10",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/a9/5026ed495e12fc8b920203737f0d5ccbd4901f": "f4d6092d93503f3d35616b7b02bb1679",
".git/objects/72/72baaaa1ab220e7a17c1bafe9d0a992da963b8": "6e1c038f04c0268f56694f01780a594f",
".git/objects/72/f410e635f98b1e63bf3b48c9d0da69367eb391": "fae4475fe65fd267cc273bf1d13028e5",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/20/31bd3331aeb7cf169962e03e748da6c18b8c48": "d673f5ad1ff59423f8ba7eeea02c4035",
".git/objects/4d/e3ceddf6596d0c04360aee462425aad93a0557": "e78c13251799a28cd7904e17a360d57a",
".git/objects/e2/ab9781a3f63fbab2823bb94917f1c3b7bfd5e5": "bc9087fd9be52a83f0232abfa978ecb0",
".git/objects/68/e126ea9d666adedfc9193d127926088c2f5e92": "7a40eba4988c0702facde5803657d99d",
".git/objects/91/594f36acdefa797a16b564d8e0980d54f40560": "e78a656f2052e0c63c6844a4e58924ae",
".git/objects/11/df1fd27fd1e8ea6044cb42cf849a139f0f170e": "bed26144086edf9da6a802e2dd0bb249",
".git/objects/96/6ef8a20a4edb01cec32c77626e8c6ff144ebe1": "ad526725ffb300ad91966922caaff11e",
".git/objects/32/ba93eb98927fb971a6965f4d59393eabb1c313": "2b1f1fdf6a2dc9899ac0947c5b1d31fe",
".git/objects/32/514748e421822dda27b649e206bfca7e568b30": "324465e35d14d7dba409b33c9e660ac0",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/61/ce47e78e7c729ee0c6eeb8302a957828b545b8": "c428640e7c71a065c40dd649e9582910",
".git/objects/7c/839327cb1cfb3c67fc735d034025cfd0dcd4ee": "fb2c3e2473a420405f141da3ced76988",
".git/objects/4e/d98fedf582548b1b5d6828902047551f24d322": "d46d338203adbd4ee2c621ce374addd3",
".git/objects/4e/a78c923f648b1bf5694244559edf51effc8b86": "02f6c017c7d4cdcaf2c486f02227bf2b",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/bb/2b6ba2e7ca507d198866700ada8ba76bdc4ee0": "6acad63ee57deb4c5cfacdc00644fc91",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/49/a0eef6f42a84d3edcb3d4559a95801b8e4825b": "255dd31b16f20abff8e323d3a47aadf3",
".git/objects/da/9dfff7c4f3ea7cdf2effbaa168e698bf46a4a1": "86a3ff1189f6fb0f1d6e110048ecbbf3",
".git/objects/b3/0668513dacb66a5cb863b9131b488f99d134a8": "fc1652f7d3bdeeaf1e5b452e10d7a0bc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d85adde9e2714b8011f128778b803b5558fffe": "1c9e6ff2113a429268f30720ac789d1f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/83e88e92733df5704cb6521a04645e089d756c": "086245885a6173f016903cf1f4d48465",
".git/objects/ee/89613a32f6a8642ee2682631ff425bfebeb008": "a29a7e45c1bd488a77e81b9d1b368b82",
".git/objects/ac/74ce043a0bef37650b0852c096fc22f908c068": "730c6017c296ddba6016119a5d0f1c48",
".git/objects/d8/df203c778f175f49482fb66e8fdf725c84a927": "fce0d0f5ce45e2cec3146a755fd266d7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ec/7cbfbfda747a6a5899b881ab2749d84e9673d3": "8bfd05ebbf427da4d96f4483a030df9c",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/2a/16ea68c43cbd06dd62e6cce392022a8f09aad0": "851028354b9b6cd1c833cb73a86f4787",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/db/01ec33fa131f988b179bd42c4978481884ac74": "f01893de3168e9c3a4e4b90fe14fc026",
".git/objects/db/f144eff6c7412950684fc4d40dae95bd6c2c5b": "b650357fd45abd3c1c9f4d12de79ea75",
".git/objects/c7/1ad0193fd73256ed5e4fa2e2e53932fc71a40c": "1d53542853269d1f04a7c3b3d2fd6687",
".git/objects/d2/f92d1d5190e480e2ff534722a474e15e9233e0": "fefde6b10ffa7a799c153dc3caeb6d75",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/7b/2d6979e3de1ae7dc8d0dd533f1b643b1bf6e0e": "9360d101dd1e16591370a4f7ec159756",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/COMMIT_EDITMSG": "cce083c6026848080e0c21f870fa41ad",
".git/refs/remotes/ggrieco25/master": "714ddbfb14422639b90c182be082342b",
".git/refs/heads/master": "714ddbfb14422639b90c182be082342b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "2abe55a599348166addf88afff259727",
".git/logs/refs/remotes/ggrieco25/master": "b20063407711c2984f07586600194ad5",
".git/logs/refs/heads/master": "bde35898738d20d8f4203332d88148af",
".git/logs/HEAD": "bde35898738d20d8f4203332d88148af",
"flutter_bootstrap.js": "91f84c6ec7816a5c8294774a9a92148a",
"version.json": "d0ca2253912c3d960927c218fdcf8d18",
"assets/lib/assets/01_denari.jpg": "d70d6825cd52cd2a2a5eb32fcccaf49a",
"assets/lib/assets/38_bastoni.jpg": "2e990617af9ccc5458b946007c05332a",
"assets/lib/assets/21_spade.jpg": "79dc43b9d45edef29f5291a41c2435cc",
"assets/lib/assets/17_coppe.jpg": "c539244cf9eab9de24a2b53600e5fd09",
"assets/lib/assets/27_spade.jpg": "f48006953e24501310ed5c6e75498e5e",
"assets/lib/assets/18_coppe.jpg": "e5e1b92ccaf09d8782ecfd9781d4ad42",
"assets/lib/assets/06_denari.jpg": "8d45d0f0ac3e09a766ac167f100049d1",
"assets/lib/assets/03_denari.jpg": "5182f494d4758fafafa2caced9ec479f",
"assets/lib/assets/10_denari.jpg": "7c626c26920dfd453c451c4a8bc6422b",
"assets/lib/assets/02_denari.jpg": "e279d09745fa5df6ed292e149ab55179",
"assets/lib/assets/35_bastoni.jpg": "41b51cdf5092e5da805771eb7103e83c",
"assets/lib/assets/36_bastoni.jpg": "01286521a78c41a7e768dc159ce4c384",
"assets/lib/assets/19_coppe.jpg": "682bee9aab6c70f3fb5fcf92809df32a",
"assets/lib/assets/25_spade.jpg": "163b4efbd8c858769b792bd639734c12",
"assets/lib/assets/08_denari.jpg": "edc0f7b3870338bc30347737a8dbd5aa",
"assets/lib/assets/32_bastoni.jpg": "8edfcdb5840a5b9ab4827175ec9a071e",
"assets/lib/assets/14_coppe.jpg": "96983d3eb3c9dcabea6082e6b97aea46",
"assets/lib/assets/30_spade.jpg": "354d2ef91c9d1ada3135158610f0ed7b",
"assets/lib/assets/07_denari.jpg": "dd82a2bd938bd306d73619e4006f44b8",
"assets/lib/assets/23_spade.jpg": "c75f2a84f573287fa7758fb94a0ddd8b",
"assets/lib/assets/26_spade.jpg": "cda0b3e2f737084257e275071a5eeede",
"assets/lib/assets/09_denari.jpg": "6d41b40162b3722d17c71094d857055f",
"assets/lib/assets/15_coppe.jpg": "1fab0c75c181f63e0af1f1de06506ad1",
"assets/lib/assets/33_bastoni.jpg": "ecec6eb78c9f399a978f50385dfd8332",
"assets/lib/assets/04_denari.jpg": "94bdb57bd820fe8f7d11b39181fcbd15",
"assets/lib/assets/40_bastoni.jpg": "8774773853b35ba3cf221e6f95a2d7f4",
"assets/lib/assets/34_bastoni.jpg": "5647900a3aee0c4de375f7396f27bd42",
"assets/lib/assets/31_bastoni.jpg": "c1b80c307b8b388fcbdf11bfee6312bd",
"assets/lib/assets/24_spade.jpg": "89fe84c51de7b1689be67b58d17f85e3",
"assets/lib/assets/37_bastoni.jpg": "052e791027de5ae519f1925e123df2e2",
"assets/lib/assets/0_Retro.jpg": "27e33d53e843a8a34b4af86ecd1dd71e",
"assets/lib/assets/13_coppe.jpg": "ac609156952498e2a275b046399588c3",
"assets/lib/assets/12_coppe.jpg": "1d705333aa44941d78e9c675f5d440d8",
"assets/lib/assets/28_spade.jpg": "b4ee88e877860bfd22f9474a88f8dac8",
"assets/lib/assets/11_coppe.jpg": "fe4f7ba2769591d6f3ee12735d389205",
"assets/lib/assets/05_denari.jpg": "5cebb721a73e3065d70d63133e0f24d7",
"assets/lib/assets/22_spade.jpg": "a2ea1a700717ea70c5df1293c7645485",
"assets/lib/assets/16_coppe.jpg": "f507a088589a44d4dbc2a0dfca49ea79",
"assets/lib/assets/39_bastoni.jpg": "b7d413dc4d29fdfda362342bf81647d1",
"assets/lib/assets/20_coppe.jpg": "ac0859626226eece21762c011f09a2e9",
"assets/lib/assets/29_spade.jpg": "0c1373305c2bd6e1b6bac8baf97871e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e5edd414bb9c925146196489572ed5a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "8ab9231010d3c34d84f875c2c750158c",
"assets/NOTICES": "c2d43e32437337f7034c9b579a1ef777",
"assets/AssetManifest.bin": "483555355be03ddff9a03db21d5a841c",
"assets/AssetManifest.bin.json": "26c85ff5167c81ddaf229e3ed8d63a6e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"manifest.json": "bf283509de2d39a3793eee6af6f8f03a",
"main.dart.js": "1c4fd239c7f509e83317549df086b6f9",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"index.html": "809e707ba8fec230aa6f8fc353fbd3f1",
"/": "809e707ba8fec230aa6f8fc353fbd3f1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
