import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './Keypad';
import EyesOnMe from './EyesOnMe';

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('global')
);
