import React, {createContext} from 'react';
import {
  Keybindings,
} from '../keybindings';

const defaultKeybindings: Keybindings = {
  fullScreenOn: null,
  fullScreenOff: null,
  fullScreenToggle: 'f',

  playingOn: null,
  playingOff: null,
  playingToggle: 'space',

  mutedOn: null,
  mutedOff: null,
  mutedToggle: 'm',

  loopOn: null,
  loopOff: null,
  loopToggle: null,

  controlsOn: null,
  controlsOff: null,
  controlsToggle: 'c',

  pipOn: null,
  pipOff: null,
  pipToggle: 'p',

  volumeUp: '+',
  volumeDown: '-',
  volumeDefault: null,

  playbackRateUp: '>',
  playbackRateDown: '<',
  playbackRateDefault: null,

  seekForward10Seconds: 'l',
  seekBackward10Seconds: 'j',

  seekTo0Percent: '0',
  seekTo10Percent: '1',
  seekTo20Percent: '2',
  seekTo30Percent: '3',
  seekTo40Percent: '4',
  seekTo50Percent: '5',
  seekTo60Percent: '6',
  seekTo70Percent: '7',
  seekTo80Percent: '8',
  seekTo90Percent: '9',

  commandPaletteOpen: null,
  commandPaletteClose: 'esc',
  commandPaletteToggle: 'meta+shift+p',

  commandPaletteNextItem: 'down',
  commandPalettePreviousItem: 'up',

  commandPaletteSelect: 'enter',
};

const KeybindingsContext = createContext<Keybindings>(defaultKeybindings);

const KeybindingsProvider: React.FC = ({children}) => {
  return (
    <KeybindingsContext.Provider
      value={defaultKeybindings}
    >
      {children}
    </KeybindingsContext.Provider>
  );
}

export {
  KeybindingsContext,
  KeybindingsProvider,
};

