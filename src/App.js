import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Home';
import About from './About';
import Herd from './Herd';
import Awards from './Awards';
import StudService from './StudService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/herd" element={<Herd />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/stud" element={<StudService />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
