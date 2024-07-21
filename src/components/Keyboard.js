import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

// Component to display and handle keyboard interaction
const Keyboard = ({ guessedLetters, handleGuess }) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Array of letters

    return (
        <Row>
            <Col>
                <div className="keyboard">
                    {/* Render a button for each letter */}
                    {alphabet.map((letter) => (
                        <Button
                            key={letter}
                            onClick={() => handleGuess(letter)}
                            disabled={guessedLetters.includes(letter)} // Disable already guessed letters
                        >
                            {letter}
                        </Button>
                    ))}
                </div>
            </Col>
        </Row>
    );
};

export default Keyboard;