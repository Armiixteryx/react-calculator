import React from 'react';
import './App.css';

import { Header } from '@fluentui/react-northstar';

import Display from './components/Display';

const styles = {
  width: '500px',
  margin: '0 auto',
}

function App() {
  return (
    <div style={styles}>
      <Header align='center' content='SIMPLE CALCULATOR' />
      <Display textDisplay="Display" />
    </div>
  );
}

export default App;
