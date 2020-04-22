import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, themes } from '@fluentui/react-northstar';
//import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={themes.teams} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
