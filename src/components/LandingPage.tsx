import {CSSProperties} from 'react';
import {Keyboard} from './Keyboard';
import {SUPPORTED_EXTENSIONS_WITH_COMMA} from 'src-common/media';

const landingPageStyle: CSSProperties = {
  padding: '20px 20px',
  background: 'white',
  width: '100%',
  height: '100%',
};

const LandingPage = () => (
  <div
    style={landingPageStyle}
  >
    <h3>How to Use</h3>
    <li>command palette: <Keyboard keys="command+shift+p" /> or <Keyboard keys="ctrl+shift+p" /></li>
    <li>load URL: <Keyboard keys="command+shift+u" /> or <Keyboard keys="ctrl+shift+u" /></li>
    <li>load File: drag and drop media file here ((maybe) supported {SUPPORTED_EXTENSIONS_WITH_COMMA.join(' ')})</li>
  </div>
);

export {
  LandingPage,
}
