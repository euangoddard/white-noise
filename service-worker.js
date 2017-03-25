"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/CNAME","6aa75012fbd260aad62e5dc7741813c0"],["/android-chrome-192x192.png","49cc1183e580120bc422cda5090a6285"],["/android-chrome-512x512.png","8a404f6e53016cb996b1b14e336dee83"],["/app.610e0f6ed66ce34a030c.js","91da1f96010e2be1af45d8268258eca8"],["/apple-touch-icon.png","451455604d9279784891966fcfa27e9e"],["/browserconfig.xml","a493ba0aa0b8ec8068d786d7248bb92c"],["/favicon-16x16.png","2cc0484c64c1c627e225220ae42bd48d"],["/favicon-32x32.png","7b190f7504b78700a9f8aaf364267d19"],["/favicon.ico","c81ef5289715604044b3a2c07b574619"],["/index.html","e4a5da20dd3ecea613d1ae1ccf06b531"],["/manifest.json","b557242bbec5c7bac1419c333bed1062"],["/mstile-144x144.png","edf4a537fcb4080d6d561cc02a04a5a9"],["/mstile-150x150.png","d01b2302cbf90c5503e2805448974350"],["/mstile-310x150.png","bd1a00a17159488958d6bea7dcf563d2"],["/mstile-310x310.png","5998968efe74402d768e789038a098b9"],["/mstile-70x70.png","04061dc462532d677146d50577031a39"],["/safari-pinned-tab.svg","36b823112d90a47278eff793b0235b17"],["/styles.610e0f6ed66ce34a030c.css","a11472b0f7528caae55a50fb96cb17d0"],["/styles.610e0f6ed66ce34a030c.css.map","c5d53a31d00befb9f520bcc27eae2c95"],["/styles.610e0f6ed66ce34a030c.js","c806ea8bf9ee5616b2ac85d3e3b2bac4"],["/sw-registration.js","373a64985db6c92d47e745b6b87bcf4c"]],cacheName="sw-precache-v3-noise-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);n=urlsToCacheKeys.has(t);n||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});