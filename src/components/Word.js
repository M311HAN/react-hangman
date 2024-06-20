import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Component to display the word to be guessed, showing correctly guessed letters and hiding others
const Word = ({ selectedWord, correctLetters }) => {
  return (
    <Row className="justify-content-center">
      <Col xs="auto">
        <div className="word">
          {selectedWord.split('').map((letter, index) => (
            <span className="letter" key={index}>
              {correctLetters.includes(letter) ? letter : '_'}
            </span>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Word;

