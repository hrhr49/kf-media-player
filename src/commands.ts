const COMMANDS = [
  'fullScreenOn',
  'fullScreenOff',
  'fullScreenToggle',

  'playingOn',
  'playingOff',
  'playingToggle',

  'mutedOn',
  'mutedOff',
  'mutedToggle',

  'loopOn',
  'loopOff',
  'loopToggle',

  'controlsOn',
  'controlsOff',
  'controlsToggle',

  'pipOn',
  'pipOff',
  'pipToggle',

  'showInfoOn',
  'showInfoOff',
  'showInfoToggle',

  'volumeUp',
  'volumeDown',
  'volumeDefault',

  'playbackRateUp',
  'playbackRateDown',
  'playbackRateDefault',

  'seekForward10Seconds',
  'seekBackward10Seconds',

  'seekTo0Percent',
  'seekTo10Percent',
  'seekTo20Percent',
  'seekTo30Percent',
  'seekTo40Percent',
  'seekTo50Percent',
  'seekTo60Percent',
  'seekTo70Percent',
  'seekTo80Percent',
  'seekTo90Percent',

  'commandPaletteOpen',
  'loadUrl',
] as const;

type AllCommandList = typeof COMMANDS;
type Command = AllCommandList[number];
// type CommandCallbacks = Partial<Record<Command, () => unknown>>;
type CommandCallbacks = Record<Command, () => unknown>;

const commandToTitle = (command: Command): string => {
  // example: 'fullScreenOn' -> 'Full Screen On'
  return command
    .replace(/^(\w)/, (v) => v.toUpperCase())
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/(\d)([a-zA-Z])/g, '$1 $2');
};

export {
  COMMANDS,
  commandToTitle,
};

export type {
  AllCommandList,
  Command,
  CommandCallbacks,
};
