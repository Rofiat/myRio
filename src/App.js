
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home'
import About from './components/pages/about'
import Faqs from './components/pages/faqs'

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </div>
  );
}

export default App;