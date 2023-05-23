import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Indexpage from './pages/Indexpage';
import About from './pages/About';
import Contact from './pages/contact';
import Operablewalls from './pages/operablewalls';
import Solidwalls from './pages/solidwalls';
import GlazedWalls from './pages/glazedwall';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="" element={<Indexpage />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="OperableWall" element={<Operablewalls />} />
        <Route path="SolidWall" element={<Solidwalls />} />
        <Route path="GlazedWall" element={<GlazedWalls />} />
      </Route>
    </Routes>
  );
}

export default App;
