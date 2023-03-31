console.log('=== this is change icon js=====');
// var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
// console.log('=== link ====', link);
// link.type = 'image/png';
// link.rel = 'shortcut icon';
// link.href = chrome.extension.getURL("icon/icons8-buddha-64.png");
// document.getElementsByTagName('head')[0].appendChild(link);
var link = document.querySelector("link[rel*='icon']");
console.log('=== link ====', link);
var href = "icons/icons8-buddha-64.png";
console.log('=== href ====', href);
//document.querySelector('link[rel*="icon"]').href = chrome.extension.getURL("icon/icons8-buddha-64.png");
link.href = href;
window.setTimeout(function(){
    link.href = href;
},2000);