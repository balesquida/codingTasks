
import React, { useState } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import TotalPrice from './Components/TotalPrice';

function App() {
  /* Using useState to manage the total price state */ 
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <Router>
      <div className="app-container">
        {/* Displaying the total price using the TotalPrice component */}
        <TotalPrice totalPrice={totalPrice} />
        {/* Rendering the Menu component */}
        <Menu />
        <Routes>
          {/* Defining routes for the different components */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setTotalPrice={setTotalPrice} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 

