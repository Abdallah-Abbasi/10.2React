import React, { useRef } from 'react';
import './App.css';
import Prototype from './Componenets/Prototype.jpg';
import Prototype2 from './Componenets/Prototype2.jpg';
import Bully from './Componenets/Bully.jpg';
import Bully2 from './Componenets/Bully2.jpg';

function TwoImages() {
  const bullyRef = useRef(null);
  const prototypeRef = useRef(null);

  const handleMouseEnter = (ref) => {
    if (ref.current) {
      ref.current.src = ref.current.dataset.color;
    }
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) {
      ref.current.src = ref.current.dataset.grayscale;
    }
  };

  return (
    <div className="container">
      <a href="https://steamunlocked.net/5-bully-scholarship-edition-free-v4-download/">
        <img
          src={Bully2}
          data-grayscale={Bully2}
          data-color={Bully}
          onMouseEnter={() => handleMouseEnter(bullyRef)}
          onMouseLeave={() => handleMouseLeave(bullyRef)}
          ref={bullyRef}
        />
      </a>
      <a href="https://steamunlocked.net/28-prototype-free-download/">
        <img
          src={Prototype2}
          data-grayscale={Prototype2}
          data-color={Prototype}
          onMouseEnter={() => handleMouseEnter(prototypeRef)}
          onMouseLeave={() => handleMouseLeave(prototypeRef)}
          ref={prototypeRef}
        />
      </a>
    </div>
  );
}

export default TwoImages;