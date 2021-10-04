import React, {useState, useContext} from 'react';
import ReactPlayer from 'react-player/file';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';

import {
  CommandPaletteContext,
} from './CommandPaletteContext';
import {
  KeybindingsContext,
} from './KeybindingsContext';

import { useKeybindings } from '../hooks/use-keybindings';
import { useFlag } from '../hooks/use-flag';
import { useClipedValue } from '../hooks/use-cliped-value';

import {
  CommandCallbacks,
} from '../commands';
// import {
//   Keybindings,
// } from '../keybindings';

interface IAppProps {
};

const App: React.FC<IAppProps> = (
) => {
  const [url, setUrl] = useState('');
  const [fullScreen, setFullScreen] = useState(true);

  const [
    playing,
    {
      set: playingSet,
      on: playingOn,
      off: playingOff,
      toggle: playingToggle,
    }
  ] = useFlag(true);

  const [
    muted,
    {
      on: mutedOn,
      off: mutedOff,
      toggle: mutedToggle,
    }
  ] = useFlag(false);

  const [
    loop,
    {
      on: loopOn,
      off: loopOff,
      toggle: loopToggle,
    }
  ] = useFlag(false);

  const [
    pip,
    {
      on: pipOn,
      off: pipOff,
      toggle: pipToggle,
    }
  ] = useFlag(false);

  const [
    controls,
    {
      on: controlsOn,
      off: controlsOff,
      toggle: controlsToggle,
    }
  ] = useFlag(false);

  const [
    volume,
    {
      up: volumeUp,
      down: volumeDown,
      default: volumeDefault,
    }
  ] = useClipedValue(1, {min: 0, max: 1, step: 0.05});

  const [
    playbackRate,
    {
      up: playbackRateUp,
      down: playbackRateDown,
      default: playbackRateDefault,
    }
  ] = useClipedValue(1, {min: 0.1, max: 4, step: 0.1});

  const [
    played,
    {
      set: playedSet,
    }
  ] = useClipedValue(0, {min: 0, max: 1});

  const [
    loaded,
    {
      set: loadedSet,
    }
  ] = useClipedValue(0, {min: 0, max: 1});

  const [
    duration,
    {
      set: durationSet,
    }
  ] = useClipedValue(0, {min: 0, max: 1});

  const fullScrenHandle = useFullScreenHandle();
  const player = React.useRef<any>();

  const {
    commandPaletteOpen,
    commandPaletteClose,
    commandPaletteToggle,
    commandPaletteNextItem,
    commandPalettePreviousItem,
    commandPaletteSelect,
  } = useContext(CommandPaletteContext);
  const keybindings = useContext(KeybindingsContext);

  const seekBySeconds = React.useCallback((seconds: number) => {
    if (player.current !== null) {
      const currentSeconds = player.current.getCurrentTime();
      player.current.seekTo(currentSeconds + seconds, 'seconds');
    }
  }, []);

  const seekToFraction = React.useCallback((fraction: number) => {
    if (player.current !== null) {
      player.current.seekTo(fraction, 'fraction');
    }
  }, []);

  const commandCallbacks: CommandCallbacks = {
    fullScreenOn: fullScrenHandle.enter,
    fullScreenOff: fullScrenHandle.exit,
    fullScreenToggle: () => {
      if (fullScreen) {
        fullScrenHandle.exit();
      } else {
        fullScrenHandle.enter();
      }
    },

    playingOn,
    playingOff,
    playingToggle,

    mutedOn,
    mutedOff,
    mutedToggle,

    loopOn,
    loopOff,
    loopToggle,

    controlsOn,
    controlsOff,
    controlsToggle,

    pipOn,
    pipOff,
    pipToggle,

    volumeUp,
    volumeDown,
    volumeDefault,

    playbackRateUp,
    playbackRateDown,
    playbackRateDefault,

    seekForward10Seconds: () => seekBySeconds(10),
    seekBackward10Seconds: () => seekBySeconds(-10),

    seekTo0Percent: () => seekToFraction(0.0),
    seekTo10Percent: () => seekToFraction(0.1),
    seekTo20Percent: () => seekToFraction(0.2),
    seekTo30Percent: () => seekToFraction(0.3),
    seekTo40Percent: () => seekToFraction(0.4),
    seekTo50Percent: () => seekToFraction(0.5),
    seekTo60Percent: () => seekToFraction(0.6),
    seekTo70Percent: () => seekToFraction(0.7),
    seekTo80Percent: () => seekToFraction(0.8),
    seekTo90Percent: () => seekToFraction(0.9),

    commandPaletteOpen: () => commandPaletteOpen({commandCallbacks}),
    commandPaletteClose,
    commandPaletteToggle: () => commandPaletteToggle({commandCallbacks}),

    commandPaletteNextItem,
    commandPalettePreviousItem,

    commandPaletteSelect, 
  };

  useKeybindings({keybindings, commandCallbacks});

  return (
    <>
      <FullScreen
        handle={fullScrenHandle}
        onChange={setFullScreen}
      >
        <ReactPlayer 
          ref={player}
          width="100%"
          height="100%"
          url="sample.mp4"
          pip={pip}
          playing={playing}
          controls={controls}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}

          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}

          onPlay={playingOn}
          onEnablePIP={pipOn}
          onDisablePIP={pipOff}
          onPause={playingOff}
          onBuffer={() => console.log('onBuffer')}
          onSeek={e => console.log('onSeek', e)}
          onEnded={() => {playingSet(loop)}}
          onError={e => console.log('onError', e)}
          onProgress={({loaded, played}) => {
            loadedSet(loaded);
            playedSet(played);
          }}
          onDuration={durationSet}

        />
      </FullScreen>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <pre><code>
        state = {
          JSON.stringify({
            url,
            playing, fullScreen, muted,
            volume, playbackRate, loop,
            duration, played, loaded,
          }, null, '  ')
        }
        </code></pre>
      </div>
    </>
  );
}

export default App;
