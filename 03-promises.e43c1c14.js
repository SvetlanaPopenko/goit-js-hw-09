var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");function r(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:t,amount:o,step:n}=e.target.elements;let l=Number(t.value);for(let e=0;e<o.value;e+=1)r(e,l).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{timeout:1e3})})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{timeout:1e3})})),l+=Number(n.value);e.target.reset()}));
//# sourceMappingURL=03-promises.e43c1c14.js.map
