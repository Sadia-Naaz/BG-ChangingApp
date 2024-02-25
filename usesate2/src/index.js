import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import TODO from './to-do';
import {Example,Example2} from './example';
import {Dishes} from './dishes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <TODO/>
    <Example/>
    <Example2/>
    <Dishes/>
  </>
);

