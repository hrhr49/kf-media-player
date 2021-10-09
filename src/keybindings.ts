import type {
  Command,
} from './commands';

type Keys = string | string[] | null;
// type Keybindings = Partial<Record<Command, Keys>>;
type Keybindings = Record<Command, Keys>;

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

  showInfoOn: null,
  showInfoOff: null,
  showInfoToggle: 'i',

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

  commandPaletteOpen: ['command+shift+p', 'ctrl+shift+p'],
  loadUrl: ['command+shift+u', 'ctrl+shift+u'],
};

export {
  defaultKeybindings,
};

export type {
  Keys,
  Keybindings,
}
