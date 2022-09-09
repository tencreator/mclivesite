import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Downloads from "./components/Downloads";
import Information from "./components/Information";
import Map from "./components/Map";
import Download from "./assets/imgs/download.png";
import "./assets/css/style.css";


function App() {
  return (
    <>
      <div className="Container">
        <div className="sidebar">
          <ul>
            <li>
              <a className="icon-containers" href="/"> <img className="icon" src="https://icon-library.com/images/information-icon-white/information-icon-white-6.jpg" alt="Info" /></a>
            </li>
            <li>
              <a className="icon-containers" href="/downloads"><img className="icon" src={Download} alt="Download" /> </a>
            </li>
            <li>
              <a className="icon-containers" href="/map"> <img className="icon" src="https://icon-library.com/images/white-map-icon/white-map-icon-16.jpg" alt="Map" /> </a>
            </li>
          </ul>
        </div>
        <div className="Display">
          <Router>
            <Routes>
              <Route path="/" element={<Information />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/map" element={<Map />} />
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
