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
        <div className="platformerVW">
          <figure>
            {/* <video
              playsInline=""
              autoPlay=""
              muted=""
              loop=""
              poster={PlatformerPoster}
            >
              <source src={PlatformerVideo} type="video/webm"/>
            </video> */}
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
        </div>
      </div>
    </section>
  </>
)



export default App;
