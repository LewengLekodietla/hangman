import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import Keyboard from './Keyboard';
import HangmanFigure from './HangmanFigure';
import HelpModal from './HelpModal';
import words from '../assets/dictionary.txt';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Function to fetch the dictionary words
const fetchDictionary = async () => {
    const response = await fetch(words);
    const text = await response.text();
    return text.split('\n').filter(word => word.length > 0);
};

// Main Hangman component
const Hangman = () => {
    // State variables
    const [selectedWord, setSelectedWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [gameStatus, setGameStatus] = useState('playing');
    const [dictionary, setDictionary] = useState([]);
    const maxWrongGuesses = 6;

    // Fetch dictionary words on component mount
    useEffect(() => {
        const loadDictionary = async () => {
            const words = await fetchDictionary();
            setDictionary(words);
            resetGame(words);
        };
        loadDictionary();
    }, []);

    // Function to reset the game state
    const resetGame = (wordsList = dictionary) => {
        const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
        setSelectedWord(randomWord);
        setGuessedLetters([]);
        setWrongGuesses(0);
        setGameStatus('playing');
    };

    // Handle a guessed letter
    const handleGuess = (letter) => {
        if (selectedWord.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            // Check if all letters are guessed
            if (selectedWord.split('').every((char) => guessedLetters.includes(char) || char === letter)) {
                setGameStatus('won');
            }
        } else {
            setWrongGuesses(wrongGuesses + 1);
            // Check if max wrong guesses reached
            if (wrongGuesses + 1 >= maxWrongGuesses) {
                setGameStatus('lost');
            }
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Hangman Game</h1>
                    {/* Display the hangman figure */}
                    <HangmanFigure wrongGuesses={wrongGuesses} />
                    {/* Display the word with guessed letters */}
                    <WordDisplay selectedWord={selectedWord} guessedLetters={guessedLetters} />
                    {/* Display the keyboard if the game is ongoing */}
                    {gameStatus === 'playing' ? (
                        <Keyboard guessedLetters={guessedLetters} handleGuess={handleGuess} />
                    ) : (
                        <div>
                            {/* Display win or loss message */}
                            <h2>{gameStatus === 'won' ? 'You Won!' : 'You Lost!'}</h2>
                            {/* Button to restart the game */}
                            <Button onClick={() => resetGame()}>Restart Game</Button>
                        </div>
                    )}
                </Col>
            </Row>
            {/* Help modal with game rules */}
            <HelpModal />
        </Container>
    );
};

export default Hangman;