!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(o,i,a){for(var s,u,c,d=0,p=[];d<o.length;d++)u=o[d],r[u]&&p.push(r[u][0]),r[u]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);for(n&&n(o,i,a);p.length;)p.shift()();if(a)for(d=0;d<a.length;d++)c=e(e.s=a[d]);return c};var o={},r={1:0};e.e=function(t){function n(){i.onerror=i.onload=null,clearTimeout(a);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}if(0===r[t])return Promise.resolve();if(r[t])return r[t][2];var o=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.timeout=12e4,e.nc&&i.setAttribute("nonce",e.nc),i.src=e.p+""+t+".16e3a326e0f52f3600df.chunk.js";var a=setTimeout(n,12e4);i.onerror=i.onload=n;var s=new Promise(function(e,n){r[t]=[e,n]});return r[t][2]=s,o.appendChild(i),s},e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=function(){function t(){this.state=0,this.noise=new o.Noise}return t.prototype.bootstrap=function(){this.bindEvents(),this.enterState(0)},t.prototype.bindEvents=function(){var t=this;document.querySelector(".control.start").addEventListener("click",function(){t.updateState(1)}),document.querySelector(".control.stop").addEventListener("click",function(){t.updateState(3)}),document.querySelector(".mask-light").addEventListener("transitionend",function(){t.updateState(2)}),document.querySelector(".mask-dark").addEventListener("transitionend",function(){t.updateState(0)})},t.prototype.updateState=function(t){this.leaveState(this.state),this.enterState(t),this.state=t},t.prototype.enterState=function(t){document.body.classList.add(i.get(t)),setTimeout(function(){return document.body.classList.add("run")},10),2===t&&this.noise.start()},t.prototype.leaveState=function(t){document.body.classList.remove(i.get(t)),document.body.classList.remove("run"),2===t&&this.noise.stop()},t}();e.App=r;var i=new Map([[0,"stopped"],[1,"starting"],[2,"playing"],[3,"stopping"]])},function(t,e,n){"use strict";function o(){return new Promise(function(t,e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()})}Object.defineProperty(e,"__esModule",{value:!0}),e.domready=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=new(window.AudioContext||window.webkitAudioContext),r=function(){function t(){this.source=o.createBufferSource(),this.pinkData=[0,0,0,0,0,0,0];for(var e=o.createBuffer(t.CHANNELS,t.FRAME_COUNT,o.sampleRate),n=0;n<t.CHANNELS;n++)for(var r=e.getChannelData(n),i=0;i<t.FRAME_COUNT;i++)r[i]=this.makePinkNoise();this.source.buffer=e,this.source.loop=!0,this.source.start()}return t.prototype.start=function(){this.source.connect(o.destination)},t.prototype.stop=function(){this.source.disconnect(o.destination)},t.prototype.makePinkNoise=function(){var t=2*Math.random()-1;this.pinkData[0]=.99886*this.pinkData[0]+.0555179*t,this.pinkData[1]=.99332*this.pinkData[1]+.0750759*t,this.pinkData[2]=.969*this.pinkData[2]+.153852*t,this.pinkData[3]=.8665*this.pinkData[3]+.3104856*t,this.pinkData[4]=.55*this.pinkData[4]+.5329522*t,this.pinkData[5]=-.7616*this.pinkData[5]-.016898*t;var e=.11*(this.pinkData.reduce(i,0)+.5362*t);return this.pinkData[6]=.115926*t,e},t}();r.CHANNELS=2,r.FRAME_COUNT=2*o.sampleRate,e.Noise=r;var i=function(t,e){return t+e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0);o.domready().then(function(){(new r.App).bootstrap()})}]);