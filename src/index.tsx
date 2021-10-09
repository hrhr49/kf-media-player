import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './components/App';
import {
  CommandPaletteProvider,
} from './components/CommandPaletteContext';
import {
  InputBoxProvider,
} from './components/InputBox';

import {
  defaultKeybindings,
} from './keybindings';

const Index = () => {
  return (
    <CommandPaletteProvider>
      <InputBoxProvider>
        <App
          keybindings={defaultKeybindings}
        />
      </InputBoxProvider>
    </CommandPaletteProvider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Index></Index>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
