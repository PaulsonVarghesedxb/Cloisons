import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Indexpage from './pages/Indexpage';
import About from './pages/About';
import Contact from './pages/contact';
import Operablewalls from './pages/operablewalls';
import Solidwalls from './pages/operablewalls/solidwalls';
import GlazedWalls from './pages/glazedwall';
import DemountableGlassPartions from './pages/glasspartitions';
import DemoutableID2 from './pages/demountableID2';
import SingleGlazed from './pages/singleGlazed';
import {
  IoLogoWhatsapp
} from "react-icons/io"
import {
  MdMessage
} from "react-icons/md"
import {
  FaPhoneAlt
} from "react-icons/fa"
import CloisonP26 from './pages/glasspartition/cloisonp26';
import CloisonP40 from './pages/glasspartition/cloisonp40';
import CloisonP100 from './pages/glasspartition/cloisonp100';
import Alma from './pages/operablewalls/alma';
import Aqua from './pages/operablewalls/aqua';
import Wave from './pages/operablewalls/wave';
import Project from './pages/project';

function App() {
  return (
    <>
      <div className='whatsicon'> <span className='d-flex flex-column' style={{ gap: 10 }}><a href="tel:+97142204141" target="_blank" rel="noreferrer"><FaPhoneAlt size={50} color="rgb(39, 179, 242)" /></a>
        <a href="mailto:info@himalayacool.com" target="_blank" rel="noreferrer"><MdMessage size={50} color="#bc4d8e" /></a>
        <a href='https://wa.me/+971506562400' target="_blank" rel="noreferrer"><IoLogoWhatsapp size={50} color="rgb(46, 206, 52)" /></a></span></div>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="" element={<Indexpage />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="OperableWall" element={<Operablewalls />} />
          <Route path="SolidWall" element={<Solidwalls />} />
          <Route path="GlazedWall" element={<GlazedWalls />} />
          <Route path="DemountableGlassPartions" element={<DemountableGlassPartions />} />
          <Route path="SingleGlazedID1" element={<SingleGlazed />} />
          <Route path="DemoutableID2" element={<DemoutableID2 />} />
          <Route path="CloisonP26" element={<CloisonP26 />} />
          <Route path="CloisonP40" element={<CloisonP40 />} />
          <Route path="CloisonP100" element={<CloisonP100 />} />
          <Route path="Alma" element={<Alma />} />
          <Route path="Aqua" element={<Aqua />} />
          <Route path="Wave" element={<Wave />} />
          <Route path="Projects" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
