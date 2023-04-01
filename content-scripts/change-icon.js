console.log('=== this is change icon js=====');

function changeFavicon() {
    const linkElements = document.getElementsByTagName("link");
  
    for (const link of linkElements) {
      if (link.getAttribute("rel") === "icon" || link.getAttribute("rel") === "shortcut icon") {
        link.remove();
      }
    }
  
    const newFavicon = document.createElement("link");
    newFavicon.setAttribute("rel", "icon");
    //newFavicon.setAttribute("type", "image/png");
    newFavicon.setAttribute("type", "image/x-icon");
    newFavicon.setAttribute("href", chrome.runtime.getURL('/icons/icons8-buddha-64.png'));
  
    document.head.appendChild(newFavicon);
  }
  window.setInterval(function(){
    changeFavicon();
  },5000);
  
  
// var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
// console.log('=== link ====', link);
// const url = new URL(chrome.runtime.getURL('/icons/icons8-buddha-64.png'));
// link.type = 'image/png';
// link.rel = 'shortcut icon';
// link.href = url;

// document.getElementsByTagName('head')[0].appendChild(link);
// console.log('=== link ====', url);
// var link = document.querySelector("link[rel*='icon']");
// console.log('=== link ====', link);
// var href = "icons/myicon.ico";
// console.log('=== href ====', href);
// //document.querySelector('link[rel*="icon"]').href = chrome.extension.getURL("icon/icons8-buddha-64.png");
// link.href = href;
// window.setTimeout(function(){
//     link.href = href;
// },2000);