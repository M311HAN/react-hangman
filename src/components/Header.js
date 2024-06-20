import React, { useState } from 'react';
import { Navbar, Container, Button, Modal } from 'react-bootstrap';

// Header component with a Help button that shows game rules in a modal
const Header = () => {
  // State to control the visibility of the Help modal
  const [showHelp, setShowHelp] = useState(false);

  // Function to show the Help modal
  const handleShow = () => setShowHelp(true);
  // Function to close the Help modal
  const handleClose = () => setShowHelp(false);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Hangman</Navbar.Brand>
          <Button variant="info" onClick={handleShow}>
            Help
          </Button>
        </Container>
      </Navbar>

      <Modal show={showHelp} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Game Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Guess the word by entering one letter at a time.</p>
          <p>If you guess a correct letter, it will be revealed in the word and turn green on the keyboard.</p>
          <p>If you guess an incorrect letter, it will turn red on the keyboard.</p>
          <p>You have 10 attempts to guess the word before the game is over.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;

