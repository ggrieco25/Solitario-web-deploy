'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f41a5756b58ebfc52a3e09e943fbc762",
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
"main.dart.js": "f65fc70f99308c20b7815edb362b40e0",
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
