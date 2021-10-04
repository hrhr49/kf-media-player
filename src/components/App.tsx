import React, {useState, useCallback, useContext} from 'react';
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

const App: React.FC<IAppProps> = ({
}) => {
  const [url, setUrl] = useState('');
  const [fullScreen, setFullScreen] = useState(true);

  const [playing, playingCallbacks] = useFlag(true);
  const [muted, mutedCallbacks] = useFlag(false);
  const [loop, loopCallbacks] = useFlag(false);
  const [pip, pipCallbacks] = useFlag(false);
  const [controls, controlsCallbacks] = useFlag(false);

  const [volume, volumeCallbacks] = useClipedValue(1, [0, 1]);
  const [playbackRate, playbackRateCallbacks] = useClipedValue(1, [0.1, 4]);

  const [played, playedCallbacks] = useClipedValue(0, [0, 1]);
  const [loaded, loadedCallbacks] = useClipedValue(0, [0, 1]);
  const [duration, durationCallbacks] = useClipedValue(0, [0, 1]);

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

    playingOn: playingCallbacks.on,
    playingOff: playingCallbacks.off,
    playingToggle: playingCallbacks.toggle,

    mutedOn: mutedCallbacks.on,
    mutedOff: mutedCallbacks.off,
    mutedToggle: mutedCallbacks.toggle,

    loopOn: loopCallbacks.on,
    loopOff: loopCallbacks.off,
    loopToggle: loopCallbacks.toggle,

    controlsOn: controlsCallbacks.on,
    controlsOff: controlsCallbacks.off,
    controlsToggle: controlsCallbacks.toggle,

    pipOn: pipCallbacks.on,
    pipOff: pipCallbacks.off,
    pipToggle: pipCallbacks.toggle,

    volumeUp: () => volumeCallbacks.up(0.05),
    volumeDown: () => volumeCallbacks.down(0.05),
    volumeDefault: () => volumeCallbacks.set(1),

    playbackRateUp: () => playbackRateCallbacks.up(0.1),
    playbackRateDown: () => playbackRateCallbacks.down(0.1),
    playbackRateDefault: () => playbackRateCallbacks.set(1),

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

          onPlay={playingCallbacks.on}
          onEnablePIP={pipCallbacks.on}
          onDisablePIP={pipCallbacks.off}
          onPause={playingCallbacks.off}
          onBuffer={() => console.log('onBuffer')}
          onSeek={e => console.log('onSeek', e)}
          onEnded={() => {playingCallbacks.set(loop)}}
          onError={e => console.log('onError', e)}
          onProgress={({loaded, played}) => {
            loadedCallbacks.set(loaded);
            playedCallbacks.set(played);
          }}
          onDuration={durationCallbacks.set}

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
