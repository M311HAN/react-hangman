import React from 'react';
import './Keyboard.css'; // Created and imported a CSS file for keyboard styles

// Array of alphabet keys to display on the keyboard
const keys = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Component to display the on-screen keyboard for letter input
const Keyboard = ({ processLetterInput, correctLetters = [], wrongLetters = [], playable }) => {
  // Function to handle click events on the keyboard buttons
  const handleClick = (letter) => {
    if (playable && !correctLetters.includes(letter.toLowerCase()) && !wrongLetters.includes(letter.toLowerCase())) {
      processLetterInput(letter.toLowerCase());
    }
  };

  return (
    <div className="keyboard-container">
      {keys.map(letter => (
        <button
          key={letter}
          className={`key ${correctLetters.includes(letter.toLowerCase()) ? 'correct' : ''} ${wrongLetters.includes(letter.toLowerCase()) ? 'wrong' : ''}`}
          onClick={() => handleClick(letter)}
          disabled={!playable || correctLetters.includes(letter.toLowerCase()) || wrongLetters.includes(letter.toLowerCase())}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;





