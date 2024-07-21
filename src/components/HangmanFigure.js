import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import step0 from '../assets/state1.GIF';
import step1 from '../assets/state2.GIF';
import step2 from '../assets/state3.GIF';
import step3 from '../assets/state4.GIF';
import step4 from '../assets/state5.GIF';
import step5 from '../assets/state6.GIF';
import step6 from '../assets/state7.GIF';

// Component to display the hangman figure based on wrong guesses
const HangmanFigure = ({ wrongGuesses }) => {
    const steps = [step0, step1, step2, step3, step4, step5, step6]; // Array of hangman images

    return (
        <Row>
            <Col>
                {/* Display the appropriate hangman image */}
                <Image src={steps[wrongGuesses]} alt={`Hangman step ${wrongGuesses}`} />
            </Col>
        </Row>
    );
};

export default HangmanFigure;