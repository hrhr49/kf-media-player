import React, {useState, useEffect, useContext, useRef} from 'react';
import ReactPlayer from 'react-player/lazy';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';

import {
  CommandPaletteContext,
} from './CommandPaletteContext';
import {
  InputBoxContext,
} from './InputBox';

import {DropFileArea} from './DropFileArea';

import type {
  Keybindings,
} from '../keybindings';

import {useKeybindings} from '../hooks/use-keybindings';
import {useFlag} from '../hooks/use-flag';
import {useClipedValue} from '../hooks/use-cliped-value';

import {
  CommandCallbacks,
  COMMANDS,
  commandToTitle,
} from '../commands';
import type {
  AllCommandList,
} from '../commands';

import {
  ipcRendererApi,
} from '../ipc-renderer';

interface IAppProps {
  keybindings: Keybindings;
};

const App: React.FC<IAppProps> = ({
  keybindings,
}) => {
  const [url, setUrl] = React.useState('');
  const commandCallbacksRef = useRef<CommandCallbacks | null>(null);
  const [fullScreen, setFullScreen] = useState(true);

  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);
  const [screenHeight, setScreenHeight] = useState(document.documentElement.clientHeight);

  useEffect(() => {
    (async () => {
      try {
        const fileData = await ipcRendererApi.inputFileData();
        if (fileData) {
          const {
            data,
            mime,
          } = fileData;
          const blob = new Blob([data.buffer], {type: mime});
          const newUrl = URL.createObjectURL(blob);
          setUrl(newUrl);
        }
      } catch (e) {
        // console.log(e);
        // do nothing
      }
    })();
  }, []);

  useEffect(() => {
    const onResize = () => {
      setScreenWidth(document.documentElement.clientWidth);
      setScreenHeight(document.documentElement.clientHeight);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);


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
  ] = useFlag(true);

  const [
    showInfo,
    {
      on: showInfoOn,
      off: showInfoOff,
      toggle: showInfoToggle,
    }
  ] = useFlag(false);

  const [
    volume,
    {
      up: volumeUp,
      down: volumeDown,
      default: volumeDefault,
    }
  ] = useClipedValue(0.5, {min: 0, max: 1, step: 0.05});

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

  const commandPalette = useContext(CommandPaletteContext);
  const inputBox = useContext(InputBoxContext);

  // const onChange = (e: any) => {
  //   setUrl(e.target.value);
  // };

  const loadUrl = React.useCallback((newUrl: string) => {
    setUrl(newUrl);
    loadedSet(0);
    playedSet(0);
  }, [loadedSet, playedSet]);

  const onDropFile = React.useCallback((file: File) => {
    // encodeURIComponent
    const url = URL.createObjectURL(file);
    console.log({url});
    loadUrl(url);
  }, [loadUrl]);

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

    showInfoOn,
    showInfoOff,
    showInfoToggle,

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

    commandPaletteOpen: async () => {
      if (inputBox.isOpen || commandPalette.isOpen) {
        return;
      }
      const items = COMMANDS.map((command) => {
        return {
          name: commandToTitle(command),
          command,
          keys: keybindings[command],
        };
      });
      const item = await commandPalette.showQuickPick(items);
      if (item !== null) {
        const command = item.command;
        commandCallbacksRef.current?.[command]();
      }
      // commandPaletteOpen({commandCallbacks}),
    },
    loadUrl: async () => {
      if (inputBox.isOpen || commandPalette.isOpen) {
        return;
      }
      const newUrl = await inputBox.showInputBox({
        prompt: 'input URL to laod',
      });

      if (newUrl) {
        loadUrl(newUrl);
      }
    },
  };

  commandCallbacksRef.current = commandCallbacks;
  useKeybindings<AllCommandList>({
    keybindings, commandCallbacks, commands: COMMANDS
  });

  if (!url) {
    return (
      <DropFileArea
        onDropFile={onDropFile}
      >
        <div
          style={{
            width: screenWidth,
            height: screenHeight,
          }}
        >
          <h3>How to Use</h3>
          <li>command palette: command+shift+p or ctrl+shift+p</li>
          <li>load URL: command+shift+u or ctrl+shift+u</li>
          <li>load File: drag and drop media file here</li>
        </div>
      </DropFileArea>
    );
  }
  return (
    <DropFileArea
      onDropFile={onDropFile}
    >
      <FullScreen
        handle={fullScrenHandle}
        onChange={setFullScreen}
      >
        <div
          style={
            fullScreen
              ? {
                width: '100%',
                height: '100%'
              }
              : {
                width: screenWidth,
                height: screenHeight,
              }
          }
        >
          <ReactPlayer
            ref={player}
            width="100%"
            height="100%"
            url={url}
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
            onSeek={(e) => console.log('onSeek', e)}
            onEnded={() => {playingSet(loop)}}
            onError={(_e) => {
              alert('sorry, error occurred');
              // throw e;
            }}
            onProgress={({loaded, played}) => {
              loadedSet(loaded);
              playedSet(played);
            }}
            onDuration={durationSet}

          />
        </div>
      </FullScreen>
      {/* to avoid focus player */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      >
      </div>
      {
        showInfo
        &&
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
                controls, pip,
                screenWidth, screenHeight,
              }, null, '  ')
            }
          </code></pre>
        </div>
      }
    </DropFileArea>
  );
}

export default App;
