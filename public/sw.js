if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Mumble.svg",revision:"a68a363feae6f2a0c809742981fd6460"},{url:"/_next/static/chunks/203-402c543e1c4dafe6.js",revision:"402c543e1c4dafe6"},{url:"/_next/static/chunks/590-be408501a8e91b2d.js",revision:"be408501a8e91b2d"},{url:"/_next/static/chunks/926-3cb46b6dfab1ed53.js",revision:"3cb46b6dfab1ed53"},{url:"/_next/static/chunks/973-ac41e95fc668538c.js",revision:"ac41e95fc668538c"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-15107d03b22f36de.js",revision:"15107d03b22f36de"},{url:"/_next/static/chunks/pages/404-3a4d85511bcd036f.js",revision:"3a4d85511bcd036f"},{url:"/_next/static/chunks/pages/500-1986e63ee831c570.js",revision:"1986e63ee831c570"},{url:"/_next/static/chunks/pages/_app-9d58600f6a598162.js",revision:"9d58600f6a598162"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/_offline/offlineIndex-b50a4974e764faf1.js",revision:"b50a4974e764faf1"},{url:"/_next/static/chunks/pages/auth/error-d068cd32f40180c3.js",revision:"d068cd32f40180c3"},{url:"/_next/static/chunks/pages/auth/login-ab23edbc4c0fa9bd.js",revision:"ab23edbc4c0fa9bd"},{url:"/_next/static/chunks/pages/auth/register-3c3ba58b7169e5ef.js",revision:"3c3ba58b7169e5ef"},{url:"/_next/static/chunks/pages/global-error-48f2ef3c05afcd40.js",revision:"48f2ef3c05afcd40"},{url:"/_next/static/chunks/pages/index-f500f2ba8df40753.js",revision:"f500f2ba8df40753"},{url:"/_next/static/chunks/pages/mumble/%5BpostId%5D-3feea4a5257a5e25.js",revision:"3feea4a5257a5e25"},{url:"/_next/static/chunks/pages/tag/%5Btag%5D-8196f9b9d38d7092.js",revision:"8196f9b9d38d7092"},{url:"/_next/static/chunks/pages/user/%5BuserId%5D-4adca302ab43a6bb.js",revision:"4adca302ab43a6bb"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/937015babd8a0b73.css",revision:"937015babd8a0b73"},{url:"/_next/static/kk5yQtP-IMz8B_K_t0BIa/_buildManifest.js",revision:"589dde55e2196c79ecf396e792204abe"},{url:"/_next/static/kk5yQtP-IMz8B_K_t0BIa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/mumbleLogo.6d3e3e43.svg",revision:"a5f7b3c6e08ae742ac92480534a84d94"},{url:"/_next/static/media/poppins-all-500-normal.c0272f95.woff",revision:"c0272f95"},{url:"/_next/static/media/poppins-all-600-normal.0e22e091.woff",revision:"0e22e091"},{url:"/_next/static/media/poppins-all-700-normal.d841ff7f.woff",revision:"d841ff7f"},{url:"/_next/static/media/poppins-devanagari-500-normal.839135d0.woff2",revision:"839135d0"},{url:"/_next/static/media/poppins-devanagari-600-normal.3828f203.woff2",revision:"3828f203"},{url:"/_next/static/media/poppins-devanagari-700-normal.20b8b8f6.woff2",revision:"20b8b8f6"},{url:"/_next/static/media/poppins-latin-500-normal.7777133e.woff2",revision:"7777133e"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-700-normal.9a881e2a.woff2",revision:"9a881e2a"},{url:"/_next/static/media/poppins-latin-ext-500-normal.370d1cc3.woff2",revision:"370d1cc3"},{url:"/_next/static/media/poppins-latin-ext-600-normal.10939fee.woff2",revision:"10939fee"},{url:"/_next/static/media/poppins-latin-ext-700-normal.f93b79c1.woff2",revision:"f93b79c1"},{url:"/_next/static/media/verticalLogo.32aa743e.svg",revision:"a4febb6ad85630dff2de76b2fa09de02"},{url:"/favicon.ico",revision:"0dd8aa11d1bdffe8ebda380a37896b17"},{url:"/favicon.png",revision:"6e6fb057996c244b9a28d4302a331798"},{url:"/favicon.svg",revision:"cc742f44a7d764181cfb65dd2a8c53e3"},{url:"/manifest.json",revision:"25840f1fc77ecc0ff90645cfea39e7a3"},{url:"/mumbel_48.png",revision:"59577b5a7251df10286442ca44a5a012"},{url:"/mumble_192.png",revision:"71fb6dc7242c458f49fbd1f5baa903ff"},{url:"/mumble_256.png",revision:"59577b5a7251df10286442ca44a5a012"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
