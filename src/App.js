import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Downloads from "./components/Downloads";
import Information from "./components/Information";
import Map from "./components/Map";
import Status from "./components/Status";
import Logo from "./assets/imgs/MC Live logo.png";
import Download from "./assets/imgs/download.png";
import StatusIco from "./assets/imgs/status.png";
import "./assets/css/style.css";

Var displayWarning = true

function App() {
  return (
    <>
      <div className="Container">
        {displayWarning ?<div className="warning" id="warning">
          <strong>WARNING</strong> : The MC Live Forge server is currently under maintenance temporarily
          <button type="button" onClick="displayWarning = false">X</button>
         </div> : null }
        <div className="sidebar">
          <ul>
            <li className="btn-container no-bg">
              <a className="icon-containers" href="/"> <img className="icon" src={Logo} alt="Home" /></a>
            </li>
            <li className="btn-container">
              <a className="icon-containers" href="/"> <img className="icon" src="https://icon-library.com/images/information-icon-white/information-icon-white-6.jpg" alt="Info" /></a>
            </li>
            <li className="btn-container">
              <a className="icon-containers" href="/downloads"><img className="icon" src={Download} alt="Download" /> </a>
            </li>
            <li className="mapLink btn-container">
              <a className="icon-containers" href="/map"> <img className="icon" src="https://icon-library.com/images/white-map-icon/white-map-icon-16.jpg" alt="Map" /> </a>
            </li>
            <li className="btn-container">
              <a className="icon-containers" href="/status"> <img className="icon" src={StatusIco} alt="Status" /> </a>
            </li>
          </ul>
        </div>
        <div className="Display">
          <Router>
            <Routes>
              <Route path="/" element={<Information />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/map" element={<Map />} />
              <Route path="/status" element={<Status />} />
            </Routes>
          </Router>
        </div>
      </div>
      <footer>
        <a href="https://discord.gg/8Tq2GZr24c">Discord</a>
        <br/>made by TenCreator#2627 
      </footer>
    </>
  );
}

export default App;
