import React from 'react';
import Caroussel from './components/Caroussel';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Caroussel />
    </div>
  );
}

export default App;
