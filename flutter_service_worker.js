'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dbf19896bfbccf765d020948553abb49",
"version.json": "61ab7e78e751acd21e20a99f91623680",
"splash/img/light-2x.png": "031791de55a4c2e122f2a2d9e28896f8",
"splash/img/dark-4x.png": "1e02228a2c8e19a773c9f591d2630f8e",
"splash/img/light-3x.png": "1dd2466a0d6aea5efb109870f49a882d",
"splash/img/dark-3x.png": "1dd2466a0d6aea5efb109870f49a882d",
"splash/img/light-4x.png": "1e02228a2c8e19a773c9f591d2630f8e",
"splash/img/dark-2x.png": "031791de55a4c2e122f2a2d9e28896f8",
"splash/img/dark-1x.png": "74f65a51aa04e502bf881f09bc5d5135",
"splash/img/light-1x.png": "74f65a51aa04e502bf881f09bc5d5135",
"index.html": "5acb2f59baeb5e08973232980edda4cc",
"/": "5acb2f59baeb5e08973232980edda4cc",
"main.dart.js": "753ace28fb75ec0c52202ac693552561",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "048c989e9c7b038c537f667d0dedde12",
"icons/Icon-192.png": "40658b2f80280c05c8ecc8c6e2bba3ab",
"icons/Icon-maskable-192.png": "eebedc6b4adf7eb458859a74946f6d29",
"icons/Icon-maskable-512.png": "279e7ff7ed8a6e095c243526064efcff",
"icons/Icon-512.png": "4c3312b7fd33f3fa164ab6bd44f2ddd8",
"manifest.json": "e5aba0b164c0e580c1da29f5e79fa8fd",
"assets/NOTICES": "7be3e9d72bbc15dc183b2fe283fb6b1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "dfe75c8ce112931b659f409473ea0c87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "be3a27b12e312d81f865a6df95d91ec9",
"assets/fonts/MaterialIcons-Regular.otf": "adad342f087b9bd7b248d4210dc74ee6",
"assets/assets/flags/spain_flag.svg": "6aa2d85f24fb61560ddeb58915c4450e",
"assets/assets/flags/uk_flag.svg": "5945e7f2d02205d8de2ae9567a2298c4",
"assets/assets/flags/catalonian_flag.svg": "47eada5d3d26ea9382e84058ee6be868",
"assets/assets/images/image_portfolio.png": "b0fb0e603838265f9c0288e8a3974f89",
"assets/assets/images/andres_no_bg.png": "660ab8a926bc40caaa4fa5ad6a6557ca",
"assets/assets/logos/image/img_dots.png": "0e289ac06a615b838a0a8285e61ea940",
"assets/assets/logos/image/img_focusmetrica_dark.png": "7cd04c60738af9e09077e7a408262221",
"assets/assets/logos/image/img_focusmetrica_light.png": "021532e322293d0daf1401787749af8e",
"assets/assets/logos/vectorial/logo_c_sharp.svg": "294a173d8751701837453ac765f91899",
"assets/assets/logos/vectorial/logo_apple_dark.svg": "af5da6cba87cd5e014f889fbf40329fb",
"assets/assets/logos/vectorial/logo_accenture_dark.svg": "8ff902b6f94e5fc18bbe284cef54e026",
"assets/assets/logos/vectorial/logo_firebase.svg": "72a1035d4c6a1d4de44a1c211e2c219d",
"assets/assets/logos/vectorial/logo_inuba_dark.svg": "d19f2c1e5719845c3fa812770384dd0a",
"assets/assets/logos/vectorial/logo_functions.svg": "4b8e9088485b8796d317979a117eb72b",
"assets/assets/logos/vectorial/logo_unity.svg": "49a4186fc3a0749840935da1558d2757",
"assets/assets/logos/vectorial/logo_microsoft.svg": "04b8f73ee138f67cf46d6377d27ff6d0",
"assets/assets/logos/vectorial/logo_android.svg": "dcbfc8f6af9c02635fe6601deae90a61",
"assets/assets/logos/vectorial/logo_apple_light.svg": "fcade0f0483fbb848190fe47ba66ce9b",
"assets/assets/logos/vectorial/logo_nodejs.svg": "85e899d925fafc7c1b729a9c88ce1b55",
"assets/assets/logos/vectorial/logo_baterfly_dark.svg": "bf7c54210637366d9aea7b838015d6c3",
"assets/assets/logos/vectorial/logo_andres.svg": "d3567935ea551006dac53ae143461364",
"assets/assets/logos/vectorial/logo_fastlane.svg": "f69a8d0614351cddcc5bd2fd591bae56",
"assets/assets/logos/vectorial/logo_vuejs.svg": "4f88f0c6cbf9c33eb339d889acba32c3",
"assets/assets/logos/vectorial/logo_inuba_light.svg": "c88941fc1a31d76d9bf2211dd629666e",
"assets/assets/logos/vectorial/logo_accenture_light.svg": "8a03c35bad85329aff00c5b6e246833f",
"assets/assets/logos/vectorial/logo_flutter_icon.svg": "1279b59164cf3776bab911b29e5c79d9",
"assets/assets/logos/vectorial/logo_flutter_solid.svg": "1247abb374a267bcb6122e1a1ac71383",
"assets/assets/logos/vectorial/logo_gitlab.svg": "150e6c9b5985420278e65c05b2bea823",
"assets/assets/logos/vectorial/logo_github.svg": "cbd1f22e17303a223f355be5cd3333a3",
"assets/assets/logos/vectorial/logo_flutter_wht_shaded.svg": "549e7c483130b3ec31cc87893d3eb62b",
"assets/assets/logos/vectorial/logo_baterfly_light.svg": "51821a53c68ccc0d3dc0db08bbd4e45b",
"assets/assets/logos/vectorial/logo_linkedin.svg": "1426a6bbc90415c81437c9e14da0ef4e",
"assets/assets/logos/vectorial/logo_javascript.svg": "19c322e39df7399ffcde2be465c60770",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
