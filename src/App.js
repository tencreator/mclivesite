import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Downloads from "./components/Downloads";
import Information from "./components/Information";
import Map from "./components/Map";
import Status from "./components/Status";
import Error from "./components/Error";
import Logo from "./assets/imgs/MC Live logo.png";
import Download from "./assets/imgs/download.png";
import StatusIco from "./assets/imgs/status.png";
import "./assets/css/style.css";


function App() {
  return (
    <>
      <div className="Container">
        <div className="sidebar">
          <ul>
            <li className="btn-container no-bg">
              <a className="icon-containers" href="/"> <img className="icon" src={Logo} alt="Home" /></a>
            </li>
            <li className="btn-container">
              <a className="icon-containers" href="/"> <img className="icon" src="https://icon-library.com/images/information-icon-white/information-icon-white-6.jpg" alt="Info" /></a>
            </li>
            <li className="btn-container">
              <a className="icon-containers" href="/downloads"><img className="icon" src={Download} alt="Download" /></a>
            </li>
            <li className="mapLink btn-container">
              <a className="icon-containers" href="/map"> <img className="icon" src="https://icon-library.com/images/white-map-icon/white-map-icon-16.jpg" alt="Map" /> </a>
            </li>
            <li className="btn-container">
              <a className="icon-containers" href="/status"> <img className="icon" src={StatusIco} alt="Status" /></a>
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
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
