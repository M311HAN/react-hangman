import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import Popup from './components/Popup';
import Keyboard from './components/Keyboard';
// Import the dictionary file
import dictionary from './assets/dictionary.txt'; 

function App() {
  // State variables to manage game state
  // Indicates if the game is currently playable
  const [playable, setPlayable] = useState(true);
  // Array to store correctly guessed letters
  const [correctLetters, setCorrectLetters] = useState([]);
  // Array to store incorrectly guessed letters
  const [wrongLetters, setWrongLetters] = useState([]);
   // State to track game status ('playing', 'won', 'lost')
  const [gameStatus, setGameStatus] = useState('playing'); 
  // State to store the selected word for the game
  const [selectedWord, setSelectedWord] = useState(''); 

  // Function to get a random word from the dictionary text file
  const getRandomWord = async () => {
    const response = await fetch(dictionary);
    const text = await response.text();
    // Split by newline and filter out empty strings
    const wordsArray = text.split('\n').filter(Boolean); 
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex].trim();
  };

  // Fetch a random word when the component mounts
  useEffect(() => {
    const fetchWord = async () => {
      const word = await getRandomWord();
      setSelectedWord(word);
    };

    fetchWord();
  }, []);

  // Function to process the input letter from the user
  const processLetterInput = useCallback((letter) => {
    if (selectedWord.includes(letter)) {
       // If the letter is correct and not already guessed
      if (!correctLetters.includes(letter)) {
        const newCorrectLetters = [...correctLetters, letter];
        setCorrectLetters(newCorrectLetters);
         // Check if the player has won by guessing all letters
        const allCorrectLetters = selectedWord.split('').every(l => newCorrectLetters.includes(l));
        if (allCorrectLetters) {
          setGameStatus('won');
          setPlayable(false);
        }
      }
    } else {
      // If the letter is incorrect and not already guessed
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(currentLetters => {
          const newWrongLetters = [...currentLetters, letter];
          // Check if the player has reached the maximum number of incorrect guesses
          if (newWrongLetters.length === 10) { 
            // Disable further clicks immediately
            setPlayable(false); 
            setTimeout(() => {
              setGameStatus('lost');
            }, 1000); // Show "lost" message after a delay
          }
          return newWrongLetters;
        });
      }
    }
  }, [correctLetters, wrongLetters, selectedWord]);

  // Add event listener for keydown events to handle letter input
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        processLetterInput(letter);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [processLetterInput, playable]);

  // Function to reset the game
  const playAgain = async () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    setGameStatus('playing');
    // Fetch a new word for the next game
    const word = await getRandomWord(); 
    setSelectedWord(word);
  };

  // Function to provide a hint (reveal one letter in the word)
  const giveHint = () => {
    const unrevealedLetters = selectedWord.split('').filter(letter => !correctLetters.includes(letter));
    if (unrevealedLetters.length > 0) {
      const hintLetter = unrevealedLetters[Math.floor(Math.random() * unrevealedLetters.length)];
      processLetterInput(hintLetter);
    }
  };

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <div className="keyboard-wrapper">
        <Keyboard processLetterInput={processLetterInput} correctLetters={correctLetters} wrongLetters={wrongLetters} playable={playable} />
      </div>
      <div className="buttons-container">
        <button className="reset-button" onClick={playAgain}>Reset</button>
        <button className="hint-button" onClick={giveHint}>Hint</button> {/* Add Hint button */}
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        playAgain={playAgain}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default App;





















