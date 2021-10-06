import {
  ReactElement,
  Context,
  Provider,
  useState,
  useRef,
  createContext,
  ReactNode,
  CSSProperties,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';
import Modal from 'react-modal';

import {
  useQuickPickLogic,
} from '../hooks/use-quick-pick-logic';

import type {
  QuickPickItem,
  HasName,
} from '../hooks/use-quick-pick-logic';

import {
  TextFilter,
} from '../text-filters';

import {
  Deferred,
} from '../deferred';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    overflow: 'hidden',
    padding: '3px',
    boxSizing: 'border-box',
  } as CSSProperties,
};

const inputStyle: CSSProperties = {
  width: '100%',
  margin: 0,
  // padding: '4px 8px',
  padding: 0,
  fontSize: '1.2em',
  boxSizing: 'border-box',
};

const listStyle: CSSProperties = {
  width: '100%',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const listItemStyle: CSSProperties = {
  width: '100%',
  padding: 0,
  margin: 0,
  borderBottom: '1px solid #aaa',
  boxSizing: 'border-box',
};

interface QuickPickPresentationalProps<Content extends HasName> {
  isOpen: boolean;
  selectedIndex: number;
  items: QuickPickItem<Content>[];
  onClose: () => unknown;
  onTextChange: ChangeEventHandler<HTMLInputElement>;
  onMouseDownOutside: MouseEventHandler<HTMLDivElement>;
  renderItem: (
    item: QuickPickItem<Content>,
    isSelected: boolean,
  ) => ReactNode;
}

const QuickPickPresentational = <Item extends HasName>({
  isOpen,
  items,
  selectedIndex,
  onClose,
  onTextChange,
  onMouseDownOutside,
  renderItem,
}: QuickPickPresentationalProps<Item>) => {
  return (
    <div onMouseDown={onMouseDownOutside} >
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={modalStyles}
        contentLabel="Command Palette"
      >
        <input
          autoFocus
          onChange={onTextChange}
          type='text'
          style={inputStyle}
        ></input>
        <ul style={listStyle}>
          {
            items
              .map((item, idx) => (
                <li
                  key={`${item.name}`}
                  style={listItemStyle}
                >
                  {renderItem(item, idx === selectedIndex)}
                </li>
              ))
          }
        </ul>
      </Modal>
    </div>
  );
};

interface QuickPickGlobals<Item extends HasName> {
  isOpen: boolean;
  showQuickPick: (items: Item[]) => Promise<Item | null>;
  cancelQuickPick: () => void;
  selectItemQuickPick: () => void;
  nextItemQuickPick: () => void;
  previousItemQuickPick: () => void;
}

const createQuickPickContext = <Item extends HasName>({
  renderItem,
  textFilter,
}: {
  renderItem: (item: QuickPickItem<Item>, isSelected: boolean) => ReactNode,
  textFilter: TextFilter,
}) => {
  const QuickPickContext = createContext<QuickPickGlobals<Item>>({
    isOpen: false,
    showQuickPick: () => { throw Error('QuickPickGlobals is not initialized yet') },
    cancelQuickPick: () => { throw Error('QuickPickGlobals is not initialized yet') },
    selectItemQuickPick: () => { throw Error('QuickPickGlobals is not initialized yet') },
    nextItemQuickPick: () => { throw Error('QuickPickGlobals is not initialized yet') },
    previousItemQuickPick: () => { throw Error('QuickPickGlobals is not initialized yet') },
  });

  const QuickPickProvider = ({
    children
  }: {
    children: ReactNode,
  }) => {
    const deferredRef = useRef<Deferred<Item | null> | null>(null);
    const [items, setItems] = useState<Item[]>([]);

    const {
      isOpen,
      open,
      close,
      // toggle,
      nextItem,
      previousItem,
      select,
      chanegeInputText,
      matchedItems,
      selectedIndex,
    } = useQuickPickLogic<Item>({items, textFilter});

    const onTextChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      chanegeInputText(event.target.value);
    };

    const showQuickPick = (items: Item[]): Promise<Item | null> => {
      setItems(items);
      const deferred = new Deferred<Item | null>();
      deferredRef.current = deferred;
      open();
      return deferred.promise;
    };

    const cancelQuickPick = () => {
      close();
      deferredRef.current?.resolve(null);
    };

    const selectItemQuickPick = () => {
      const item = select();
      deferredRef.current?.resolve(item);
    };

    const quickPickGlobals: QuickPickGlobals<Item> = {
      isOpen,
      showQuickPick,
      cancelQuickPick,
      selectItemQuickPick,
      nextItemQuickPick: nextItem,
      previousItemQuickPick: previousItem,
    };

    return (
      <QuickPickContext.Provider
        value={quickPickGlobals}
      >
        <QuickPickPresentational
          isOpen={isOpen}
          items={matchedItems}
          selectedIndex={selectedIndex}
          onClose={cancelQuickPick}
          onTextChange={onTextChange}
          onMouseDownOutside={cancelQuickPick}
          renderItem={renderItem}
        />
        {children}
      </QuickPickContext.Provider>
    );
  };

  return {
    QuickPickContext,
    QuickPickProvider,
  };
};

export {
  createQuickPickContext,
};
