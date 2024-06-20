import React from 'react';

// Import the different states of the Hangman Drawing.
import state1 from '../assets/hangmandrawings/state1.GIF';
import state2 from '../assets/hangmandrawings/state2.GIF';
import state3 from '../assets/hangmandrawings/state3.GIF';
import state4 from '../assets/hangmandrawings/state4.GIF';
import state5 from '../assets/hangmandrawings/state5.GIF';
import state6 from '../assets/hangmandrawings/state6.GIF';
import state7 from '../assets/hangmandrawings/state7.GIF';
import state8 from '../assets/hangmandrawings/state8.GIF';
import state9 from '../assets/hangmandrawings/state9.GIF';
import state10 from '../assets/hangmandrawings/state10.gif';
import state11 from '../assets/hangmandrawings/state11.GIF';

// Component to display the current state of the Hangman drawing based on the number of wrong guesses
const Figure = ({ wrongLetters }) => {
  // Array of hangman drawing states
  const states = [
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    state9,
    state10,
    state11,
  ];

  // Calculate the number of errors based on the length of the wrongLetters array
  const errors = wrongLetters.length;
  // Determine the image path based on the number of errors
  // Ensure the last state is always shown if errors exceed array length
  const imagePath = states[errors] || state11; 

  return (
    <div className="figure-container">
      <img src={imagePath} alt={`Hangman State ${errors}`} height="250px" />
    </div>
  );
};

export default Figure;





