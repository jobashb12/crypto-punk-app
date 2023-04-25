import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Slider from './component/Slider';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Slider />
    </div>
  )
}

export default App;
