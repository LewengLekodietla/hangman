import React from 'react';
import './App.css';
import Hangman from './components/Hangman';
import 'bootstrap/dist/css/bootstrap.min.css';

// App component to render the Hangman component
function App() {
  return (
      <div className="App">
        <Hangman />
      </div>
  );
}

export default App;