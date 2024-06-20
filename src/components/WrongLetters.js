import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Component to display the wrong letters guessed by the user
const WrongLetters = ({ wrongLetters }) => {
  return (
    <Row className="justify-content-center">
      <Col xs="auto">
        <div className="wrong-letters-container">
          <div>
            {wrongLetters.length > 0 && <p>Wrong</p>}
            {wrongLetters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default WrongLetters;

