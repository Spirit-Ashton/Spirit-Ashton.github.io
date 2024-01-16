var projectPreviewData = [
  {
    img: "./Vid Poster.jpg",
    video: "./Test WebBG Vid.webm",
    title: "Fruit Star!",
    type: "Platformer Game",
    description: "This is a simple platformer, fruits go yum!",
  },
  {
    img: "./Screenshot (282).png",
    // video: "./Test WebBG Vid.webm",
    title: "Insionné",
    type: "Platformer Game",
    description: "This is a platformer game, blah de blah de blah!",
  },
  {
    img: "./Funky Farah.jpg",
    // video: "./Test WebBG Vid.webm",
    title: "Funky Fairy!",
    type: "Logo Design",
    description: "This is a logo I made. Colours go pop!",
  },
  {
    img: "./black.jpg",
    // video: "./Test WebBG Vid.webm",
    title: "BLACK!",
    type: "Black Screen",
    description: "Black",
  },
  {
    img: "./Screenshot (28).png",
    // video: "./Test WebBG Vid.webm",
    title: "Minecraft",
    type: "Block Game",
    description: "I made le Mine game",
  },
];

const previewIntro = document.querySelector(".previewIntro");
// const previewNumber = document.querySelector(".previewNumber");

previewIntro.innerHTML = "";
//   previewNumber.innerHTML = "";
for (let i = 0; i < projectPreviewData.length; i++) {
  previewIntro.innerHTML += `
    <div class="previewTextWrapper">
      <span><h5 class="title" style="--idx: 0">${projectPreviewData[i].title}</h5></span>
      <span><h5 class="type" style="--idx: 1">${projectPreviewData[i].type}</h5></span>
      <span><h5 class="description" style="--idx: 2">${projectPreviewData[i].description}</h5></span>
      <span>
        <button class="readMoreButton" style="--idx: 3">Read More</button>
      </span>
    </div>
  `;

  // previewNumber.innerHTML += `<h2>0${i + 1}<h2>`
}

previewIntro.children[0].classList.add("active");
// previewNumber.children[0].classList.add("active");

const thumbnailList = document.querySelector(".previewContent .thumbnailList");
const Unmask = document.querySelector(".thumbnailList .previewWrapperUnmask")
const thumbnailListWrapper = document.querySelector(".thumbnailList .previewWrapper");
// const Unmaskthumbnail = document.querySelector(".thumbnailList .previewWrapperUnmask .thumbnail");
// const thumbnail = document.querySelector(".thumbnailList .previewWrapper .thumbnail");
// thumbnailListWrapper.innerHTML += `
//   <div class="thumbnail zoom">
//     <img src="${projectPreviewData[0].img}" alt=""></img>
//       <video playsinline autoplay muted loop>
//         <source src="${projectPreviewData[0].video}">
//       </video>
//   </div>
// `;

for (let i = 1; i < projectPreviewData.length; i++) {
  if (i == 1){
    thumbnailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i - 1}" id="Number 0">
      <img src="${projectPreviewData[i].img}" alt=""></img>
      <video data-inline-media playsInline autoplay muted loop preload="metadata">
        <source src="${projectPreviewData[i].video}">
      </video>
    </div>
  `;
  } else {
    thumbnailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i - 1}">
      <img src="${projectPreviewData[i].img}" alt=""></img>
      <video data-inline-media playsInline autoplay muted loop preload="metadata">
        <source src="${projectPreviewData[i].video}">
      </video>
    </div>
    `;
  }
}
//thumbnailList.innerHTML += `
//   <div class="thumbnail zoom">
//     <img src="${projectPreviewData[0].img}" alt=""></img>
//       <video playsinline autoplay muted loop>
//         <source src="${projectPreviewData[0].video}">
//       </video>
//   </div>
// `;
var lastPressed;
var ZoomFocus = document.getElementById("Number 0");
var allFrames =  document.querySelectorAll(".thumbnailList .previewWrapper .thumbnail");
var allButtons = allFrames;
var Cards = thumbnailListWrapper.children;
// var singleButton;
// var allButtons = thumbnailListWrapper.childNodes;

// for (let i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener("click", () => {
//     console.log("A Button Was Pressed!")
//     console.log(allButtons[i].style.getPropertyValue("--idx"));
//     console.log(allButtons);
//   });
//   allButtons[i].addEventListener("click", () => {ButtonPressIter(allButtons[i].style.getPropertyValue("--idx"))});
// }
// console.log(allButtons);


function CardButtons(){
  for (let i = 0; i < Cards.length; i++) {
    console.log("Set Button");
    Cards[i].addEventListener("click",() => {console.log("Pressed")});
    // Cards[i].addEventListener("click", () => {CardPress(i)});
    Cards[i].id = `Number ${i}`;
    Cards[i].addEventListener("click", () => {CardPress(i)} );
  }
  // Cards[0].addEventListener("click", () => {CardPress(0)} );
  // Cards[1].addEventListener("click", NoticeButton)
  // Cards[1].addEventListener("click", () => {CardPress(1)} );
}

function ResetCards(){
  for (let i = 0; i < Cards.length; i++) {
    Cards[i].replaceWith(Cards[i].cloneNode(true));
    Cards[i].id = `Number ${i}`;
    Cards[i].addEventListener("click", () => {CardPress(i)} );
  }
}
// function SetButtons(){
//   allButtons =  document.querySelectorAll(".thumbnailList .previewWrapper .thumbnail");
//   for (let i = 0; i < allButtons.length; i++) {
//     allFrames[i] = 0;
//   }
//   for (let i = 0; i < allButtons.length; i++) {
//     allFrames[i] = allButtons[i];
//     allFrames[i].addEventListener("click", () => {
//       console.log[allButtons];
//       // console.log("A Button Was Pressed!")
//       // console.log(allButtons[i].style.getPropertyValue("--idx"));
//       for (let i = 0; i < allButtons.length; i++) {
//         console.log(allButtons[i].style.getPropertyValue("--idx"));
//       }
//     });
//     allFrames[i].addEventListener("click", () => {ButtonPressIter(allFrames[i].style.getPropertyValue("--idx"))});
//   }
// }

// function SetSingleButton(interval){
//   allButtons =  document.querySelectorAll(".thumbnailList .previewWrapper .thumbnail");
//   console.log(allButtons);
//   // singleButton = allButtons[interval];
//   // allFrames[interval] = allButtons[interval];
//   $(allFrames[interval]).replaceWith($(allFrames[interval]).clone());
//   for (let i = 0; i < allFrames.length; i++) {
//     console.log(allFrames[i]);
//   }
//   allFrames[interval].addEventListener("click", () => {
//     for (let i = 0; i < allButtons.length; i++) {
//       console.log(allButtons[i].style.getPropertyValue("--idx"));
//     }
//   });
//   allFrames[interval].addEventListener("click", () => {ButtonPressIter(allFrames[interval].style.getPropertyValue("--idx"))});
//   // allFrames[interval].id = `Pressable ${interval}`;
// }

// allButtons.addEventListener("click",() => {console.log("A Frame was Clicked!")});

var ZoomCenter = document.querySelector(".previewContainer .CenterElement");
var ZoomCoords = ZoomFocus.getBoundingClientRect(); 
var CornerCoords = ZoomCenter.getBoundingClientRect();
var PosCoordsY = ZoomCoords.top - CornerCoords.top;
var PosCoordsX = (ZoomCoords.left - CornerCoords.left);
Unmask.innerHTML += `
  <div class="thumbnail zoom" style="--idx:0; transform: translate(-${PosCoordsX}px, -${PosCoordsY}px)">
    <img src="${projectPreviewData[0].img}" alt=""></img>
      <video data-inline-media playsInline autoplay muted loop preload="metadata">
        <source src="${projectPreviewData[0].video}">
      </video>
  </div>
`;


var currentIndex = 0;

function CardBGPos() {

  ZoomFocus = document.getElementById("Number 0");
  ZoomCoords = ZoomFocus.getBoundingClientRect();
  CornerCoords = ZoomCenter.getBoundingClientRect();
    
  PosCoordsY = (ZoomCoords.top - CornerCoords.top);
  PosCoordsX = (ZoomCoords.left - CornerCoords.left);
}
// function ButtonPress() {
//   CardBGPos();
//   thumbnailListWrapper.children[0].removeAttribute('id');
//   $(thumbnailListWrapper.children[0].cloneNode(true)).appendTo(Unmask);
//   thumbnailListWrapper.children[0].remove();
//   setTimeout(() => {
//     Unmask.children[1].classList.add("zoom");
//     if (window.innerWidth <= 1000) {
//       PosCoordsX = PosCoordsX + (1000 - window.innerWidth);
//     }
//     Unmask.children[1].style.transform = `translate(-${PosCoordsX}px, -${PosCoordsY}px)`;
//   }, 10)
//   setTimeout(() => {
//     Unmask.children[0].style = `--idx: 0`;
//     $(Unmask.children[0]).appendTo(".previewWrapper");
//     thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].classList.remove("zoom");
//     thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].style = `--idx: ${thumbnailListWrapper.childElementCount - 1}`;
//     frameButton = document.getElementById("buttonFrame");
//     frameButton.disabled = false;
//     frameButton.addEventListener("click", ButtonPress);
//   }, 650)
  
//   thumbnailListWrapper.children[0].id = `buttonFrame`;

//   for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
//     thumbnailListWrapper.children[i].style = `--idx: ${i}`;
//   }
//   if (currentIndex < projectPreviewData.length - 1) {
//     currentIndex++;
//   } else currentIndex = 0;
//   for (let i = 0; i < projectPreviewData.length; i++) {
//     previewIntro.children[i].classList.remove("active");
//     // previewNumber.children[i].classList.remove("active");
//   }
//   previewIntro.children[currentIndex].classList.add("active");
//   // previewNumber.children[currentIndex].classList.add("active");
//   // previewNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
// };

// function ButtonPressIter(FramePos) {
//   console.log("Running");
//   CardBGPos(allButtons[FramePos]);
//   lastPressed = allButtons[FramePos];
//   // frameButton.disabled = true;
//   for (let i = 0; i < allButtons.length; i++) {
//     allButtons[i].disabled = true;
//   }
//   // thumbnailListWrapper.children[FramePos].removeAttribute('id');
//   $(thumbnailListWrapper.children[FramePos].cloneNode(true)).appendTo(Unmask);
//   thumbnailListWrapper.children[FramePos].remove();

//   setTimeout(() => {
//     Unmask.children[1].classList.add("zoom");
//     if (window.innerWidth <= 1000) {
//       PosCoordsX = PosCoordsX + (1000 - window.innerWidth);
//     }
//     Unmask.children[1].style = `--idx: 0`;
//     Unmask.children[1].style.transform = `translate(-${PosCoordsX}px, -${PosCoordsY}px)`;
//   }, 10)

//   setTimeout(() => {
//     Unmask.children[0].style = `--idx: 0`;
//     $(Unmask.children[0]).appendTo(".previewWrapper");
//     thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].classList.remove("zoom");
//     thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].style = `--idx: ${thumbnailListWrapper.childElementCount - 1}`;
//     // frameButton = document.getElementById("buttonFrame");
//     // frameButton.disabled = false;
//     // frameButton.addEventListener("click", () => {ButtonPressIter(frameButton.style.getPropertyValue("--idx"))});
//     for (let i = 0; i < allButtons.length; i++) {
//       allButtons[i].disabled = false;
//     }
//     // SetButtons();
//   }, 650)
//   setTimeout(() =>{
//     for (let i = 0; i < allButtons.length; i++) {
//       SetSingleButton(i);
//     }
//   }, 800);
//   // thumbnailListWrapper.children[0].id = `buttonFrame`;

//   for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
//     thumbnailListWrapper.children[i].style = `--idx: ${i}`;
//   }
//   if (currentIndex < projectPreviewData.length - 1) {
//     currentIndex++;
//   } else currentIndex = 0;
//   for (let i = 0; i < projectPreviewData.length; i++) {
//     previewIntro.children[i].classList.remove("active");
//     // previewNumber.children[i].classList.remove("active");
//   }
//   previewIntro.children[currentIndex].classList.add("active");
//   // previewNumber.children[currentIndex].classList.add("active");
//   // previewNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
// };

// frameButton.addEventListener("click", ButtonPress);
// frameButton.addEventListener("click", () => {ButtonPressIter(frameButton.style.getPropertyValue("--idx"))});

// console.log(frameButton.style.getPropertyValue("--idx"));

var DisableCardPress = false;

function CardPress(interval) {
  if (!DisableCardPress) {
    DisableCardPress = true;
    CardBGPos();
    for (let i=0; i < Cards.length; i++) {
      Cards[i].disabled = true;
    }
    thumbnailListWrapper.children[interval].removeAttribute('id');
    $(thumbnailListWrapper.children[interval].cloneNode(true)).appendTo(Unmask);
    thumbnailListWrapper.children[interval].remove();
    setTimeout(() => {
      Unmask.children[1].classList.add("zoom");
      if (window.innerWidth <= 1000) {
        PosCoordsX = PosCoordsX + (1000 - window.innerWidth);
      }
      Unmask.children[1].style.transform = `translate(-${PosCoordsX}px, -${PosCoordsY}px)`;
    }, 10)
    setTimeout(() => {
      Unmask.children[0].style = `--idx: 0`;
      Unmask.children[1].style.setProperty(`--idx`, `0`);
      $(Unmask.children[0]).appendTo(".previewWrapper");
      thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].classList.remove("zoom");
      thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].style = `--idx: ${thumbnailListWrapper.childElementCount - 1}`;
      // Cards[interval] = document.getElementById("buttonFrame");
      for (let i=0; i < Cards.length; i++) {
        Cards[i].disabled = false;
      }
      Cards[interval].addEventListener("click", () => {CardPress(interval)});
      ResetCards();
      DisableCardPress = false;
    }, 650)

    setTimeout(() => {

    })
    
    // thumbnailListWrapper.children[0].id = `buttonFrame`;

    for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
      thumbnailListWrapper.children[i].style = `--idx: ${i}`;
    }
    if (currentIndex < projectPreviewData.length - 1) {
      currentIndex++;
    } else currentIndex = 0;
    for (let i = 0; i < projectPreviewData.length; i++) {
      previewIntro.children[i].classList.remove("active");
      // previewNumber.children[i].classList.remove("active");
    }
    previewIntro.children[currentIndex].classList.add("active");
    // previewNumber.children[currentIndex].classList.add("active");
    // previewNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
    
  }
};




var t
window.onresize = () => {
    resizing(this, this.innerWidth, this.innerHeight) //1
    if (typeof t == 'undefined') resStarted() //2
    clearTimeout(t); t = setTimeout(() => { t = undefined; resEnded() }, 500) //3
}

var CardBGOffset = 0;
window.onload = windowCheck();
// window.onload = SetButtons();
window.onload = CardButtons();

function windowCheck() {
  CardBGPos();
  if (this.innerWidth <= 1000) {
    PosCoordsX = PosCoordsX + (1000 - this.innerWidth);
  }
  Unmask.children[0].style.transform = `translate(-${PosCoordsX}px, -${PosCoordsY}px)`;
  Unmask.children[0].style.transition = `0s`;
}

function resizing(target, w, h) {
    console.log(`Youre resizing: width ${w} height ${h}`);
    CardBGPos();
    console.log();
    if (w <= 1000) {
      PosCoordsX = PosCoordsX + (1000 - w);
    }
    Unmask.children[0].style.transform = `translate(-${PosCoordsX}px, -${PosCoordsY}px)`;
    Unmask.children[0].style.transition = `0s`;
    for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
      thumbnailListWrapper.children[i].style.transition = `0s`;
    }
}    
function resStarted() { 
    document.body.classList.add("resize-animation-stopper");
    console.log('Resize Started') 
}
function resEnded() { 
    document.body.classList.remove("resize-animation-stopper");
    console.log('Resize Ended') 
    Unmask.children[0].style.removeProperty("transition");
    Unmask.style.removeProperty("transition");
    for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
      thumbnailListWrapper.children[i].style.removeProperty("transition");
    }
}