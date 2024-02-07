import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Contactus from './components/Contactus.jsx';
import Herosec from './components/Herosec.jsx';
import Bg from './components/Bg.jsx';
import Navbar from './components/Navbar.jsx';
function App() {
  const [showContact, setShowContact] = useState(false);

  const handleButtonClick = () => {
    setShowContact(true);
  };

  return (
    <>
      <Bg/>
      <Navbar  onButtonClick={handleButtonClick}/>
      {!showContact ? <Herosec/> : <Contactus/>}
    </>
  );
};

export default App;
