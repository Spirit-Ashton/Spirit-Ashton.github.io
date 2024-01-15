

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
    <div class="thumbnail" style="--idx: ${i - 1}" id="buttonFrame">
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
Unmask.innerHTML += `
  <div class="thumbnail zoom">
    <img src="${projectPreviewData[0].img}" alt=""></img>
      <video data-inline-media playsInline autoplay muted loop preload="metadata">
        <source src="${projectPreviewData[0].video}">
      </video>
  </div>
`;
// var testBtn = document.querySelector

var frameButton;
frameButton = document.getElementById("buttonFrame");
var currentIndex = 0;
function ButtonPress() {
  frameButton.disabled = true;
  thumbnailListWrapper.children[0].removeAttribute('id');
  $(thumbnailListWrapper.children[0].cloneNode(true)).appendTo(Unmask);
  thumbnailListWrapper.children[0].remove();
  setTimeout(() => {
    Unmask.children[1].classList.add("zoom");
  }, 10)
  setTimeout(() => {
    $(Unmask.children[0]).appendTo(".previewWrapper");
    thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].classList.remove("zoom");
    thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].style = `--idx: ${thumbnailListWrapper.childElementCount - 1}`;
    frameButton = document.getElementById("buttonFrame");
    frameButton.disabled = false;
    frameButton.addEventListener("click", ButtonPress);
  }, 650)

  Unmask.children[0].style = `--idx: 0`;
  thumbnailListWrapper.children[0].id = `buttonFrame`;

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
};

frameButton.addEventListener("click", ButtonPress);

// const nextBtn = document.querySelector(".previewNav .nextButton");
// nextBtn.addEventListener("click", () => {
//   nextBtn.disabled = true;
//   //thumbnailListWrapper.appendChild(Unmask.children[0]);
//   // $(Unmask.children[0]).appendTo(".previewWrapper");
//   // thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].classList.remove("zoom");
//   // var clone = thumbnailListWrapper.children[0].cloneNode(true);
//   // var clone2 = thumbnailList.children[2];

//   // clone.classList.remove("zoom");  
//   // thumbnailListWrapper.appendChild(clone);
//   // $(clone2).appendTo(thumbnailListWrapper);
//   // $(clone).appendTo(thumbnailListWrapper);
//   // $(clone).appendTo(thumbnailList);
//   // $(".thumbnail.zoom").prependTo(".previewWrapper"); 
//   // thumbnailListWrapper.children[1].classList.add("zoom");
  
//   // var clone3 = thumbnailListWrapper.children[0].cloneNode(true);
//   // clone3.classList.add("zoom");
//   // $(clone3).appendTo(thumbnailList);
//   // $(clone2).appendTo(".previewWrapper");
//   // clone2.classList.remove("zoom");

//   thumbnailListWrapper.children[0].removeAttribute('id');
//   $(thumbnailListWrapper.children[0].cloneNode(true)).appendTo(Unmask);
//   thumbnailListWrapper.children[0].remove();
//   //Unmask.children[0].classList.add("zoom");
//   setTimeout(() => {
//     Unmask.children[1].classList.add("zoom");
//   }, 10)

//   setTimeout(() => {
//     // thumbnailListWrapper.children[0].remove();
//     // Unmask.children[0].classList.add("zoom");
//     // $(Unmask.children[0]).appendTo(".previewWrapper");
//     // thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].classList.remove("zoom");
//     $(Unmask.children[0]).appendTo(".previewWrapper");
//     thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].classList.remove("zoom");
//     thumbnailListWrapper.children[thumbnailListWrapper.childElementCount - 1].style = `--idx: ${thumbnailListWrapper.childElementCount - 1}`;
//     nextBtn.disabled = false;
//     //thumbnailListWrapper.children[0].id = `buttonFrame`;
//   }, 1000)

//   Unmask.children[0].style = `--idx: 0`;
//   thumbnailListWrapper.children[0].id = `buttonFrame`;
  

//   for (let i = 0; i < thumbnailListWrapper.childElementCount; i++) {
//     thumbnailListWrapper.children[i].style = `--idx: ${i}`;
//   }
//   if (currentIndex < projectPreviewData.length - 1) {
//     currentIndex++;
//   } else currentIndex = 0;
//   for (let i = 0; i < projectPreviewData.length; i++) {
//     previewIntro.children[i].classList.remove("active");
//     previewNumber.children[i].classList.remove("active");
//   }
//   previewIntro.children[currentIndex].classList.add("active");
//   previewNumber.children[currentIndex].classList.add("active");
//   previewNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
// });
var t
window.onresize = () => {
    resizing(this, this.innerWidth, this.innerHeight) //1
    if (typeof t == 'undefined') resStarted() //2
    clearTimeout(t); t = setTimeout(() => { t = undefined; resEnded() }, 500) //3
}

function resizing(target, w, h) {
    console.log(`Youre resizing: width ${w} height ${h}`)
}    
function resStarted() { 
    document.body.classList.add("resize-animation-stopper");
    console.log('Resize Started') 
}
function resEnded() { 
    document.body.classList.remove("resize-animation-stopper");
    console.log('Resize Ended') 
}