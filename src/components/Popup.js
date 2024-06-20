import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Popup.css'; // Import the CSS file for custom styles

// Component to display a popup message when the game is won or lost
const Popup = ({ correctLetters, wrongLetters, selectedWord, playAgain, gameStatus }) => {
  // Initialize variables for messages to display
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let additionalMessage = ''; // Additional message for winning

  // Determine the message to display based on the game status
  if (gameStatus === 'won') {
    finalMessage = 'Congratulations! You won!';
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    additionalMessage = "Let's play again!"; // Add the additional message
  } else if (gameStatus === 'lost') {
    finalMessage = 'Unfortunately you lost.';
    finalMessageRevealWord = `The word was: ${selectedWord}`;
  }

  return (
     // Render the modal if the game is not in the playing state
    <Modal show={gameStatus !== 'playing'} centered>
      <Modal.Header>
        <Modal.Title className="popup-title">{finalMessage}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="popup-message">{finalMessageRevealWord}</h3>
        {gameStatus === 'won' && <h3 className="popup-message">{additionalMessage}</h3>} {/* Display the additional message if won */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={playAgain}>
          Play Again
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;










