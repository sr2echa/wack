<p align="center">
  <img alt="Wack Icon" src="./icon.png">
</p>

<h3 align="center" width=100px>
  
  ` ~W̵o̵r̵d̵l̵e̵ ̵H̵a̵x̵k̵ ~ `
  <br>
  Your last resort in woordle to maintain your woordle win streak
</h3>

<br>

## 📥 Installation 
  
- [Chrome Extension](#developer-mode-installation-instructions)
- ~~Firefox Add-on~~  Soon:tm:
- [Bookmark](#install-via-bookmarks)


### Developer Mode Installation Instructions

**Google Chrome / Microsoft Edge** [(or any Chromium-based browser)](https://www.zdnet.com/pictures/all-the-chromium-based-browsers/)  

**1.** Download this repo as a [ZIP file from GitHub](https://github.com/sreechar/wack/archive/refs/heads/main.zip). <br>
**2.** Unzip the file and you should have a folder named `wack-master`. <br>
**3.** In Chrome/Edge go to the extensions page (`chrome://extensions` or `edge://extensions`).<br>
**4.** Enable Developer Mode. <br>
**5.** Drag the `twttr-master` folder anywhere on the page to import it (do not delete the folder afterwards).

### How to use
> **Once installed, just click on the `wack` extention when in https://www.powerlanguage.co.uk/wordle/ page.** <br>
> **It will auto fill the solution and submit! :)**

https://user-images.githubusercontent.com/65058816/152364433-e76c3da7-c9de-413b-8c10-f36df17d37a6.mp4

---

### Install via bookmarks
Make a bookmark with the following URL. When on the wordle page. Click the bookmark to get solution.
```js
javascript:var state=localStorage.getItem("gameState");let convert = (state) => ((new Function( "return " + state) )());answer=convert(state).solution;function typeAnswer(x){window.dispatchEvent(new KeyboardEvent("keydown",x));};Array.from(answer).forEach(alphabet=>typeAnswer({key:alphabet}));typeAnswer({key:"Enter"});
```
This will work in **all browsers** `(chromium/geko)` across **all platforms** `(mobile/pc)`

---




