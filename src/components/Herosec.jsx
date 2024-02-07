import React, { useState, useEffect } from "react";
import "./Hero.css";

const words = ["Cryptocurrencies", "Stocks & indices", "Derived indices", "Forex"];

function Herosec() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Function to update the current word index
    const updateWordIndex = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    // Set an interval to update the word index every few seconds
    const intervalId = setInterval(updateWordIndex, 3000); // Change the interval duration as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-container">
      <main className="hero">
        <h1>
          <p>
            Providing Eco-friendly <br /> trading opportunities<br />all around the World
          </p>
        </h1>
        <h2>Get widest range of<br />Markets, trades and Platforms.</h2>
        <div className="images"></div>
        <h3>{words[currentWordIndex]}</h3>
        <button className="demo">Create a free demo account</button>
      </main>
    </div>
  );
}

export default Herosec;
