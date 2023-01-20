import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
    <Footer />

</div>

  );
}

export default App;
