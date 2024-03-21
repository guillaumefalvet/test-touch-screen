import './style.css'

const pointerType = {
  hover: false,
  coarse: false,
  fine: false,
  none: false,
}

// Check if the device supports hover 
//* https://ferie.medium.com/detect-a-touch-device-with-only-css-9f8e30fa1134
//* https://dev.to/niorad/detecting-hover-and-touch-in-css-and-js-4e42
//* https://stackoverflow.com/questions/63076960/detecting-touch-devices-and-detecting-can-hover-with-javascript-in-2020
if (matchMedia('(hover: hover)').matches) {
  pointerType.hover = true;
}
if (matchMedia('(pointer: coarse)').matches) {
  pointerType.coarse = true;
}
if (matchMedia('(pointer: fine)').matches){
  pointerType.fine = true;
}
if (matchMedia('(pointer: none)').matches){
  pointerType.none = true;
}

// Device Type
const deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

// Screen Dimensions
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

// Operating System
const operatingSystem = navigator.platform;

// Browser
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

// Displaying the information
console.log("Device Type: " + deviceType);
console.log("Screen Width: " + screenWidth);
console.log("Screen Height: " + screenHeight);
console.log("Operating System: " + operatingSystem);
console.log("Browser Name: " + browserName);
console.log("Browser Version: " + browserVersion);

document.querySelector('#app')!.innerHTML = `
  <div>
    <p>Device Type: ${deviceType}</p>
    <p>User Agent: ${navigator.userAgent}</p>
    <p>Screen Width: ${screenWidth}px</p>
    <p>Screen Height: ${screenHeight}px</p>
    <p>Operating System: ${operatingSystem}</p>
    <p>Browser Name: ${browserName}</p>
    <p>Browser Version: ${browserVersion}</p>
    <p>Hover supported: ${pointerType.hover}</p>
    <p>Coarse supported: ${pointerType.coarse}</p>
    <p>Coarse description: if the primary input mechanism of the device includes a pointing device of limited accuracy, we use coarse</p>
    <p>Fine supported: ${pointerType.fine}</p>
    <p>None supported: ${pointerType.none}</p>
    <button class="${pointerType.hover ? 'btn' : ''}">Click me</button>
  </div>
`;
