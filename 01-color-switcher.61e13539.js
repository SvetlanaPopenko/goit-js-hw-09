!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),c=document.querySelector("body"),i=null;isActive=!0,t.addEventListener("click",(function(){isActive&&(i=setInterval((function(){c.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),700),t.setAttribute("disabled",!0));isActive=!1})),e.addEventListener("click",(function(){clearInterval(i),isActive||t.removeAttribute("disabled",!0);isActive=!0}))}();
//# sourceMappingURL=01-color-switcher.61e13539.js.map
