import React from 'react'
import Navbar from './components/NavbarComponents/Navbar.js';
import Headings from './components/Headings';
import Cards from './components/Cards';
// import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Headings/>
      <Cards heading = "Upoming" category='Marketing' description="Sample text here for description" topic='Topic here'/>
      {/* <Footer/> */}
    </>

  );
}

export default App;
