import {useState, useEffect, useRef, CSSProperties} from 'react';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';
import {KFMediaPlayer} from './KFMediaPlayer';
import { CommandPaletteProvider } from './CommandPaletteContext';
import { InputBoxProvider } from './InputBox';
import { defaultKeybindings } from '../keybindings';

interface AppProps {
}

const App: React.FC<AppProps> = () => {
  const modalRootRef = useRef(null);
  const [fullScreen, setFullScreen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);
  const [screenHeight, setScreenHeight] = useState(document.documentElement.clientHeight);

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

  const fullScrenHandle = useFullScreenHandle();

  const divStyle: CSSProperties = fullScreen
    ? {
      width: '100%',
      height: '100%',
    } : {
      width: screenWidth,
      height: screenHeight,
    };

  const parentSelector = () => {
    if(modalRootRef.current) {
      return modalRootRef.current;
    } else {
      return document.body;
    }
  };

  return (
    <FullScreen
      handle={fullScrenHandle}
      onChange={setFullScreen}
    >
      <div ref={modalRootRef}>
        <CommandPaletteProvider
          parentSelector={parentSelector}
        >
          <InputBoxProvider
            parentSelector={parentSelector}
          >
            <div
              style={divStyle}
            >
              <KFMediaPlayer
                keybindings={defaultKeybindings}
                fullScreenOn={fullScrenHandle.enter}
                fullScreenOff={fullScrenHandle.exit}
                fullScreenToggle={() => {
                  if (fullScreen) {
                    fullScrenHandle.exit();
                  } else {
                    fullScrenHandle.enter();
                  }
                }}
              />
            </div>
          </InputBoxProvider>
        </CommandPaletteProvider>
      </div>
    </FullScreen>
  );
}

export {
  App
};
