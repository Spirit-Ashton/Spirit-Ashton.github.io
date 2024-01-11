var projectPreviewData = [
  {
    img: "./Screenshot (282).png",
    title: "Insionné",
    type: "Platformer Game",
    description: "This is a platformer game, blah de blah de blah!",
  },
  {
    img: "./Vid Poster.jpg",
    title: "Fruit Star!",
    type: "Platformer Game",
    description: "This is a simple platformer, fruits go yum!",
  },
  {
    img: "./Funky Farah.jpg",
    title: "Funky Fairy!",
    type: "Logo Design",
    description: "This is a logo I made. Colours go pop!",
  },
];

const previewIntro = document.querySelector(".previewIntro");
const previewNumber = document.querySelector(".previewNumber")

previewIntro.innerHTML = "";
previewNumber.innerHTML = "";
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

  previewNumber.innerHTML += `<h2>0${i + 1}<h2>`
}

previewIntro.children[0].classList.add("active");
previewNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(".thumbnailList .previewWrapper");
thumbnailListWrapper.innerHTML += `
  <div class="thumbnail zoom">
    <img src="${projectPreviewData[0].img}" alt=""></img>
  </div>
`;
for (let i = 1; i < projectPreviewData.length; i++) {
  thumbnailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i - 1}">
      <img src="${projectPreviewData[i].img}" alt=""></img>
    </div>
  `;
}
console.log(thumbnailListWrapper.innerHTML);
const nextBtn = document.querySelector(".previewNav .nextButton");
var currentIndex = 0;
nextBtn.addEventListener("click", () => {
  nextBtn.disabled = true;
  var clone = thumbnailListWrapper.children[0].cloneNode(true);
  clone.classList.remove("zoom");
  thumbnailListWrapper.appendChild(clone);
  thumbnailListWrapper.children[1].classList.add("zoom");
  setTimeout(() => {
    thumbnailListWrapper.children[0].remove();
    nextBtn.disabled = false;
  }, 1000)

  for (let i = 2; i < thumbnailListWrapper.childElementCount; i++) {
    thumbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
  }
  if (currentIndex < projectPreviewData.length - 1) {
    currentIndex++;
  } else currentIndex = 0;
  for (let i = 0; i < projectPreviewData.length; i++) {
    previewIntro.children[i].classList.remove("active");
    previewNumber.children[i].classList.remove("active");
  }
  previewIntro.children[currentIndex].classList.add("active");
  previewNumber.children[currentIndex].classList.add("active");
  previewNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});
