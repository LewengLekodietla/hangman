import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// Component to display the game rules in a modal
const HelpModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false); // Close the modal
    const handleShow = () => setShow(true); // Show the modal

    return (
        <>
            {/* Button to show the modal */}
            <Button variant="info" onClick={handleShow}>
                Help
            </Button>

            {/* Modal to display game rules */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Game Rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The objective of the game is to guess the hidden word.</p>
                    <p>Guess letters one at a time. Correct guesses reveal the letter in the word.</p>
                    <p>Incorrect guesses increase the hangman figure. You lose if the figure is fully drawn.</p>
                    <p>Click "Restart Game" to start over.</p>
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

export default HelpModal;