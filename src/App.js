import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Indexpage from './pages/Indexpage';
import About from './pages/About';

function App() {
  return (
        <Routes>
        <Route path="/" element={<Home />} >
          <Route path="" element={<Indexpage />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
  );
}

export default App;
