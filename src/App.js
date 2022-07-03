import logo from './logo.svg';
import './App.css';
import React from 'react';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  const product = {
      id: 1,
      color:"red",
      number: 157
    }

  return (
    <div>

      <AboutUs product={product} text = "This is our product description"/>
      
    </div>
  );
}

export default App;
