import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Component to display the word with guessed letters
const WordDisplay = ({ selectedWord, guessedLetters }) => {
    return (
        <Row>
            <Col>
                <div className="word-display">
                    {/* Display each letter or an underscore */}
                    {selectedWord.split('').map((letter, index) => (
                        <span key={index} className="letter">
              {guessedLetters.includes(letter) ? letter : '_'}
            </span>
                    ))}
                </div>
            </Col>
        </Row>
    );
};

export default WordDisplay;