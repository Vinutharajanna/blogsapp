import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Router><App/></Router>
  </StateProvider>
);

