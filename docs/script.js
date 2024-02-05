var projectPreviewData = [
  {
    img: "./Feature Files/FruitStar/Vid Poster.jpg",
    videoWebm: "./Feature Files/FruitStar/Test WebBG Vid.webm",
    videoMp4: "./Feature Files/FruitStar/The Perfect Run.mp4",
    title: "Fruit Star!",
    type: "Platformer Game",
    description: "A Basic 2D Platformer Project focused on stability.",
    offsetX: 100,
    offsetY: 50,
    link: "./Projects/Fruit Star.html"
  },
  {
    img: "./Feature Files/Insionne/Screenshot (282).png",
    videoWebm: "./Feature Files/Insionne/Insionne Camera Work.webm",
    videoMp4: "./Feature Files/Insionne/Insionne Camera Work 720p.mp4",
    title: "Insionné",
    type: "Platformer Game",
    description: "A 2D Platformer Project with complex movement and a custom camera.",
    offsetX: 100,
    offsetY: 130,
    link: "./Projects/Insíonne.html"
  },
  {
    img: "./Feature Files/FunkyFarah/Funky Farah.jpg",
    videoWebm: "./Feature Files/FunkyFarah/Funky Farah.jpg",
    videoMp4: "./Feature Files/FunkyFarah/Funky Farah.jpg",
    title: "Funky Fairy!",
    type: "Logo Design",
    description: "A Logo I created with a pop 90s vibe.",
    offsetX: 280,
    offsetY: 85,
    link: "./Projects/Fruit Star/Fruit Star.html"
  },
  {
    img: "./Feature Files/UCLPpt/Screenshot (285).png",
    videoWebm: "./Feature Files/UCLPpt/HDWER Background Effect.webm",
    videoMp4: "./Feature Files/UCLPpt/HDWER Background Effect.mp4",
    title: "How do writer's Engage Readers?",
    type: "Powerpoint Animation Challenge",
    description: "This is an animated powerpoint I created as a challenge to animate in powerpoint!",
    offsetX: 0,
    offsetY: 120,
    link: "./Projects/Fruit Star/Fruit Star.html"
  },
  {
    img: "./Feature Files/CrownedStar/Crowned Star Final.png",
    videoWebm: "./Feature Files/CrownedStar/Crowned Star Final.png",
    videoMp4: "./Feature Files/CrownedStar/Crowned Star Final.png",
    title: "Crowned Star",
    type: "Logo Design",
    description: "A Logo I created for a TV Series/Brand",
    offsetX: 0,
    offsetY: 80,
    link: "./Projects/Fruit Star/Fruit Star.html"
  },
  {
    img: "./Feature Files/ThisWebsite/Screenshot (286).png",
    videoWebm: "./Feature Files/ThisWebsite/Screenshot (286).png",
    videoMp4: "./Feature Files/ThisWebsite/Screenshot (286).png",
    title: "This Website!",
    type: "Web Development",
    description: "A Full Website developed to show off my other creations and projects.",
    offsetX: 0,
    offsetY: 0,
    link: "./Projects/Fruit Star/Fruit Star.html"
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
        <a href="${projectPreviewData[i].link}"><button class="readMoreButton" style="--idx: 3">Read More</button></a>
      </span>
    </div>
  `;

  // previewNumber.innerHTML += `<h2>0${i + 1}<h2>`
}

previewIntro.children[0].classList.add("active");
// previewNumber.children[0].classList.add("active");

const thumbnailList = document.querySelector(".previewContent .thumbnailList");
const Unmask = document.querySelector(".thumbnailList .previewWrapperUnmask");
const thumbnailListWrapper = document.querySelector(".thumbnailList .previewWrapper .scrollWrapper");
const thumbnailMain = document.querySelector(".thumbnailList .previewWrapper");

for (let i = 1; i < (2 * projectPreviewData.length - 1); i++) {
  if (i == 1){
    thumbnailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i - 1}; --dataidx: ${i}; --offset: ${0}px; --BGoffsetX: ${projectPreviewData[i].offsetX}; --BGoffsetY: ${projectPreviewData[i].offsetY};" id="Number 0">
      <img style="pointer-events: none;" src="${projectPreviewData[i].img}" alt=""></img>
      <video preload="yes" data-inline-media playsInline autoplay muted loop preload="metadata" style="pointer-events: none; ">
        <source src="${projectPreviewData[i].videoWebm}" type="video/webm">
        <source src="${projectPreviewData[i].videoMp4}" type="video/mp4">
      </video>
    </div>
  `;
  } else if (i < projectPreviewData.length) {
    thumbnailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i - 1}; --dataidx: ${i}; --offset: ${0}px; --BGoffsetX: ${projectPreviewData[i].offsetX}; --BGoffsetY: ${projectPreviewData[i].offsetY};">
      <img style="pointer-events: none;" src="${projectPreviewData[i].img}" alt=""></img>
      <video preload="yes" data-inline-media playsInline autoplay muted loop preload="metadata" style="pointer-events: none; ">
      <source src="${projectPreviewData[i].videoWebm}" type="video/webm">
      <source src="${projectPreviewData[i].videoMp4}" type="video/mp4">
      </video>
    </div>
  `;
  } else {
  //   thumbnailListWrapper.innerHTML += `
  //   <div class="thumbnail" style="--idx: ${i - 1}; --dataidx: ${i - projectPreviewData.length}">
  //     <img src="${projectPreviewData[i - projectPreviewData.length + 1].img}" alt=""></img>
  //     <video data-inline-media playsInline autoplay muted loop preload="metadata">
  //       <source src="${projectPreviewData[i - projectPreviewData.length + 1].video}">
  //     </video>
  //   </div>
  // `;
  }
}

var ZoomFocus = document.getElementById("Number 0").cloneNode(true);
ZoomFocus.id = `PositionFocus`;
$(ZoomFocus).appendTo(thumbnailMain);
ZoomFocus.classList.add("Hidden");

var Cards = thumbnailListWrapper.children;
var CardData = [];
var CardId = [];
thumbnailListWrapper.style.setProperty(`--frames`,thumbnailListWrapper.childElementCount);
var CardPasses = 0;
var TimeCoef = 4/7 * (thumbnailListWrapper.childElementCount - 1);
var LengthMult = 99999;
// var ScrollLength = Cards[0].getBoundingClientRect().width + parseFloat(window.getComputedStyle(Cards[0]).marginLeft);
// var ScrollDist = 0;
thumbnailListWrapper.style.setProperty(`--endInt`, LengthMult);
thumbnailListWrapper.style.animation = `scrollframe ${TimeCoef * LengthMult}s linear forwards infinite`;

// thumbnailListWrapper.addEventListener(`animationiteration`, ()=> {
//   console.log("iterate");
//   ScrollDist = ScrollDist - ScrollLength;
//   for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
//     Cards[i].style.left =  `${ScrollDist}px`;
//   }
// });

thumbnailMain.addEventListener('mouseenter' , ()=> {
  // thumbnailListWrapper.style.animationPlayState = `paused`;
});
thumbnailMain.addEventListener('mouseleave' , ()=> {
  // thumbnailListWrapper.style.animationPlayState = `running`;
});

var CardDist = Cards[0].getBoundingClientRect().right - thumbnailMain.getBoundingClientRect().left;

var targetObj = {};
var targetProxy = new Proxy(targetObj, {
  set: function (target, key, value) {
      target[key] = value;
      // console.log(`${key} set to ${value}`);
      if (value <= -30) {
        // console.log("Card Has Passed!");
        $(Cards[0]).appendTo(".previewWrapper .scrollWrapper");
        Cards[thumbnailListWrapper.childElementCount - 1].style.setProperty(`--idx`, parseInt(Cards[thumbnailListWrapper.childElementCount - 2].style.getPropertyValue(`--idx`)) + 1);
      }
      return true;
  }
});

targetProxy.CardDist = CardDist;

function VideoToggle(){
  for (let i = 0; i < Cards.length; i++) {
    // console.log(Cards[i].querySelector("video"));
    Cards[i].querySelector("video").pause();
  }
}

VideoToggle();

let CardCheck = function(){
  setInterval(()=> {
    CardDist = Cards[0].getBoundingClientRect().right - thumbnailMain.getBoundingClientRect().left;
    targetProxy.CardDist = CardDist;
    if (ButtonFunctionRun == false) {
      ResetCards();
    }
  }, 1000);
};

window.onload = CardCheck();

function CardButtons(){
  for (let i = 0; i < Cards.length; i++) {
    // Cards[i].addEventListener("click", () => {CardPress(i)});
    Cards[i].id = `Number ${i}`;
    CardData[i] = parseInt(Cards[i].style.getPropertyValue(`--dataidx`));
    CardId[i] = parseInt(Cards[i].style.getPropertyValue(`--idx`));
    Cards[i].addEventListener("click", () => {CardPress(CardId[i], CardData[i])} );
  }
}

function ResetCards(){
  for (let i = 0; i < Cards.length; i++) {
    Cards[i].replaceWith(Cards[i].cloneNode(true));
    Cards[i].id = `Number ${i}`;
    CardData[i] = parseInt(Cards[i].style.getPropertyValue(`--dataidx`));
    CardId[i] = parseInt(Cards[i].style.getPropertyValue(`--idx`));
    Cards[i].addEventListener("click", () => {CardPress(CardId[i], CardData[i])} );
  }
}

var ZoomCenter = document.querySelector(".previewContainer .CenterElement");
var ZoomCoords = ZoomFocus.getBoundingClientRect(); 
var CornerCoords = ZoomCenter.getBoundingClientRect();
var PosCoordsY = ZoomCoords.y - CornerCoords.y;
var PosCoordsX = (ZoomCoords.x - CornerCoords.x);
var PosCoordsX = 0;
Unmask.innerHTML += `
  <div class="thumbnail zoom" style="--idx:0; --dataidx:0; --BGoffsetX: ${projectPreviewData[0].offsetX}; --BGoffsetY: ${projectPreviewData[0].offsetY}; transform: translate(0px , 0px); transition: 0s">
    <img style="pointer-events: none;" src="${projectPreviewData[0].img}" alt=""></img>
      <video preload="yes" data-inline-media playsInline autoplay muted loop preload="metadata" style="pointer-events: none; ">
          <source src="${projectPreviewData[0].videoWebm}" type="video/webm">
          <source src="${projectPreviewData[0].videoMp4}" type="video/mp4">
      </video>
  </div>
`;
// var PosCoordsX = Unmask.children[0].getBoundingClientRect().x - CornerCoords.x;
PosCoordsX = PosCoordsX + parseFloat(Unmask.children[0].style.getPropertyValue(`--BGoffsetX`));
PosCoordsY = PosCoordsY + parseFloat(Unmask.children[0].style.getPropertyValue(`--BGoffsetY`));
Unmask.children[0].style.transform = `translate(calc(-1 * ${PosCoordsX}px), calc(-1 * ${PosCoordsY}px))`;

var currentIndex = 0;

function CardBGPos() {

  ZoomFocus = document.getElementById(`PositionFocus`);
  ZoomCoords = ZoomFocus.getBoundingClientRect();
  CornerCoords = ZoomCenter.getBoundingClientRect();
    
  PosCoordsY = (ZoomCoords.y - CornerCoords.y);
  // PosCoordsX = (ZoomCoords.x - CornerCoords.x);
  PosCoordsX = 0;
  // console.log(PosCoordsX);
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
var dataVal = 0;
let FirstId = 0;
let BackupInterval = 0;
let ButtonFunctionRun = false;

function findCard(interval, callback) {
  BackupInterval = interval;
  for (let i=0; i < Cards.length; i++) {
    if (parseInt(thumbnailListWrapper.children[i].style.getPropertyValue(`--idx`)) == interval) {
      thumbnailListWrapper.children[i].removeAttribute('id'); 
      thumbnailListWrapper.children[i].style.setProperty(`--offset`, `${parseFloat(thumbnailListWrapper.getBoundingClientRect().x) - parseFloat(thumbnailMain.getBoundingClientRect().x)}px`);
      $(thumbnailListWrapper.children[i].cloneNode(true)).appendTo(Unmask);
      thumbnailListWrapper.children[i].remove();
      setTimeout(() => {
        Unmask.children[1].classList.add("zoom");
        if (window.innerWidth <= 1000) {
          PosCoordsX = PosCoordsX + (1000 - window.innerWidth);
        }
        PosCoordsX = PosCoordsX + parseFloat(Unmask.children[1].style.getPropertyValue(`--BGoffsetX`));
        PosCoordsY = PosCoordsY + parseFloat(Unmask.children[1].style.getPropertyValue(`--BGoffsetY`));
        Unmask.children[1].style.transform = `translate(calc(-1 * ${PosCoordsX}px), calc(-1 * ${PosCoordsY}px))`;
        Unmask.childElementCount[1].querySelector('video').play();
      }, 10);
    }
  };
  callback();
}

function requeueBG() {
  if (Unmask.childElementCount > 1) {
    setTimeout(() => {
        Unmask.children[0].style.setProperty(`--idx`, thumbnailListWrapper.childElementCount);
        Unmask.children[0].style.removeProperty(`transform`);
        Unmask.children[0].style.removeProperty(`transition`);
        $(Unmask.children[0]).appendTo(".previewWrapper .scrollWrapper");
        thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].classList.remove("zoom");
        for (let i=0; i < Cards.length; i++) {
          Cards[i].disabled = false;
        }
        FirstId = parseInt(thumbnailListWrapper.children[0].style.getPropertyValue(`--idx`));
        for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
          thumbnailListWrapper.children[i].style.setProperty(`--idx` , FirstId + i ) ;
        }
      ResetCards();
      DisableCardPress = false;
      ButtonFunctionRun = false;
      VideoToggle();
    }, 750);
  }
}

function CardPress(interval , dataid) {
  ButtonFunctionRun = true;
  if (!DisableCardPress) {
    DisableCardPress = true;
    CardBGPos();
    for (let i=0; i < Cards.length; i++) {
      Cards[i].disabled = true;
    }
    findCard(interval, requeueBG); 
    setTimeout(()=> {
      dataVal = 0;
      FirstId = parseInt(thumbnailListWrapper.children[0].style.getPropertyValue(`--idx`));
      if (FirstId == interval + 1) {FirstId = FirstId - 1};
      for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
        thumbnailListWrapper.children[i].style.setProperty(`--idx` , FirstId + i ) ;
      }
    }, 10);
    setTimeout(() => {
      for (let i = 0; i < previewIntro.childElementCount; i++){
        if (previewIntro.children[i].classList.contains("active")) {
          previewIntro.children[i].classList.remove("active");
        }
      }
      previewIntro.children[dataid].classList.add("active");
    }, 0);
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
  if (this.innerWidth <= 1000) {
    CardBGPos();
    PosCoordsX = PosCoordsX + (1000 - this.innerWidth);
    PosCoordsX = PosCoordsX + parseFloat(Unmask.children[0].style.getPropertyValue(`--BGoffsetX`));
    PosCoordsY = PosCoordsY + parseFloat(Unmask.children[0].style.getPropertyValue(`--BGoffsetY`));
    Unmask.children[0].style.transform = `translate(calc(-1 * ${PosCoordsX}px), calc(-1 * ${PosCoordsY}px))`;
    Unmask.children[0].style.transition = `0s`;
  }
}

function resizing(target, w, h) {
    console.log(`Youre resizing: width ${w} height ${h}`);
    CardBGPos();
    if (w <= 1000) {
      PosCoordsX = PosCoordsX + (1000 - w);
    }
    PosCoordsX = PosCoordsX + parseFloat(Unmask.children[0].style.getPropertyValue(`--BGoffsetX`));
    PosCoordsY = PosCoordsY + parseFloat(Unmask.children[0].style.getPropertyValue(`--BGoffsetY`));
    Unmask.children[0].style.transform = `translate(calc(-1 * ${PosCoordsX}px), calc(-1 * ${PosCoordsY}px))`;
    Unmask.children[0].style.transition = `0s`;
    // console.log(Unmask.children[0].getBoundingClientRect().x);
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

// window.addEventListener("focus", function(event) { 
//   console.log("Focus"); 
// }, false);
// window.addEventListener("blur", function(event) { 
//   console.log("Lost Focus");
// }, false);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    thumbnailListWrapper.style.animationPlayState = `paused`;
  } else {
    thumbnailListWrapper.style.animationPlayState = `running`;
  }
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    const id = el.getAttribute('href')?.slice(1)
    if (!id) return
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})