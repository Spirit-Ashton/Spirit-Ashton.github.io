// import logo from './logo.svg';
import PlatformerImage from "./Screenshot (282).png";
import PlatformerVideo from "./Test WebBG Vid.webm";
import PlatformerPoster from "./Vid Poster.jpg";
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export const App = () => (
  <>
    <meta charSet="UTF-8" />
    {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:wght@100&display=swap" rel="stylesheet"> */}
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:wght@100&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Spirit: Portfolio Site</title>
    <section className="lightPink">
      <div className="TopBanner">
        <ul>
          <li>
            <a href="#">
              <span className="TopText">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="TopText">Personal Statement</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="TopText">Projects</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="spacer waveHaikei" />
      <div className="TopContainer">
        <div className="MainTextHolder">
          <div className="MainText">
            <h2>I am Spirit-Ashton.</h2>
          </div>
        </div>
        <div className="IntroductionBox">
          <div className="IntroductionText">
            A Computer Scientist passionate in my projects. I take pride in
            producing work to a high degree of quality and push myself towards
            professionalism. The fufillment of learning pushes me to further
            develop and strengthen my wide variety of skills.
          </div>
        </div>
      </div>
    </section>
    <section className="ProjectsBG">
      <div className="spacerWO waveOpacity" />
      <div className="ProjectsBanner">
        <div className="projectTitle">Projects</div>
      </div>
      <div className="previewContainer">
        {/* <div className="platformerVW">
          <figure>  
            <video disablePictureInPicture={true} playsinline autoPlay muted loop poster={PlatformerPoster}>
              <source src={PlatformerVideo} type="video/webm"/>
            </video>
            <figcaption>Simple 2D Platformer Game</figcaption>
          </figure>
        </div>
        <div className="platformerVW">
          <figure>
            <img src={PlatformerImage} alt="Platformer Game" />
            <figcaption>2D Platformer Game: Controller Input</figcaption>
          </figure>
        </div> */}
        <div class="previewContent">
          <div class="previewIntro">
            <div class="previewTextWrapper">
              <span><h5 class="title" style="--idx: 0"></h5></span>
              <span><h5 class="type" style="--idx: 1"></h5></span>
              <span><h5 class="description" style="--idx: 2"></h5></span>
              <span>
                <button class="readMoreButton" style="--idx: 3">Read More</button>
              </span>
            </div>
          </div>
          <div class="thumbnailList">
            <div class="previewWrapper">

            </div>
          </div>
        </div>

        <div class="previewNav">
          <button class="nextButton">Next</button>
          <span class="previewLine"></span>
          <span class="previewNumber"></span>
        </div>
      </div>
    </section>
  </>
)



export default App;









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
    img: "./Funky Farah.png",
    title: "Funky Farah!",
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

const thumbnailListWrapper = document.querySelector(".thumbnailList .reviewWrapper");
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

