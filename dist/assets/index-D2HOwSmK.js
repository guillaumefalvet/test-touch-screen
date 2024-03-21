(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();const r={hover:!1,coarse:!1,fine:!1,none:!1};matchMedia("(hover: hover)").matches&&(r.hover=!0);matchMedia("(pointer: coarse)").matches&&(r.coarse=!0);matchMedia("(pointer: fine)").matches&&(r.fine=!0);matchMedia("(pointer: none)").matches&&(r.none=!0);const s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",c=window.screen.width,p=window.screen.height,a=navigator.platform,l=navigator.appName,d=navigator.appVersion;console.log("Device Type: "+s);console.log("Screen Width: "+c);console.log("Screen Height: "+p);console.log("Operating System: "+a);console.log("Browser Name: "+l);console.log("Browser Version: "+d);document.querySelector("#app").innerHTML=`
  <div>
    <p>Device Type: ${s}</p>
    <p>User Agent: ${navigator.userAgent}</p>
    <p>Screen Width: ${c}px</p>
    <p>Screen Height: ${p}px</p>
    <p>Operating System: ${a}</p>
    <p>Browser Name: ${l}</p>
    <p>Browser Version: ${d}</p>
    <p>Hover supported: ${r.hover}</p>
    <p>Coarse supported: ${r.coarse}</p>
    <p>Coarse description: if the primary input mechanism of the device includes a pointing device of limited accuracy, we use coarse</p>
    <p>Fine supported: ${r.fine}</p>
    <p>None supported: ${r.none}</p>
    <button class="${r.hover?"btn":""}">Click me</button>
  </div>
`;
