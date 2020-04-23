import React, { useState } from 'react';
import './App.css';

import { Header } from '@fluentui/react-northstar';

import Display from './components/Display';
import Keyboard from './components/Keyboard';

const styles = {
  width: '500px',
  margin: '0 auto',
}

function App() {
  const [textDisplay, setTextDisplay] = useState('0');
  const [usedDot, setUsedDot] = useState(false);
  
  const operator = (btn) => {
    if (btn === '=') {
      //Calculate
    } else if (btn === 'Delete') {
      //Delete one char from display

      setTextDisplay(prevText => { 
        //Check if char is dot
        if (prevText.endsWith('.')) {
          setUsedDot(false);
        }

        //Delete char
        return prevText.slice(0, prevText.length - 1);
      });
    } else if (btn === 'C') {
      //Default values
      setTextDisplay('0');    
      setUsedDot(false);
    } else if (btn === '.') {
      if (!usedDot) {
        setTextDisplay(prevText => prevText.concat(btn));
        setUsedDot(true);
      }
    } else { 
      //Add to display
      if (textDisplay === '0') {
        setTextDisplay(btn);
      } else {
        setTextDisplay(prevText => prevText.concat(btn));
      }
    }
  }
  
  return (
    <div style={styles}>
      <Header align='center' content='SIMPLE CALCULATOR' />
      <Display textDisplay={textDisplay} />
      <Keyboard actionHandler={operator} />
    </div>
  );
}

export default App;
