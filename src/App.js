import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Indexpage from './pages/Indexpage';
import About from './pages/About';
import Contact from './pages/contact';
import Operablewalls from './pages/operablewalls';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="" element={<Indexpage />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="OperableWall" element={<Operablewalls />} />
      </Route>
    </Routes>
  );
}

export default App;
