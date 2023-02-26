import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';
import "./components/media.scss"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
