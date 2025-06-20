'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c1cb222c73946f70229993a5019445a3",
"assets/AssetManifest.bin.json": "853b43ee4c2302970a18c0367316687c",
"assets/AssetManifest.json": "9d9a09b22d825bbdfdaaf97855914302",
"assets/assets/a.png": "d99a9ff169560327d3fc98adf4f6665d",
"assets/assets/acara.png": "35c1851039c3adecf39ebbfd96dff1aa",
"assets/assets/akun.png": "7882b2258aad1d96255d77b00b277303",
"assets/assets/akun1.png": "ff95cc7a1dc4f9191f623452144453e3",
"assets/assets/atur.png": "bcb32c2d3c236bab536af38acd206d08",
"assets/assets/audio.png": "bdb7c9f12ec55cfcfc90c7b507b9f7de",
"assets/assets/avatar.png": "c6f6f376362a881bb26c17eb7d6a97aa",
"assets/assets/bahasa1.png": "3a0102cf1a57de9d7187d94d139493a8",
"assets/assets/bantuan.png": "4eca64173bd895d609ce36206c493184",
"assets/assets/bantuan1.png": "3300c13f30cee246ad9bfd0c8da38ec8",
"assets/assets/chat.png": "be23c8ad7d53a05bb04bef88d8782d68",
"assets/assets/chat1.png": "4327e95826551eb91c47d481f04ba04a",
"assets/assets/chat2.png": "18c22608b2f889073594e34920b8b1bd",
"assets/assets/daftar.png": "004b84507a4c4cc1eed4565ca33c4bfe",
"assets/assets/dokumen.png": "cf49b95a59e4287ce72511e88b115402",
"assets/assets/foto.png": "6ce35f61ce436f3f1db18b1f323a4b1e",
"assets/assets/grup.png": "0bf3f8614bdacafc02148c1cf26dea5d",
"assets/assets/img.png": "abcc67e0926bb6ae88770dd7f99b2ff8",
"assets/assets/img_1.png": "03dc440c5cd609d42c226d2bc4d06559",
"assets/assets/img_2.png": "03dc440c5cd609d42c226d2bc4d06559",
"assets/assets/kamera.png": "080c1fbeb473f699ca9e4401ce95ac30",
"assets/assets/kkl.png": "ee068efdf8b28d8dad53ed32c11f712a",
"assets/assets/klp5.png": "e27069fb048c5d1f1459d9424757c9cd",
"assets/assets/komunitas.png": "66757869a9e83846dd891a91a0f9ab0e",
"assets/assets/kontak.png": "7dd79e49857e81cc7060f2254bd57df4",
"assets/assets/login.png": "24ef467e9f68a2e3b22c6f0be1548fe0",
"assets/assets/menu.png": "070a36b80bd195d0f10a6234c9f210c1",
"assets/assets/meta.png": "200162da1dcc8f22d86a0daf97104578",
"assets/assets/notif.png": "31ced6ac21d3737f38a7e9f55f6c3e5d",
"assets/assets/notif1.png": "c6ca7bdb3ccf51b2b2a91b93ff4045ce",
"assets/assets/org.png": "a8a130351fd0fd5daffdbe87abee8611",
"assets/assets/out.png": "a58e1110c93ecd6c94816e95b8c31b31",
"assets/assets/pengaturan.png": "613fd678e71488c5a207fc349a0a5be2",
"assets/assets/polling.png": "d30c696c4f836e23a01ca45bd7d8f090",
"assets/assets/pribadi.png": "1e2d4046559e6a415e4662b8ecd21ac5",
"assets/assets/privasi.png": "421442f0f2282ca8db577b4fc727de69",
"assets/assets/privasi1.png": "99db512e79f6b6de49d476cc850af4b8",
"assets/assets/profile.png": "28f5f2a9f2521a1c1c903e52c79fcb7f",
"assets/assets/profile1.png": "9736502160f3ccb0a6d1c9bc8ce4672d",
"assets/assets/qr.png": "0570ea136bc8f72e0d53915137d75289",
"assets/assets/qr1.png": "6c2dd7d959b17d4d7cd99c2029a387d5",
"assets/assets/saluran.png": "686ec04aacdebeb7fc5cda6bd3c29c63",
"assets/assets/saya.png": "b7137367a46e24e9bbdc8bbe3d5130c4",
"assets/assets/simpan.png": "ed4c8a77ad7bc05fda371a614d0081af",
"assets/assets/status.png": "798ff0f008f8b41ef9b40d708f669851",
"assets/assets/stiker.png": "95c1a2f5ba5517322e4a26693e78dd82",
"assets/assets/tambah.png": "03e348e59fd3b0ceda22c6e73539141c",
"assets/assets/tws.png": "8a874c722e1b3f910b518e0b312ceeda",
"assets/assets/voice.png": "c4557e54604ab4e11df24dc1e7e96a9a",
"assets/assets/wa.png": "0a2fbb378430ad8c651e7e65a849e946",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "12a19baa598ce4f2e47bd3624ed6f12e",
"assets/NOTICES": "1a04a35098224f3ad4bb1afcaa287645",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2fdc5e62954b16ccb0cff67a11bf323b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90d9059a130d2b19b5ba8949aee645c6",
"/": "90d9059a130d2b19b5ba8949aee645c6",
"main.dart.js": "53e7f40c5cd4ee1c2b5b7274ae5a43a2",
"manifest.json": "e1234b82833ff6d9604b9f8ec404bc11",
"version.json": "676e70069ef7c267065f2fae2229ca47"};
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
