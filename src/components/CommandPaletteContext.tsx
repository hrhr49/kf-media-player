import {
  FC,
  useState,
  useRef,
  useEffect,
  useContext,
  createContext,
  ReactNode,
  useCallback
} from 'react';
import Modal from 'react-modal';

import {
  KeybindingsContext,
} from './KeybindingsContext';

import {
  useFlag
} from '../hooks/use-flag';

import {
  COMMANDS,
  commandToTitle,
} from '../commands';
import type {
  Command,
} from '../commands';
import {
  CommandCallbacks,
} from '../commands';
import {
  // Keybindings,
  Keys,
} from '../keybindings';

import {
  fuzzyFilter
} from '../filters'

interface ICommandPaletteContext {
  isOpen: boolean;
  commandPaletteOpen: ({commandCallbacks}: {commandCallbacks: CommandCallbacks}) => unknown;
  commandPaletteClose: () => unknown;
  commandPaletteToggle: ({commandCallbacks}: {commandCallbacks: CommandCallbacks}) => unknown;
  commandPaletteNextItem: () => unknown;
  commandPalettePreviousItem: () => unknown;
  commandPaletteSelect: () => unknown;
  commandPaletteContent: ReactNode;
};

Modal.setAppElement('#root');

const Keyboard: FC<{keys: Keys}> = ({keys}: {keys: Keys}) => {
  const strList: string[] =
    keys === null
    ? []
    : typeof keys === 'string'
    ? [keys]
    : keys;

  return (
    <>
      {
        strList.map((str) => (
          <span
            key={str}
            style={{
              margin: '3px 5px',
              padding: '1px 3px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #aaa',
              borderRadius: '2px',
              boxShadow: '1px 2px 2px #ddd',
              fontSize: '0.85em',
            }}
          >
            {str}
          </span>
        ))
      }
    </>
  );
};

const MatchedText: FC<{text: string; matchedIndexes: number[]}> = ({
  text,
  matchedIndexes,
}) => {
  const matchedIndexSet = new Set(matchedIndexes);
  return (
    <>
      {
        text
        .split('')
        .map((s, idx) => {
          const isMatched = matchedIndexSet.has(idx);
          return (
            <span
              key={idx}
              style={{
                color: isMatched ? 'red' : 'black',
                fontWeight: isMatched ? 'bold' : 'normal',
              }}
            >
              {s}
            </span>
          )
        })
      }
    </>
  );
};

const CommandPaletteContext = createContext<ICommandPaletteContext>({
  isOpen: false,
  commandPaletteOpen: () => { throw Error('CommandPaletteProvider is not used') },
  commandPaletteClose: () => { throw Error('CommandPaletteProvider is not used') },
  commandPaletteToggle: () => { throw Error('CommandPaletteProvider is not used') },
  commandPaletteNextItem: () => { throw Error('CommandPaletteProvider is not used') },
  commandPalettePreviousItem: () => { throw Error('CommandPaletteProvider is not used') },
  commandPaletteSelect: () => { throw Error('CommandPaletteProvider is not used') },
  commandPaletteContent: null,
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    overflow: 'scroll',
    padding: '3px',
  },
};


interface MatchedItem {
  title: string;
  command: Command;
  matchedIndexes: number[];
};

function useCommandPalette(): ICommandPaletteContext {
  const [inputText, setInputText] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, {on: isOpenOn, off: isOpenOff}] = useFlag(false);
  const [matchedItems, setMatchedItems] = useState<MatchedItem[]>([]);

  const commandCallbacksRef = useRef<CommandCallbacks | null>(null);

  const keybindings = useContext(KeybindingsContext);

  const commandPaletteOpen = useCallback(({commandCallbacks}: {commandCallbacks: CommandCallbacks}) => {
    commandCallbacksRef.current = commandCallbacks;
    setInputText('');
    setSelectedIndex(0);
    isOpenOn();
  }, [isOpenOn]);

  const commandPaletteClose = useCallback(() => {
    setInputText('');
    setSelectedIndex(0);
    isOpenOff();
  }, [isOpenOff]);

  const commandPaletteToggle = useCallback(({commandCallbacks}: {commandCallbacks: CommandCallbacks}) => {
    if (isOpen) {
      commandPaletteClose();
    } else {
      commandPaletteOpen({commandCallbacks});
    }
  }, [isOpen, commandPaletteOpen, commandPaletteClose]);

  const commandPaletteSelect = useCallback(() => {
    const selectedCommand = matchedItems[selectedIndex]?.command;
    commandPaletteClose();
    if (selectedCommand) {
      commandCallbacksRef.current?.[selectedCommand]();
    }
  }, [selectedIndex, matchedItems, commandPaletteClose]);

  const onTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setSelectedIndex(0);
  }, []);

  const commandPaletteNextItem = useCallback(() => {
    setSelectedIndex((prev) => Math.min(prev + 1, matchedItems.length - 1));
  }, [matchedItems]);

  const commandPalettePreviousItem = useCallback(() => {
    setSelectedIndex((prev) => Math.max(0, prev - 1));
  }, []);

  useEffect(() => {
    const newMatchedItems: MatchedItem[] = [];
    COMMANDS.forEach((command) => {
        const title = commandToTitle(command);
        const matchedIndexes = fuzzyFilter(inputText.toLowerCase(), title.toLowerCase());

      if (matchedIndexes !== null) {
        newMatchedItems.push({
          title,
          command,
          matchedIndexes,
        });
      }
    });
    setMatchedItems(newMatchedItems);
  }, [inputText]);

  const commandPaletteContent = (
    <div
      onMouseDown={isOpenOff}
    >
      <Modal
        isOpen={isOpen}
        onRequestClose={isOpenOff}
        style={customStyles}
        contentLabel="Command Palette"
      >
        <input 
          autoFocus
          onChange={onTextChange}
          type='text'
          style={{
            width: '100%',
            margin: 0,
            padding: '4px 8px',
            fontSize: '1.2em',
          }}
        ></input>
        <ul
          style={{
            width: '100%',
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {
            matchedItems
            .map(({
              title,
              command,
              matchedIndexes
            }, idx) => (
              <li
                key={command}
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  border: 
                    idx === selectedIndex
                    ? '4px solid orange'
                    : '1px solid #aaa',
                }}
              >
                <MatchedText text={title} matchedIndexes={matchedIndexes} />
                <Keyboard keys={keybindings[command]} />
              </li>
            ))
          }
        </ul>
      </Modal>
    </div>
  );

  return {
    isOpen,
    commandPaletteOpen,
    commandPaletteClose,
    commandPaletteToggle,
    commandPaletteNextItem,
    commandPalettePreviousItem,
    commandPaletteSelect,
    commandPaletteContent,
  };
}

const CommandPaletteProvider: FC = ({children}) => {
  const {
    isOpen,
    commandPaletteOpen,
    commandPaletteClose,
    commandPaletteToggle,
    commandPaletteNextItem,
    commandPalettePreviousItem,
    commandPaletteSelect,
    commandPaletteContent,
  } = useCommandPalette();

  return (
    <CommandPaletteContext.Provider
      value={{
        isOpen,
        commandPaletteOpen,
        commandPaletteClose,
        commandPaletteToggle,
        commandPaletteNextItem,
        commandPalettePreviousItem,
        commandPaletteSelect,
        commandPaletteContent,
      }}
    >
      {commandPaletteContent}
      {children}
    </CommandPaletteContext.Provider>
  );
};

export {
  CommandPaletteContext,
  CommandPaletteProvider,
};

